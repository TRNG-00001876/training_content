**Logging**

In logging, there is a log file. The log file is a file that contains information about the occurrence of an event, usually in the log file, 
there is information about the time of the event and the message of the event. Logging is the act of adding log information to a log file.

Logging has become the industry standard for displaying information that occurs in the applications we create. We can also use logging to 
simplify the debugging process when a problem occurs in the application we are making.

java itself has a special package for logging, but programmers rarely use it due to its inflexibility. so it is rarely used in the 
industrial world, as an alternative, a library that can be used for logging outside of java logging is used, such as:

- Apache common log
- Apache Log4J
- Logback
etc.

**Slf4j**

Slf4j is a logging framework that is used like an API, which can determine the implementation of the logging framework.

Slf4j will not run unless the logging library implementation is added, to be able to alternate logging framework implementations using log4j,
logback, or something else.

Slf4j is widely used by programmers because it is very flexible to change logging libraries, without having to make changes to the program code.
Only need to select the library to be used, Slf4j will automatically use the implementation of the library.


in the java application, the code will be written from Slf4j, then Slf4j will continue to the implementation of the logger framework that we 
choose.



**1. Logback Logging**
   
Logback is one of the most popular logging libraries in Java, logback is used as the default in the Spring Boot framework. logback is meant 
to be a better version of Log4j. and features on logback are more complete than Log4j, you can see features on logback on the official website.

to use logback need to add the following dependencies to pom.xml to find the latest version can be seen here.

```
<dependency>
    <groupId>ch.qos.logback</groupId>
    <artifactId>logback-classic</artifactId>
    <version>1.2.6</version>
</dependency>
```
but if you use the spring boot framework you don’t need to add dependencies manually, because spring boot provides them.

**1.1. Configuration**

if using logback on the spring boot framework by default we don’t need to do any configuration. but sometimes we need configuration 
to meet the needs of our project, by creating a configuration file. Logback will read the configuration from the logback.xml file 
contained in the default package. so that if we need configuration on logback we need to create a logback.xml file in the default package.


**Level Configuration**

when we have created a configuration file, by default logback will read the level that will be issued according to the 
configuration in the logback.xml file. if the configuration file is still empty then all logs will not come out. 
therefore the first step we need to do is add a logger level, to tell which level we want to output in the log file. 
Now let’s look at an example Logback configuration:

```
<configuration>
   <root level="debug">
       <appender class="ch.qos.logback.core.ConsoleAppender">
           <encoder>
               <pattern>%d{HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern>
           </encoder>
       </appender>
   </root>
</configuration>
```

**Logger package**

Sometimes we need to make logging with different levels for each package, for example for the framework package using the warn level but 
for the application package using the info level. we need to add the prefix package, meaning that all packages in it will follow the logger 
level.

```
<logger name="com.javalogging" level="trace"/>
all packages in the com.java logging level will be traced.
```

**1.2. Appender**

When logging we can specify the destination of the log file to be created or named with the appender. Logback already provides a 
lot of appenders, so we don’t need to create them manually. Now let’s discuss the appender features that come with logbacks:

**Console appender**

Console appender will pass event logs that we send using logger into Console or System.out. ConsoleAppender is perfect when your 
application is wrapped in docker or Kubernetes. Now let’s look at an example console appender configuration:

```
<configuration>
   <root level="debug">
       <appender class="ch.qos.logback.core.ConsoleAppender">
           <encoder>
               <pattern>%d{HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern>
           </encoder>
       </appender>
   </root>
</configuration>
```

** File Appender**

File Appender is an appender that sends event logs into a file. The Appender file is very suitable when our application uses a VM to deploy,
it will automatically generate a file in the VM that contains event log information. Now let’s take a look at the File appender configuration
example:

```
<appender name="FILE" class="ch.qos.logback.core.FileAppender">
   <file>application.log</file>
   <encoder>
       <pattern>%d{HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern>
   </encoder>
</appender>
<root level="warn">
   <appender-ref ref="FILE"/>
</root>
```
our example name appender is FILE and uses the FileAppender class. specify the sample file name application.log so automatically all event log results will be stored in the application.log file

**Rolling File Appender**

If we store all event logs in one file, the longer the file will be the bigger. Logback provides a RollingFileAppender, which is an appender that stores data in a file, but we can do rolling, meaning that a new file can be created at any time. In addition, we can also set the maximum file size, if it reaches the maximum limit, a new file will be created. this is more recommended than using a file appender.

```
<appender name="FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
   <file>appplication.log</file>
   <rollingPolicy class="ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy">
       <!-- rollover daily -->
       <fileNamePattern>application-%d{yyyy-MM-dd}.%i.log</fileNamePattern>
       <!-- each file should be at most 100MB, keep 60 days worth of history, but at most 20GB -->
       <maxFileSize>100MB</maxFileSize>
       <maxHistory>60</maxHistory>
       <totalSizeCap>20GB</totalSizeCap>
   </rollingPolicy>
   <encoder>
       <pattern>%d{HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern>
   </encoder>
</appender>
<root level="warn">TimeBasedRollingPolicy
   <appender-ref ref="FILE"/>
</root>
```

The class used is RollingFileAppender. rollingPolicy uses SizeAndTimeBasedRollingPolicy so we can use size as well as time. 
fileNamePattern for setting file name pattern, every day logback will create a new file with pattern application-
`%d{yyyy-MM-dd}.%i.log, %i` function as increment. maxFileSize for setting the maximum size of the file, if it exceeds the maximum 
size then the logback will create a new file. maxHistory to specify the number of days. totalSizeCap for setting the total maximum 
size of the event log file.

**1.3. Layout**

Is the component of the logback that is used to perform the transformation from logEvent to String. by default the layout on logback 
uses patternLayount. PatternLayout is a layout that has many patterns that we can use to display a String representation of the event log
