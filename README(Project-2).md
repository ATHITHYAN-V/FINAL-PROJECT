## 🚀 CI/CD Pipeline with Docker & GitHub Actions (Local Deployment)

This project demonstrates a complete CI/CD pipeline using **Docker** and **GitHub Actions** for building, testing, and deploying a Node.js application locally using **Minikube** (no cloud required).

---

## 📦 Tools & Technologies

- **GitHub Actions** – CI/CD automation
- **Docker** – Containerization
- **Docker Hub** – Image registry (Free Tier)
- **Minikube** – Local Kubernetes deployment
- **Node.js** – Sample application

## 🔐 Set Up GitHub Secrets
Go to your GitHub repository:

- Settings > Secrets and variables > Actions

- DOCKER_USERNAME

- DOCKER_PASSWORD

![image](https://github.com/user-attachments/assets/d8d6f8d8-b92a-41f8-b1de-00f164ddcdd4)


## 🐳 Dockerfile
```Dockerfile
  # Use a Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app source code
COPY . .

# Expose Vite dev server port and Express port if needed
EXPOSE 5173
EXPOSE 3000

# Use npm script to run both frontend and backend (see below)
CMD ["npm", "run", "dev"]
```
## ⚙️ GitHub Actions Workflow
.github/workflows/main.yml
```yaml
name: Project-2

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: |
          cd Project-2
          npm install

      - name: Log in to DockerHub
        uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}

      - name: Build Docker image
        run: docker build -t ${{ secrets.DOCKER_USERNAME }}/portfolio:latest -f Project-2/Dockerfile ./Project-2

      - name: Push Docker image
        run: docker push ${{ secrets.DOCKER_USERNAME }}/portfolio:latest
```
![image](https://github.com/user-attachments/assets/fd490fa7-034c-4351-b62f-5a5ca684e028)

![image](https://github.com/user-attachments/assets/7db75dcd-38cb-4f88-8966-ad8c6478e408)

![image](https://github.com/user-attachments/assets/f3c6ea5e-85ae-4d24-ac64-88dc3a28e925)


## 🚀 Local Deployment with Minikube

1) Start Minikube:
   
- minikube start
  
![Screenshot 2025-05-01 181501](https://github.com/user-attachments/assets/55977e4a-d64e-492f-a026-fc9c1ffaaf2b)

2) Apply Kubernetes pod creation:
   
- kubectl apply -f pod.yaml

![Screenshot 2025-05-01 231348](https://github.com/user-attachments/assets/3ec6bcf5-6f6c-4057-bf93-4a5994efb4c8)

3) Apply Kubernetes service creation:
   
- kubectl apply -f service.yaml

![Screenshot 2025-05-01 231412](https://github.com/user-attachments/assets/3b73470b-0a04-4ae6-bafd-cf0e022ff64e)

4) Verify it
   
- kubectl get pods
- kubectl get svc

![Screenshot 2025-05-01 231430](https://github.com/user-attachments/assets/19515af4-0af4-4402-874d-af8b66bad6a5)

5) Get Minikube IP & Access the App
   
Get Minikube IP:

- minikube ip
  
Get NodePort for your service:

- kubectl get svc portfolio-service

  
## 🌍URL to Open in Browser:

Visit: 👉http://192.168.49.2:30022

![Screenshot 2025-05-01 231541](https://github.com/user-attachments/assets/a03e836c-8809-49b8-8ef7-e1e54fab6ae0)





