# microservices-architect-config-starter
Microservices Architecture Configuration Starter Sample




Architecture of sample multiple microservices developed in different technologies - Spring Boot, Node.js, Python, React.js in a project.
Microservices connected by an API Gateway using Netflix Zuul and Netflix Eureka.


## Application Architecture

The application consists of 7 different Microservices

-   [shoes-microservice-spring-boot](https://github.com/sarat9/microservices-architect-config-starter/tree/main/shoes-microservice-spring-boot)  - Spring Boot App with Shoe data
-   [offers-microservice-spring-boot](https://github.com/sarat9/microservices-architect-config-starter/tree/main/offers-microservice-spring-boot)  - Spring Boot App with Offers data
-   [cart-microservice-nodejs](https://github.com/sarat9/microservices-architect-config-starter/tree/main/cart-microservice-nodejs)  - Node.js App with Cart data
-   [wishlist-microservice-python](https://github.com/sarat9/microservices-architect-config-starter/tree/main/wishlist-microservice-python)  - Python App with Wishlist data
-   [zuul-api-gateway](https://github.com/sarat9/microservices-architect-config-starter/tree/main/zuul-api-gateway)  - API gateway that proxies all the micro-services with Neflix Zuul
-   [eureka-discovery-server](https://github.com/sarat9/microservices-architect-config-starter/tree/main/eureka-discovery-server)  - Service Registration and Discovery Server with Netflix Eureka
-   [ui-web-app-reactjs](https://github.com/sarat9/microservices-architect-config-starter/tree/main/ui-web-app-reactjs)  - Single Page Application that provides the UI


*Optional* - [config-server-spring-boot](https://github.com/sarat9/config-server-spring-boot) repo has a config server service, you can chose to connect them if you want. It is different repository. 


##


![MicroService Architeture ](https://miro.medium.com/max/1050/1*kSLJKEl3X-gKNTpO1l7SQg.png)# Microservices Architecture Sample!

#
#

# Microservices
Crafting Microservices now become an industry standard for any new API development, and almost all the organizations are promoting it.
Microservices are Decentralized, Independent and  Loosely coupled.
Before we go into why we need microservices. Lets understand the problems of our traditional monolitic approach.

## Problems of Monolithic
Problems of Monolithic:

- Large monolithic code base makes complicated to understand and maintain as it grows.
- Scaling become challenging - As everything is packaged in one EAR/WAR, Scaling such a monolithic application can only be accomplished by deploying the same EAR/WAR packages in more servers — also known as horizontal scaling. Each copy of the application in various servers will utilize the same amount of underlying resources, which is often not an efficient way to design.
- Tightly coupled
- Extremely difficult to change technology or language or framework (hybrid technologies) because everything is tightly coupled and depend up on each other.
- Non ability to change tech stack will affect business badly and make it lose lot of modern tech solutions.
- Refactoring code base is difficult
- No fault isolation - If any single function fails, the entire application goes down.
- If a particular function consumes more memory, entire application feels the pain.


## Why go for Microservices?
- A microservices architecture takes single responsibility principle approach.
- Microservices are small, independent, and loosely coupled.
- Microservices are Decentralized, Highly maintainable, Independently deployable. 
- Do one thing well. Organized around business capabilities.
- Agility, scalability, availability, reusability. 
- Improves fault isolation.
- Eliminates long-term commitment to a single technology stack, Code for different services can be written in different languages
- Can be developed, deployed, and maintained independently.
- Services can also be deployed independently of each other and hence its easy to identify hot services and scale them independent of whole application. 
- Development Team Scaling - Each service is a separate codebase, which can be managed by a small development team.
- Development Speed: Microservices are often quite small in size. Due to the size, adding new features in Microservices are usually faster.

#
#

This repository helps with following understanding:
- Modularizing into seperate Microservices
- Microservices developed in different technologies
- Microservices integrated by API gateway
- Discovery and Service Register 

You can use the project as base to start a project or demo... 
or 
To just play around..

#
#

Go Through - https://microservices.io/index.html

#
#

Feel Free to contribute.. 


[![GitHub followers](https://img.shields.io/github/followers/sarat9.svg?label=Follow%20@sarat9&style=social)](https://github.com/sarat9/)
