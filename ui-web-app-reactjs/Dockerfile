FROM node:8 #baseiamge
MAINTAINER scsharath2@gmail.com Sarat Chandra G


WORKDIR /app # Where the app should be deployed
COPY . . #copy the all the code from local to docker image

RUN npm install express #build the node code
RUN npm install 

EXPOSE 8080 #exposing the application

#Runs in development Mode 
CMD ["npm", "start"] #once the image is build, start  the application