# microservices-architect-config-starter
Microservices Architecture Configuration Starter Sample




Architecture of sample multiple microservices developed in different technologies - Spring Boot, Node.js, Python, React.js in a project.
Microservices connected by an API Gateway using Netflix Zuul.


## Application Architecture

The application consists of 6 different Microservices

-   [shoes-microservice-spring-boot](https://github.com/sarat9/microservices-architect-config-starter/tree/main/shoes-microservice-spring-boot)  - Spring Boot App with Shoe data
-   [offers-microservice-spring-boot](https://github.com/sarat9/microservices-architect-config-starter/tree/main/offers-microservice-spring-boot)  - Spring Boot App with Offers data
-   [cart-microservice-nodejs](https://github.com/sarat9/microservices-architect-config-starter/tree/main/cart-microservice-nodejs)  - Node.js App with Cart data
-   [wishlist-microservice-python](https://github.com/sarat9/microservices-architect-config-starter/tree/main/wishlist-microservice-python)  - Python App with Wishlist data
-   [zuul-api-gateway](https://github.com/sarat9/microservices-architect-config-starter/tree/main/zuul-api-gateway)  - API gateway that proxies all the micro-services
-   [ui-web-app-reactjs](https://github.com/sarat9/microservices-architect-config-starter/tree/main/ui-web-app-reactjs)  - Single Page Application that provides the UI








![MicroService Architeture ](https://miro.medium.com/max/1050/1*kSLJKEl3X-gKNTpO1l7SQg.png)# Microservices Architecture Sample!



# Microservices
## Why go for Microservices?
Microservices are Decentralized, Independent, Highly maintainable and testable, Loosely coupled, Independently deployable, Organized around business capabilities, implemented with technologies by functional preference.
Do one thing well.
Agility, scalability, availability, reusability.
Improves fault isolation, Eliminates long-term commitment to a single technology stack, Code for different services can be written in different languages



## Problems of Monolithic
As everything is packaged in one EAR/WAR, we cannot change technology stack, refactoring code base is difficult.
If any single function fails, the entire application goes down.
If a particular function consumes more memory, entire application feels the pain.
Scaling such a monolithic application can only be accomplished by deploying the same EAR/WAR packages in more servers — also known as horizontal scaling. Each copy of the application in various servers will utilize the same amount of underlying resources, which is often not an efficient way to design.



Feel Free to contribute.. 
