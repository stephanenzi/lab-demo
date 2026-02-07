#!/bin/bash

source .env.network
source .env.volume
source .env.db

if [ "$(docker ps -aq -f name=$DB_CONTAINER_NAME)" ]; then
    echo "A container with the name $DB_CONTAINER_NAME exists."
    echo "Removing the container: $DB_CONTAINER_NAME."
    docker kill $DB_CONTAINER_NAME
    # docker rm $DB_CONTAINER_NAME - Add this line if you want to remove the container entirely
else
    echo "No running container with the name $DB_CONTAINER_NAME found."
fi

# Stop and remove the volume of the container if it exists
if [ "$(docker volume ls -q -f name=$VOLUME_NAME)" ]; then
    docker volume rm $VOLUME_NAME
    echo "Removed Docker volume: $VOLUME_NAME"
else
    echo "A volume with the name $VOLUME_NAME does not exist. Skipping volume removal."
fi

# Stop and remove the Network of the container if it exists
if [ "$(docker network ls -q -f name=$NETWORK_NAME)" ]; then
    docker network rm $NETWORK_NAME
    echo "Removed Docker network: $NETWORK_NAME"
else
    echo "A network with the name $NETWORK_NAME does not exist. Skipping network removal."
fi