/*console.log(Intern_name)

var Intern_name='Aravind'

console.log(Intern_name)*/

/*
console.log(Intern_name)

let Intern_name='Aravind'

console.log(Intern_name)
*/
/*
const Intern_name='Aravind';
console.log(Intern_name);
Intern_name='Pavan'
console.log(Intern_name)
*/
/*
let Location='Chennai'
console.log(Location)
Location[0]='V'
console.log(Location)
*/
/*
let x;
console.log(x);*/

/* OBJECTS
const job_seeker={
    name:'Niharika',
    age:21,
    email:"Niharika@gmail.com",
};
console.log(job_seeker)
console.log(job_seeker.name)
*/
/*Array
const applicantNames=['Tharun','Nithish','Neha'];
console.log(applicantNames)
console.log(applicantNames[2])
*/
/*
let Intern_name='Venu Babu';
console.log(Intern_name.slice(0,4));
*/

/*
const str_ip='42';
const num=Number(str_ip);
console.log(num+20);
console.log(str_ip+20);
*/
// Type Coersion- Automatic conversion of one data type to another during some operations. 
// 1. Explicit 2. Implicit
/*
let x="100";
let y=Number(x);
console.log(typeof y);
*/
/*
let x=100;
let y='50';
let res=x+y;
console.log(res);

*/
/*
let num=NaN;
if(num)
{
    console.log('Number is truthy')
}
else
{
    console.log('Number is falsy');
}*/

// Array

// Todeclare
/*
const month=[]; // emptyarray   [array literal]
const month1=new Array();
console.log(typeof month);
console.log(Array.isArray(month1));
/*

const days=['sun','mon','tues','wed'];

console.log(days[2]);

// Arrays.at

/*
console.log(days.at(2));
console.log(days.length); // length property to find the length of the array
days.length=6;
console.log(days.flat(6));
console.log(days[5]);
*/

//- -------------------------------------------------------------------------
// array methods
// sort
/*
const days=['sun','mon','tues','wed',10,20];

days.sort();
console.log(days);

days.reverse();
console.log(days)

days.shift();
console.log(days);
days.unshift('WED');
console.log(days);


days.splice(0,2); // remove 1 ele from 0 index
console.log(days);

console.log(days.slice(2));
console.log(days.slice(1,3));
console.log(days);

*/

// Join method
/*
const days=['sun','mon','tues','wed',10,20];
console.log(days.join());
console.log(days.join(":"));
console.log(days.join('-'));
*/
// Concat 
/*
const days1=['sun','mon','tues','wed']
const days2=['Thu','Fri','Sat']

//const days=days1.concat(days2);
// Spread operator is used to concat array elements
const days=[...days1,...days2];
console.log(days);
*/
/*
const nestarr=[1,2,3,[4,5,[1,2,3]]];

const newarray=nestarr.flat(2);

console.log(newarray);
*/

// Map()
/*
const ar=[10,20,30,40,50];
const new_ar=ar.map(i=>i+i)
console.log(new_ar);
*/
// Array.reduce()
/*
const ar=[10,20,30,40,50];
const output=ar.reduce((i,j)=>{return i*j});
// Array.filter()
console.log(ar.filter(i=>i>=35));
// Array.find()
console.log(ar.find(i=> i>=20));
// Array.findIndex()
console.log(ar.findIndex(i=> i>=20));
console.log(output);
// Array.fill() - fill array ele with a static values.

*/
// Iterate array

// 1. forEach()  2. For in loop   3. For of loop

// forEach()

/*
const days=['sun','mon','tues','wed','Thu','Fri','Sat'];
days.forEach(i=>console.log(i));
days.forEach((i,j)=>console.log(i,j));

// for in loop
for(let i in days)
{
    console.log(i);
    console.log(days[i]);
}

// for for loop
for(let i of days)
{
    console.log(i);

}
*/

// Functions in JS
/*
console.log(productNum(3,5,6));

function productNum(num1,num2,num3)
{
    let prod=num1*num2*num3;
    return prod;
}



let sum_res=function(num1,num2,num3)
{
    return num1+num2+num3;
}
console.log(sum_res(2,3,4));
*/

/*
//Pass by value
function square_val(num)
{
    num=num*num;
    return num;
}
let num=10;
let squarenum=square_val(num);

console.log(num);
console.log(squarenum);

// pass by reference

let Rev_Intern={name:'Aruna',age:22};
function updatePerson(obj)
{
    obj.age=21;

}
updatePerson(Rev_Intern);
console.log(Rev_Intern.age);

// pass array

let nums=[10,20,30];
function addNum(arr)
{
    nums.push(100);
    nums.shift();
}

addNum(nums);
console.log(nums);
// how to make copies of arrays

let copy_arr=[...nums];
console.log(copy_arr);



*/

// this keyword - Implicit binding
/*
const person={
    name:'Suhel',
    welcome:function()
    {
        console.log(`hello,I am ${this.name}`);

    }
}
person.welcome();

// this keyword - Explicit binding

function welcome()
{
    console.log(`hello,I am ${this.name}`);
}
const I1={name:'Sowmya'};
const I2={name:'Jayalakshmi'};

welcome.call(I1);
welcome.apply(I2);


// this keyword - Arrow function

const person1={
    name:'Nithish',
    welcome:function()
    {
       const msg =() =>  console.log(`hello,I am ${this.name}`);
       msg();

    }
}
person1.welcome();

*/
// Closure - a Nested function can access local variables of parent functions
/*
let z=300;                      // global
function out_fun()
{
    let x=100;                  // block
    function in_fun()
    {
        let y=200;              // local
        return x+y+z;
    }
    return in_fun;
}


console.log(out_fun()())

*/

// Strict mode
/*
"use strict";

x=5;
console.log(x);
*/
/*
x=5;
console.log(x);
function sayHi()
{
    'use strict';
    st='Hi team';
    console.log(st);
}
sayHi();
*/
/*
//"use strict"
let intern={name:'Sonu',age:21};
delete intern;
*/

// creating an object using constructor function
/*
function Rev_Intern(name,age)
{
    this.name=name;
    this.age=age;

    this.sayHi=function()
    {
        console.log("Hello, my name is " +this.name);
    }
}
let Rev_Intern1=new Rev_Intern("Pradeesh",22);
Rev_Intern1.sayHi();
*/
// Object prototype
/*
function Rev_Intern(name,age)
{
    this.name=name;
    this.age=age;

    this.sayHi=function()
    {
        console.log("Hello, my name is " +this.name);
    }
}

function Vehicle()
{
    this.category='Vehicle';
}
function Car(name)
{
    Vehicle.call(this);
    this.name=name;
}
Car.prototype=Object.create(Vehicle.prototype);
Car.prototype.constructor=Car;

Car.prototype.move=function()
{
        console.log("Moving!!!!");
};

var newcar=new Car('BMW');
console.log(newcar.name);
console.log(newcar.category);
newcar.move();
*/

/*
const Car=class{
    constructor(x,y)
    {
        this.name=x;
        this.model=y;
    }
};

const car1=new Car('Swift','BXI');
console.log(car1.name);


*/
/*

function sample()
{
    //console.log(x)
    res=x;
    let x=10;
}

sample();
*/


// Encapsulation
/*
class Person {
    constructor(name, age) {
      let _name = name;
      let _age = age;
  
      this.getName = function() {
        return _name;
      }
  
      this.getAge = function() {
        return _age;
      }
  
      this.setName = function(name) {
        _name = name;
      }
  
      this.setAge = function(age) {
        _age = age;
      }
    }
  }
  
  let john = new Person("John", 30);
  console.log(john.getName()); // Output: John
  console.log(john.getAge()); // Output: 30
  john.setName("James");
  john.setAge(35);
  console.log(john.getName()); // Output: James
  console.log(john.getAge()); // Output: 35
  console.log(john._age);
  console.log(john._name);
  */

// Abstraction in JS

/*
class ImplementAbstraction {
    // method to set values of internal members
    set(x, y) {
      this.a = x;
      this.b = y;
    }
  
    display() {
      console.log(`a = ${this.a}`);
      console.log(`b = ${this.b}`);
    }
  }
  
  const obj = new ImplementAbstraction();
  obj.set(10, 20);
  obj.display();
  // a = 10
  // b = 20
  




*/

// Rest parameter
/*
function product(...nums)
{
    let res=1;
    for(let n of nums)
    {
        res*=n;
    }
    return res;
}
console.log(product(1,2,3,4,5));
console.log(product(1,2));

// Default parameters
function welcome(name='Guest')
{
    console.log(`Hello,${name}!`);
}
welcome('Suhel');
welcome(undefined);
welcome();
welcome('');

*/
const rl=require('readline');
const readl=rl.createInterface({
    input:process.stdin,output:process.stdout
});

readl.question('How are you Pavan? ',(status)=>{
    console.log(`I am ,${status}!`);
    readl.close();
})