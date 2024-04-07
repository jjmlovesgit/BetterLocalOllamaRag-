# Ollama RAG with a "Live" Avatar from D-ID 

I will plan to do a step by video series of how to set this up and run it over on Youtube
https://www.youtube.com/@AI_by_AI_007/videos In the meantime here are the steps:

## Initial Setup (You should complete these defore starting on the software):
* Do you have an Nvidia GPU?  Make sure your Nvidia Drivers are set up
   * https://www.nvidia.com/Download/index.aspx?lang=en-us
* Install Docker
   * https://docs.docker.com/desktop/install/windows-install/
* Install Ollama
   * https://www.ollama.com
   * Setup Video: (https://youtu.be/90ozfdsQOKo)

## Software Setup 
* Step 1:  Clone (or copy) the Repo here to youR project folder
    * https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository
* Step #2:  Download and install Node.js if you have not already done so
    * https://nodejs.org/en/download/
* Step #3:  NPM package installs
   * From project folder where you copied the files from Github in step #1
   * Open a terminal session in your projeecty folder (Helpful Setup Video:  https://youtu.be/P3aKRdUyr0s)
        * run this: npm install express
        * run this: npm install langchain
        * run this: npm install openai (ollama is openai API Compatible)
* Step 4:  Optional Sign up for the free Tier D-ID Avatar service
    * https://www.d-id.com and get your API key
    * Add your d-id api key to the `api.json` file in you prject directory 
* Run a test to ensure your D-ID api is set correctly
    * Test by checking d-id credit balance:  Run <node test_d_id.js>

* Run a test to ensure yor api is set correctly by checking Ollama:  Run a local Query to your LLM using or preferred tool Webui etc
* Got issues with Ollama?  Check this channel -- hands down best Ollama resource:  https://www.youtube.com/watch?v=90ozfdsQOKo
* Ask for assistance over on D-ID discord https://discord.gg/Ux6S5mQT as I am on there daily

## Start the demo:
* From directory where you installed Node (npm install express)
* start up the server with node app.js
* You should see this message - server started on port localhost:3001
* (open index.html app) in the browser add http://localhost:3001/index.html
* (connect) press connect you should see the connection ready 
* The looping Avatar video should play
* Clear all the check boxes and test that you can chat with your Ollama Model only (No Did Avatar)
* Once Ollama and you LLM are chatting then test voice typing to see if your browser is set up correctly
* Check the box to send to D-ID and press the connect button to set up streaming conmnections
* Input a Chat and the D-ID service will animate the response 

## Final Thoughts
* Be patient and enjoy the puzzle if things are not working right away -- stay with it you will get it!

For help See the Youtube:  
https://github.com/jjmlovesgit/BetterLocalOllamaRag-/blob/main/thumb.png
![image](https://github.com/jjmlovesgit/BetterLocalOllamaRag-/assets/47751509/f02db0a0-38dd-4c40-a407-9cd211cfd97f)

Helpfull Flowchart:
![image](https://github.com/jjmlovesgit/OllamaDID/assets/47751509/ac9a52fd-06d2-49ce-bb4d-2f6d8ff204b5)



