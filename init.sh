#!/bin/bash
set -e

echo "🚀 Starting SenseGrid setup..."

# --- 1️⃣ Install Docker if missing ---
if ! command -v docker &> /dev/null
then
  echo "🐳 Docker not found. Installing Docker..."
  apt-get update -y
  apt-get install -y ca-certificates curl gnupg lsb-release

  mkdir -p /etc/apt/keyrings
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg

  echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
    https://download.docker.com/linux/ubuntu \
    $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null

  apt-get update -y
  apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

  systemctl enable docker
  systemctl start docker
else
  echo "✅ Docker already installed."
fi

# --- 2️⃣ Install docker-compose (standalone CLI) if missing ---
if ! command -v docker-compose &> /dev/null
then
  echo "⚙️ Installing docker-compose..."
  curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" \
    -o /usr/local/bin/docker-compose
  chmod +x /usr/local/bin/docker-compose
else
  echo "✅ docker-compose already installed."
fi

# --- 3️⃣ Run the containers ---
echo "📦 Building and starting containers..."
docker-compose up -d --build

echo "🎉 SenseGrid deployed successfully!"
