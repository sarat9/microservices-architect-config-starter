# eureka-discovery-server
Service Registration and Discovery with Netflix Eureka


## Build Instruction
```
mvn clean install
java -jar eureka-0.0.1-SNAPSHOT.jar

```
*App runs on port **8761***


> Open http://localhost:8761 in browser
> 


> Access the app from endpoint:
> API Gateway from localhost:9999 is the  single point of entry or a gateway for all the incoming traffic to our microservices.
> Eureka Registry API Endpoints - We dont need to hardcode IP adresses of Microservices and is picked by itself from serviceIds configuration.

offers-microservice-spring-boot 
```
Eureka Registry API Endpoint  :  http://localhost:9999/offerapi/api/v1/offers
Zuul API endpoint:  http://localhost:9999/offer/offers
Original endpoint: http://localhost:1001/api/v1/offers
Method: GET
Response:
{"samsung":"Samsung 10% Discount","adidas":"Adidas Shoe 70% Off","nikeshoe":"Nike Sports Shoe 50% off"}
```
shoes-microservice-spring-boot 
```
Eureka Registry API Endpoint  :  http://localhost:9999/shoeapi/api/v1/shoes
Zuul API endpoint:  http://localhost:9999/shoe/shoes
Original endpoint: http://localhost:1002/api/v1/shoes
Method: GET
Response:
{"tommy":"Tommy Hilfiger Shoe","adidas":"Adidas Running Shoe","nikeshoe":"Nike Sports Shoe"}
```
wishlist-microservice-python
```
Eureka Registry API Endpoint  :  -- Not Yet Configured --
Zuul API endpoint:  http://localhost:9999/wishlist
Original endpoint: http://localhost:1003/
Method: GET
Response:
{"1": "Apple Iphone", "2": "MacBook", "3": "Your Fav Something else"}
```
cart-microservice-nodejs 
```
Eureka Registry API Endpoint  :  http://localhost:9999/cartapi/api/v1
Zuul API endpoint:  http://localhost:9999/cart
Original endpoint: http://localhost:1004/api/v1/
Method: GET
Response:
{"data":[{"itemNo":1,"item":"Nike Shoe"},{"itemNo":2,"item":"Tommy Hilfiger Shirt"},{"itemNo":3,"item":"Calvin Klien Trousers"}]}
```
##
##
##

# About Eureka

**Eureka** Microservice is a Service Registration and Discovery Server using [Netflix Eureka](https://github.com/Netflix/eureka).

In a micro-service architecture, there could be ten to millions of services deployed, running and communicating independently. The problem of these type of architecture is that how to find all other service endpoints. Eureka provides the solution.

The Netflix Eureka server provides service discovery. This gives your application’s services the ability to find other services without knowing where they are hosted or the full URL required to reach them, so you don’t have to provide complete URLs for each service that needs to reach another service.

Netflix Eureka is a lookup server (also called a registry). All micro-services (Eureka clients) in the cluster register themselves to this server. 

There are also other service discovery clients like Consul, Zookeeper etc, but we will be using Eureka in this app. 



**Eureka Helps with..**
Eureka helps with Service Registration and Discovery service
 - Discovery service
 - Service Registration
 
  

![MicroService Architeture with Eureka](https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99A0213F5C5C2B7F32)# Microservices Architecture with Eureka

#
#


> Reference and src:
> 
>https://medium.com/@ijayakantha/microservices-service-registration-and-discovery-with-netflix-eureka-9a2aa729da96
>https://itnext.io/how-to-use-netflixs-eureka-and-spring-cloud-for-service-registry-8b43c8acdf4e
>https://medium.com/analytics-vidhya/load-balancing-with-eureka-and-zuul-443d22a6e73c




##

Errors you might face while SetUp:

Error:
Consider defining a bean of type 'com.netflix.discovery.DiscoveryClient' in your configuration.

Solution:
You imported wrong DiscoveryClient class in your code. DiscoveryClient from netflix is not provided as Spring Bean. So you should use one from spring-cloud.
Try to import org.springframework.cloud.client.discovery.DiscoveryClient instead of com.netflix.discovery.DiscoveryClient in your ClientService class.
Ref:https://stackoverflow.com/questions/42845084/cannot-find-discoveryclient-bean-error-in-spring-boot


##
