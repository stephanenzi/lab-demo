#!/bin/bash

# Source environment files
if [ -f .env.network ]; then
    source .env.network
else
    echo "Error: .env.network file not found"
    exit 1
fi

if [ -f .env.volume ]; then
    source .env.volume
else
    echo "Error: .env.volume file not found"
    exit 1
fi

# Create volume if it doesn't exist
if [ "$(docker volume ls -q -f name=$VOLUME_NAME)" ]; then
    echo "A volume with the name $VOLUME_NAME already exists. Skipping volume creation."
else
    echo "Creating Docker volume: $VOLUME_NAME"
    docker volume create $VOLUME_NAME
fi

# Create network if it doesn't exist
if [ "$(docker network ls -q -f name=$NETWORK_NAME)" ]; then
    echo "A network with the name $NETWORK_NAME already exists. Skipping network creation."
else
    echo "Creating Docker network: $NETWORK_NAME"
    docker network create $NETWORK_NAME
fi