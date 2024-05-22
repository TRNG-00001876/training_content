# Introduction to Lombok

Project Lombok is a Java library that automatically plugs into your editor and build tools, spicing up your Java code. It helps to reduce boilerplate code, such as getters, setters, and constructors, through a set of annotations.

*Benefits of Using Lombok*

- Less Boilerplate Code: Automatically generates the most common methods like toString(), equals(), hashCode(), getters, setters, and more.
- Easier to Read Code: With less clutter, the actual intent of the code stands out.
- Reduced Development Time: Less code to write means more focus on business logic.
- Easy to Refactor: Changing a field name doesn’t require changing getter/setter methods.

*Features of Lombok*

Lombok offers numerous annotations. Here’s a look at some of the key features:

**@Data**

- Generates getters for all fields, a useful toString method, and hashCode and equals implementations that check all non-transient fields. Will also generate setters for all non-final fields, as well as a constructor.

```
@Data
public class User {
    private String name;
    private String email;
}
```

- Example of generated code after this annotation, which we don’t need to write anymore with lombok’s @Dataannotation.

```
public class User {
    private String name;
    private String email;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public boolean equals(Object o) {
        // ... implementation
    }

    @Override
    public int hashCode() {
        // ... implementation
    }

    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
```

**@NonNull**

- Generates a null-check for any method or constructor parameter.

```
public void setUsername(@NonNull String username) {
    this.username = username;
}
```

**@Cleanup**

- Ensures the given resource is automatically cleaned up before the code execution path exits your current scope.

```
public void readData(String path) throws IOException {
    @Cleanup InputStream in = new FileInputStream(path);
    // ... work with the stream
}
```

**@SneakyThrows**

- Will sneakily throw checked exceptions without actually declaring this in your method’s throws clause.

```
@SneakyThrows
public void readFile(String path) {
    Files.readAllBytes(Paths.get(path));
}
```

**@Builder**

- Implements the builder pattern for object creation.

```
@Builder
public class User {
    private String name;
    private String email;
}
```

- Example of generated code from this annotation, which we don’t need to write after using lombok’s @Builderannotation.

```
public class User {
    private String name;
    private String email;

    User(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public static UserBuilder builder() {
        return new UserBuilder();
    }

    public static class UserBuilder {
        private String name;
        private String email;

        UserBuilder() {}

        public UserBuilder name(String name) {
            this.name = name;
            return this;
        }

        public UserBuilder email(String email) {
            this.email = email;
            return this;
        }

        public User build() {
            return new User(name, email);
        }
    }
}
```

**@Value**

- Immutable variant of @Data; all fields are made private and final by default, and setters are not generated.

```
@Value
public class User {
    String name;
    String email;
}
```

**@AllArgsConstructor, @NoArgsConstructor, @RequiredArgsConstructor**

- Generates constructors that take no arguments, all arguments, or the required arguments (final fields and fields with constraints like @NonNull).

```
@NoArgsConstructor
@AllArgsConstructor
@RequiredArgsConstructor
public class User {
    @NonNull private String name;
    private final String email;
}
```

**Deep Dive: Constructor Annotations**

- Lombok provides several annotations for generating constructors.

**@NoArgsConstructor**

- Generates a no-argument constructor. This is useful for frameworks that require a no-arg constructor, like JPA.

- Generated code example:

```
public class User {
    private String name;
    private String email;

    public User() {
    }
}
```

**@RequiredArgsConstructor**

- Generates a constructor for all final fields, and fields with constraints such as @NonNull.

- Generated code example:

```
public class User {
    @NonNull private final String name;
    private String email;

    public User(@NonNull String name) {
        if (name == null) throw new NullPointerException("name");
        this.name = name;
    }
}
```

**@AllArgsConstructor**

- Generates a constructor that includes all class attributes.

- Generated code example:

```
public class User {
    private String name;
    private String email;

    public User(String name, String email) {
        this.name = name;
        this.email = email;
    }
}
```
- By using these annotations, you can keep your model classes concise and focus on the fields themselves, rather than the boilerplate code that typically accompanies them.


**Setup in IntelliJ**

- Install the Lombok plugin from the marketplace.
- Enable annotation processing in Settings > Build, Execution, Deployment > Compiler > Annotation Processors.