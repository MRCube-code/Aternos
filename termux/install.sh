#!/data/data/com.termux/files/usr/bin/bash

pkg update -y
pkg install wget unzip openjdk-17 nodejs playit -y

mkdir -p ~/mcserver
cd ~/mcserver

echo "Downloading Minecraft Bedrock Server..."
wget -O bedrock.zip https://minecraft.azureedge.net/bin-linux/bedrock-server-1.20.60.04.zip

unzip bedrock.zip -o

chmod +x bedrock_server

echo "Setup complete"
