# Socket IO Server Example
## Using Clean Architecture with dependency injection

### Server explanation

This app creates a socket.io server that emits a random number, mocked an altitude of a airplane

Using clean architecture, leaving the way ready to use dependency investment

### To run this app en dev mode, follow this steps
  
    - npm i (only once)
    - npm run dev

### To run in production mode
 
    - npm i (only once)
    - npm start

In both cases use **CTRL + C** to stop the app

### Client explanation

In this code have a client, that connect to socket in the default port (8080), and emit to a chanel in wich server emit the random numbers, when this client receive a message of the socket emit again in the same chanel to receive another number

### To run client of receive random number

    - node client.js
    - **CTRL + C** (To stop client)

### Docker build images and run 

    - Build image
      - docker build -t socket_example

    - Run container
      - docker run -d -p 8080:8080 socket_example:latest --name socket_example

