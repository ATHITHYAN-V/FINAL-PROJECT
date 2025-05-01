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

