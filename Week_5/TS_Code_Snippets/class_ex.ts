class Person {
    ssn:string;
    firstName:string;
    lastName:string;

    constructor(ssn:string, firstName:string, lastName:string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName():string{
        return `${this.firstName} ${this.lastName}`;
    }
}
class Employee extends Person {
    constructor(
        ssn:string,
        firstName: string,
        lastName: string,
        private jobTitle: string) {
        
        // call the constructor of the Person class:
        super(ssn,firstName, lastName);
    }
}

let p=new Person('190-45-8976','Abhinav','Mithra')
console.log(p.ssn);