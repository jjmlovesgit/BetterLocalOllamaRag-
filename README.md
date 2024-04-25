# Ollama RAG with a "Live" Avatar from D-ID 

https://youtu.be/xb8vj5Wqy20

I plan to create a step-by-step video series on how to set this up and run it on YouTube
https://www.youtube.com/@AI_by_AI_007/videos In the meantime, here are the steps:

## Initial Setup (You should complete these first):
* Do you have an Nvidia GPU? Make sure your Nvidia drivers are set up
   * https://www.nvidia.com/Download/index.aspx?lang=en-us
* Do you want to use Docker to run Ollama?  
   * https://docs.docker.com/desktop/install/windows-install/
* Install Ollama
   * https://www.ollama.com
   * Setup Video: (https://youtu.be/90ozfdsQOKo)

## Software Setup 
* Step 1:  Clone (or copy) the repository here to your project folder
    * https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository
* Step 2:  Download and install Node.js if you have not already done so
    * https://nodejs.org/en/download/
* Step 3:  NPM package installs
   * From the project folder where you copied the files from GitHub in step 1
   * Open a terminal session in your project folder (Helpful Setup Video:  https://youtu.be/P3aKRdUyr0s)
        * Run this: npm install express
        * Run this: npm install langchain
        * Run this: npm install openai (Ollama is OpenAI API compatible)
        * Install all the elements from package.json etc
* Step 4:  Optional sign up for the free tier D-ID Avatar service
    * https://www.d-id.com and get your API key
    * Add your D-ID API key to the `api.json` file in your project directory 
    * Run a test to ensure your D-ID API is set correctly
        * Test by checking D-ID credit balance:  Run this: node test_d_id.js
* Step 5:  Install Ollama https://ollama.com/blog/ollama-is-now-available-as-an-official-docker-image Test your Ollama installation https://github.com/ollama/ollama

## Troubleshooting steps above 
* Got issues with Ollama? Check this channel -- hands down the best Ollama resource: https://www.youtube.com/watch?v=90ozfdsQOKo
* Consult with ChatGPT or your favorite model -- they all know more than I do :)
* For human assistance try Discord as all these packages have servers with helpful people on them
        D-ID Discord: https://discord.gg/Ux6S5mQT
        Ollama Discord: https://discord.gg/74FzdcnZ
  
# Starting the Software:
* From your project directory and session where you installed Node and ran npm install express in step 3
* Start up the backend server by running node app.js
* You should see this message - server started on port localhost:3001
* Open index.html in the browser add http://localhost:3001/index.html
* Press the connect button; you should see the connection ready feedback at the bottom of the screen
* The looping Avatar video should play, waiting for your question
* Clear all the checkboxes and test that you can chat with your Ollama Model only (No check for D-ID Avatar)
* Now check the box for a voice replay (still without D-ID checkbox) to test voice playback
* Once Ollama and your LLM are chatting via text, then test voice typing to see if your browser is set up correctly
* Now you are ready to check the box to send to D-ID (press the connect button to set up streaming connections)
* Input a chat and the D-ID service will animate the response.

## Final Thoughts
* Be patient and enjoy the puzzle if things are not working right away -- stay with it you will get it!
https://youtu.be/xb8vj5Wqy20

For help See the Youtube:  
[https://github.com/jjmlovesgit/BetterLocalOllamaRag-/blob/main/thumb.png](https://youtu.be/xb8vj5Wqy20)
![image](https://github.com/jjmlovesgit/BetterLocalOllamaRag-/assets/47751509/f02db0a0-38dd-4c40-a407-9cd211cfd97f)

Helpfull Flowchart:
![image](https://github.com/jjmlovesgit/OllamaDID/assets/47751509/ac9a52fd-06d2-49ce-bb4d-2f6d8ff204b5)



