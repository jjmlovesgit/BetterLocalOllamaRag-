#!/bin/bash

# Start the Docker containers using docker-compose
docker-compose up -d

# Check if docker-compose up was successful
if [ $? -eq 0 ]; then
    echo " "
    echo "Docker containers started successfully!"
    echo " "
else
    echo "Failed to start Docker containers."
    exit 1
fi

# Execute 'ollama list' command in ollama-1 container
docker exec ollama-1 ollama list llama2:latest
echo " "
echo "Step #1 of #3 - Validating model take a minute"
echo " "
docker exec ollama-1 ollama pull llama2:latest
echo " "
echo "Step #2 of #3 - Starting the llama2:latest may take several minutes"
echo " "
docker exec ollama-1 ollama run llama2:latest
echo " "

# Execute 'ollama list' command in ollama-2 container
docker exec ollama-2 ollama list nomic-embed-text:latest
echo " "
echo "Step #3 of #3 - Validating the nomic-embed-text model take a minute"
echo " "
docker exec ollama-2 ollama pull nomic-embed-text:latest