# cart-microservice-nodejs
Cart Microservice is a Node.js app with cart data.
Nodejs Server is configured as Eureka Client to access Eureka Server with name - cart-client

## Build Instruction
```
npm install
node index.js

```

*App runs on port **1004***


> Access the app from endpoint:

```
API endpoint:  http://localhost:1004/api/v1/
Method: GET
Response:
{"data":[{"itemNo":1,"item":"Nike Shoe"},{"itemNo":2,"item":"Tommy Hilfiger Shirt"},{"itemNo":3,"item":"Calvin Klien Trousers"}]}
```

##

> Reference and src:
> 
>https://itnext.io/how-to-use-netflixs-eureka-and-spring-cloud-for-service-registry-8b43c8acdf4e


