function sample<T>(...arg:T[]):T[]{
   return arg; 
}

let op1=sample<string>('hello','how','are','you');

let op2=sample<number>(100);

let op3=sample<boolean>(true);

console.log('op1',op1);
console.log('op2',op2);
console.log('op3',op3);

// as const will create a readonly array with ;iteral values.
//when we want to ensure that the values in the array remain as specific literals

const skills=['Java','C#','C++','Python'] as const;



const rev_intern2={
    name:'Aravindh',
    age:21 as const,
    hobbies:['Reading','Writing'] as const
}
//rev_intern2.age=25; shows an error

//keyOf
interface rev_intern1
{
    name:string;
    age:number;
    address:string;
}
type rev_internKey=keyof rev_intern1;









