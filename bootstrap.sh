#!/bin/bash
set -e

# Only install Docker if not already installed
if ! command -v docker &> /dev/null
then
    echo "🚀 Installing Docker..."
    apt-get update -y
    apt-get install -y ca-certificates curl gnupg lsb-release software-properties-common

    # Add Docker GPG key and repo
    mkdir -p /etc/apt/keyrings
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    echo \
      "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
      $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null

    # Install Docker Engine & Compose
    apt-get update -y
    apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

    # Start Docker service
    systemctl enable docker
    systemctl start docker
    ln -sf /usr/libexec/docker/cli-plugins/docker-compose /usr/local/bin/docker-compose || true

    echo "✅ Docker installed successfully"
else
    echo "✅ Docker already installed"
fi
