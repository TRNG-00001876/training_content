function readonlyclass<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        Object.freeze(this);
      }
    };
  }
  
  
  @readonlyclass
  class MyClass {
    public prop1: string;
  
    constructor(prop1: string) {
      this.prop1 = prop1;
    }
  }
  
  const obj = new MyClass("Hi Team");
  console.log(obj.prop1); // Output: "Hi Team"
  obj.prop1="UPdatedone"
  console.log(obj.prop1);


  /*
  function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
  }
  function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }
   
  @reportableClassDecorator
  class BugReport {
    type = "report";
    title: string;
   
    constructor(t: string) {
      this.title = t;
    }
  }
   
  const bug = new BugReport("Needs dark mode");
  console.log(bug.title); // Prints "Needs dark mode"
  console.log(bug.type); // Prints "report"
   
  // Note that the decorator _does not_ change the TypeScript type
  // and so the new property `reportingURL` is not known
  // to the type system:
  //bug.reportingURL;
  */


  // Method_decorator

  function LogParameter(target: any, propertyKey: string | symbol, parameterIndex: number) {
    console.log(`Parameter ${parameterIndex + 1} of method ${String(propertyKey)} is decorated.`);
}

class MyClass1 {
    constructor(@LogParameter message: string|symbol) {
        console.log(`Hello, ${message}!`);
    }
}

const instance = new MyClass1("team");
// Output: Parameter 1 of method greet is decorated.
                         //         Hello, world!

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  


















