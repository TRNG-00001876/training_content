**Spring Core**

- the purpose of the Spring framework.
- What is dependency injection?
- What is inversion of control?
- How is dependency injection achieved within the Spring framework?
- What is the primary IOC container in Spring?
- What are some differences between the ApplicationContext and the BeanFactory in Spring?
- Are beans loaded eagerly or lazily within the ApplicationContext? How can you change this?
- What are some ways that a bean registry can be provided to Spring?
- What is component-scanning in Spring?
- What are the Spring stereotype annotations?
- What is the difference between manual bean wiring and autowiring?
- What is the standard lifecycle of a bean within the ApplicationContext?
- What are the scopes of a Spring bean? What is the default?
- What are the autowiring modes Spring uses to resolve autowired dependencies?
- What are forms of dependency injection supported by Spring?
- If using Java-class configuration, what is the default name given to a bean? How can you change this?
- If using component-scanning, what is the default name given to a bean? How can you change this?
- How can you provide a scalar or literal value for injection into the property of a Spring bean?

**Spring Boot Annotations**

- What is Spring Boot?
- Why is Spring Boot said to be "opinionated"?
- What is the Spring Boot starter POM? Why is it useful?
- What are some notable features in Spring Boot?
- What annotation is used to denote an application as a Spring Boot application? Where should this be placed?
- What other annotations are implied by @SpringBootApplication?
- What file formats does Spring Boot support for configuration?

**Spring MVC**

- What is Spring MVC? How is it enabled for use within a Spring application?
- Describe the data flow of a request/response operation within a Spring MVC application.
- List some Spring MVC annotations.
- What is the difference between @RestController and @Controller?
- What is the difference between @RequestBody and @ResponseBody?
- What is the difference between @RequestParam and @PathVariable?
- What is the DispatcherServlet and what is it used for?
- What is an exception handler? How would you declare one for use within a controller?

**Spring Data JPA**

- What is Spring Data JPA?
- What is a repository interface?
- How does Spring Data JPA figure out how to query our data source if it uses interfaces with no explicitly defined implementations?
- What is the purpose of @Query within Spring Data JPA?
- What are common interfaces which our custom data repository interfaces should extend?
- What is the purpose of @Transactional? Where should this annotation be placed? How is its use enabled?
- What are transaction propagation levels in Spring ORM?

**Testing**

- How would you go about testing a Spring MVC controller?

**Actuator**

- What are some notable features in Spring Boot? 
- What is the primary purpose of the Spring Boot Actuator?
- How do you enable the Actuator in a Spring Boot application?
- What are some of the common Actuator endpoints?
- How can you configure the Actuator endpoints to expose different levels of information?
