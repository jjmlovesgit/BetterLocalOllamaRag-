# Ollama Backend with wive Avatar from D-ID
# A Langchain Retrieval on private data with D-ID and Ollama locally Hosted Models

I will plan to do a step by video series of how to set this code up and run it over on Youtube
https://www.youtube.com/@AI_by_AI_007/videos In the meantime use this please:

## Initial Setup:
* Install Ollama and set up (www.ollama.com)
* (install express) open a terminal in the folder:
* run this: npm install express
* run this: npm install langchain
* run this: npm install openai

* Optional - (www.d-id.com add your d-id api key) edit the `api.json` and replace text with your key
* Run a test to ensure yor api is set correctly by checking d-id credit balance:  Run node test_d_id.js

* Run a test to ensure yor api is set correctly by checking Ollama:  Run a local Query to your LLM using or preferred tool Webui etc
* Got issues with Ollama?  Check this channel -- hands down best Ollama resource:  https://www.youtube.com/watch?v=90ozfdsQOKo
* Ask for assistance over on D-ID discord https://discord.gg/Ux6S5mQT as both tests must work before proceeding

## Start the demo:
* From directory where you installed Node (npm install express)
* start up the server with node app.js
* You should see this message - server started on port localhost:3001
* (open index.html app) in the browser add http://localhost:3001/index.html
* (connect) press connect you should see the connection ready 
* The looping Avatar video should play
* Clear all the check boxes and test that you can chat with your Ollama Model only (No Did Avatar)
* Once Ollama and you LLM are chatting then test voice typing to see if your browser is set up correctly 

## Final Thoughts
* Be patient and enjoy the puzzle if things are not working right away -- stay with it you will get it!

For help See the Youtube:  
https://github.com/jjmlovesgit/BetterLocalOllamaRag-/blob/main/thumb.png
![image](https://github.com/jjmlovesgit/BetterLocalOllamaRag-/assets/47751509/f02db0a0-38dd-4c40-a407-9cd211cfd97f)

Helpfull Flowchart:
![image](https://github.com/jjmlovesgit/OllamaDID/assets/47751509/ac9a52fd-06d2-49ce-bb4d-2f6d8ff204b5)



