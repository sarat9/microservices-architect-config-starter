# zuul-api-gateway
API Gateway for all the microservices

## Build Instruction
```
mvn clean install
java -jar zuul-0.0.1-SNAPSHOT.jar

```
*App runs on port 9999*
##

# About Zuul

**zuul-api-gateway** Microservice is a API gateway using [Netflix Zuul](https://github.com/Netflix/zuul).

*Zuul is the front door for all requests from devices and websites to the backend of the Netflix streaming application.*

In order to have a robust approach, we have to implement a single point of entry or a gateway for all the incoming traffic to microservices. UI will always send requests to the gateway and in turn the gateway will forward the requests to relevant microservices. Essentially, gateway acts as a middle-ware between the UI and the microservices.

**Zuul Helps with..**
Zuul uses a range of different types of filters that enables us to quickly and nimbly apply functionality to our edge service. These filters help us perform the following functions:

 - Authentication and Security — identifying authentication requirements
   for each resource and rejecting requests that do not satisfy them.
 - Insights and Monitoring — tracking meaningful data and statistics at
   the edge in order to give us an accurate view of production.
 - Dynamic Routing — dynamically routing requests to different backend
   clusters as needed.
 - Stress Testing — gradually increasing the traffic to a cluster in
   order to gauge performance.
 - Load Shedding — allocating capacity for each type of request and
   dropping requests that go over the limit.
 - Static Response handling — building some responses directly at the
   edge instead of forwarding them to an internal cluster
 - Multiregion Resiliency — routing requests across AWS regions in order
   to diversify our ELB usage and move our edge closer to our members

 

**Filters**

Filters are a way of extending Zuul’s default functionality and adding your own custom features. Filters can be divided into four types based on the stage that they are executed in, during the request routing process.

 - pre — filters run before the request is routed.
 - route — filters can handle the actual routing of the request.
 - post — filters run after the request has been routed.
 - error — filters run if an error occurs in the course of handling the
   request.

  

Filter classes implement four methods:

 - run(): Contains the functionality of the filter.
 - shouldFilter(): Contains the logic that determines when to run this
   filter true or false on condition.
 - filterOrder(): Gives the order in which this filter is to be run,
   relative to other filters.
 - filterType(): Returns a String that stands for the type of the filter ("pre", "post","route","error"). 

  

You can integrate Zuul with other Netflix stack components like Hystrix for fault tolerance and Eureka for service discovery or use it to manage routing rules, filters and load balancing across your system.

  
  

> Reference and src:
> 
> https://netflixtechblog.com/announcing-zuul-edge-service-in-the-cloud-ab3af5be08ee
> 
> https://netflixtechblog.com/open-sourcing-zuul-2-82ea476cb2b3
> 
> https://medium.com/@jegasingamjeyanthasingam/zuul-functionality-routing-proxy-and-filters-285f911146ea
> 
> https://medium.com/omarelgabrys-blog/microservices-with-spring-boot-creating-our-microserivces-gateway-part-2-31f8aa6b215b
> 
> https://levelup.gitconnected.com/spring-cloud-zuul-api-gateway-dffa5933d570

