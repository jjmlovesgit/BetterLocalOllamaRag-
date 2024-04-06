// Import required modules
const express = require('express');
const http = require('http');
const { RetrievalQAChain, loadQAStuffChain } = require('langchain/chains');
const { RecursiveCharacterTextSplitter } = require('langchain/text_splitter');
const fs = require('fs');
const { Ollama } = require('langchain/llms/ollama');
const { MemoryVectorStore } = require('langchain/vectorstores/memory');
const { OllamaEmbeddings } = require('langchain/embeddings/ollama');

const ollama = new Ollama({
  baseUrl: "http://localhost:11434", // local host to 0.0.0.0
  model: "Llama2", //or use Llama2 7B Q4 "solar:10.7b-instruct-v1-q8_0"
  keepalive: -1,
  temperature: 0.1,
  topK: 10,
  topP: 0.4,
  repeatPenalty: 1.3,
  maxtokens: 512,
  });

// Configure the Ollama embeddings with specific parameters for model and server
const embeddings = new OllamaEmbeddings({
    baseUrl: "http://localhost:11435", // Local URL where the Ollama API is running
    model: "nomic-embed-text", // Specified model to use for embeddings
    requestOptions: {
    keepalive: -1,
    useMMap: true, // Utilize memory mapping for efficiency
    numThread: 6, // Set the number of processing threads
    numGpu: 1, // Define the number of GPUs to use
  },
});

// Create an Express application
const app = express();
// Configure the application to parse JSON request bodies
app.use(express.json());
// Serve static files from the current directory
app.use('/', express.static(__dirname));

// Read a text file and split it into chunks for document processing
const text = fs.readFileSync('./Alpinefull2.txt', 'utf8');
const textSplitter = new RecursiveCharacterTextSplitter(
  chunk_size = 200,
  chunk_overlap = 50,
)

// Print the length of the text
console.log('Length of text:', text.length);

// Split the text into chunks
const tmp = textSplitter.splitText(text);
console.log('Split text:', tmp);

// Main async function to initialize LangChain components
(async () => {
  let docs;
  try {
    docs = await textSplitter.createDocuments([text]);
  } catch (error) {
    console.error('Error creating documents:', error);
    process.exit(1);
  }

// Initialize a vector store using the documents and OpenAI embeddings
  const vectorStore = await MemoryVectorStore.fromDocuments(docs, embeddings);
  
// Convert the vector store into a retriever
const vectorStoreRetriever = vectorStore.asRetriever();

// Initialize the RetrievalQAChain
const chain = new RetrievalQAChain({
  llm: ollama, // Use your initialized Ollama model here
  combineDocumentsChain:  loadQAStuffChain(ollama),
  retriever: vectorStoreRetriever, // Use your initialized vector store retriever here
  returnSourceDocuments: true,
});


  //Define a route to handle queries 
    app.post('/query', async (req, res) => {     
      
      const System = "You are a concierge for the exclusive Highland House rental property. \
      When the user asks a question you will be given then a truthful answer using the FAQ context data from the FAQ document provided \
      The FAQ is srtructured as question and answer pairs to help you find answers. Do not mention FAQ document when answering. \
      Provide a helpful answer in three sentences.\  Answer only once.  Do not repeat the question.  Do not explain your reasoning.\
      If there is no answer in the context say 'I do not have the answer that question in my knowledgebase.' \
      DO NOT make up answers and you do not repeat yourself. Remember Do not mention FAQ document when answering." 

      //Concatenate system prompt with user query <s>[INST] <<SYS>> \ </SYS>"

      const fullQuery = `${System}\n\nUser Query: ${req.body.query}\n\nAnswer:`;  //Added the oncatenate \n\nAnswer:

      // Log the received query
      //console.log('User query:', req.body.query);
      //console.log('Ollama initialized:', ollama);
      //console.log('Vector Store Retriever initialized:', vectorStoreRetriever);
      //vectorStoreRetriever) is used when doing the stuff method
      
      try {
        // Assuming chain.call is the method you're using and it returns a response
        const result = await chain.call({ query: fullQuery });
        console.log('Result text:', result.text); // Corrected to log result.text
    
        // Send the response back to the client
        res.json(result);
      } catch (error) {
        // Handle any errors that occur during the process
        console.error('Error processing query:', error);
        res.status(500).send('An error occurred while processing your request.');
      }
    });

  // Start the HTTP server on port 3001
  const port = 3001;
  const server = http.createServer(app);
  server.listen(port, () => console.log(`Server started on port localhost:${port}`));
})();
