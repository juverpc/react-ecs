FROM public.ecr.aws/amazonlinux/amazonlinux:latest
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN yum install curl -y
RUN yum update
RUN curl –sL https://rpm.nodesource.com/setup_10.x | sudo bash -
RUN yum install nodejs -y
RUN npm install
CMD ["npm", "run", "start"]