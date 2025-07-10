# Use official Node LTS image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy only package.json and package-lock.json first
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy the rest of the app source code
COPY . .

# Expose app port
EXPOSE 3000

# Set environment variable
ENV NODE_ENV=production

# Start the app
CMD [ "npm", "start" ]
