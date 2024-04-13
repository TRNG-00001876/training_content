**What is Maven?**

Maven is an open-source build tool that Software Developers use to build, publish, and deploy several projects at once. It’s written in Java and is mainly used for Java-based projects, but you can also use it to build and manage projects in other languages like C#, Ruby, and Scala.

To better understand Maven and what it does, it’s important to understand two key terms: build tools and JAR files.

**What is a build tool?**

A build tool compiles code and packages it into a form that can be executed. Dev teams rely on building tools to automate the process of turning source code into an actual application. A build tool typically does the following things:

- Create source code
- Create documentation from the source code
- Compile source code and bundle it into a package file format such as JAR

**What is a JAR file?**

A Java Archive (JAR) file is a package file that aggregates many files into a single one. JAR files are based on the ZIP file format and contain Java class files (a type of code file) and resources like text, images, and associated metadata.

Java developers use JAR files for packaging everything needed to run a Java library or software package. In fact, many JAR files work like fully executable files — all you need to do is double-click to run it.

A software project can involve many JAR files, and Maven helps developers track, manage, and download libraries and source code packages that the project needs to run. When the software is ready to deploy, Maven packages everything into its own self-contained JAR file.

**What does Maven do?**

Maven helps developers manage multiple projects at once by simplifying and automating the project lifecycle. The default Maven lifecycle phases are:

- Validate that the project information is correct and available.
- Compile source code.
- Test using an appropriate testing framework.
- Package code into a JAR file.
- Verify that quality assurance criteria are met.
- Install packages into a local repository that other projects can use.
- Deploy copies into a remote repository for access by other developers and projects.

**How does Maven work?**

Maven works through three fundamental functions or concepts:

- Maven manages dependencies by downloading libraries and JAR files required by the project and their dependencies.
- Maven helps developers manage projects with a Project Object Model (POM).
- Maven adopts a convention over configuration approach.

**What is a Maven dependency?**

One of the major features of Maven is dependency management. A Maven dependency is another source of code — a library, a framework, or a package file — that the project needs to run correctly.

A small project may only require a few libraries that the dev team can easily manage. But larger projects may rely on hundreds of libraries and package files, including libraries that depend on other libraries or JAR files to function. All of these dependencies might be stored in dozens of different locations.

Maven tracks everything and simplifies building a project by automatically downloading the dependencies a project needs to work independently.

**What is a Maven Project Object Model?**

The Project Object Model (POM) plays a central role in Maven. A POM is an XML file containing a blueprint or map of the project, including source code files, dependencies, plugins, configuration settings, and general information such as project version, project description, developers, and mailing lists.

When you run a task or goal, Maven looks for the POM, reads it, gets the needed configuration information, and performs the task.

**What is convention over configuration?**

Convention over configuration is a software framework design model in which the framework provides all the default values needed to run an application. This means that developers using the framework don’t need to make as many decisions about configuration (though they can always choose to override default values and manually configure the framework).

Maven’s convention over configuration approach means you don’t need to define every task like compiling, testing, and packaging a file. Instead, Maven handles them automatically using built-in defaults. All you need to do is add the file paths to the POM, and Maven takes care of the rest.

**What are the pros and cons of Maven?**

Like any other development tool, Maven has its pros and cons.

`*Pros of Maven*`
- Maven makes the project build process easier. While it doesn’t remove the need to understand the underlying mechanisms of a project, it takes care of a lot of the details.
- Maven promotes a standard build system. The Maven POM provides a uniform build template. Once you understand how one Maven project works, you’ll understand how to build any future Maven project.
- Maven can quickly provide useful project information. It takes information from the POM or from project sources to provide quality information including changelogs, mailing lists, dependency lists, and test reports.

`*Cons of Maven*`
- Maven comes with a learning curve. Newbies will need some initial training to understand how it works — and some devs feel that its support and documentation are limited when they run into issues.
- Maven’s dependency management system isn’t perfect. For example, if the Maven code for a dependency isn’t available, it’s impossible to add in the dependency within Maven itself.
- Maven can be slow, especially with large projects. As project size and complexity increase, so does build time.

**When should you use Maven?**

Given its pros and cons, we recommend using Maven in the following situations:

- When your project involves a lot of dependencies, including libraries, frameworks, and JAR files.
- When your project doesn’t involve a lot of special configurations, allowing you to make the most of Maven’s convention over configuration approach.
- When you know that your team or company can commit to using Maven on future projects, making it worthwhile to invest the time needed to learn it.

**Understanding Maven — Maven Life Cycle**

If you open the side menu button named Maven, you can see the phases in Maven Life Cycle. There are nine important phases in the Maven Life Cycle.

- clean — clear the target directory into which Maven normally builds your project
- validate — validate the project is correct
- compile — compile the source code of the project
- test — test the compiled source code using a unit testing framework
- package — package the compiled code
- verify — run any checks to verify the package is valid
- install — install the package into the local repository
- deploy — copies the final package to a remote repository

**Understanding Maven — Maven Repositories**

When it comes to Maven there are two repositories,
- The Maven Central Repository, and
- the local .m2 repository.

Looking at the Maven Central Repository, you can visit the site by using search.maven.org It is the one having all the dependencies that you have mentioned in the pom.xml file.


And the .m2 repository is the local repository that is in your local machine. So, when you run mvn clean install command which we run earlier, the local machine connects to the Maven Central and downloads all the dependencies you mentioned in the pom.xml to your local .m2 repository. And after that, those dependencies are added to the External Libraries folder in your project, and hence solving the problem of dependency management.


