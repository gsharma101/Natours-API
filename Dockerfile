# Use official Node.js LTS image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json (if exists) separately to leverage Docker cache
COPY package.json package-lock.json* ./

# Install dependencies (production by default)
RUN npm install --production

# Copy all project files
COPY . .

# Build JS bundle if needed
RUN npm run build:js

# Expose port your app runs on (default 3000, change if needed)
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start"]
