FROM public.ecr.aws/amazonlinux/amazonlinux:latest
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm install
CMD ["npm", "run", "start"]