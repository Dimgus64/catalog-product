# Gunakan image node yang ringan
FROM node:18-alpine

# Buat direktori kerja di dalam container
WORKDIR /usr/src/app

# Copy package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Install Nest.js CLI
RUN npm install -g @nestjs/cli

# Copy seluruh source code
COPY . .

# Build aplikasi Nest.js
RUN npm run build

# Set environment variable
ENV PORT=3000

# Expose port 3000 untuk akses aplikasi
EXPOSE 3000

# Perintah untuk menjalankan aplikasi Nest.js
CMD ["npm", "run", "start:prod"]
