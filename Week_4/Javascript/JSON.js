let json_ob='{"name":"UshaSri","age":21,"country":"India"}';

let ob=JSON.parse(json_ob);


console.log(ob.name);
console.log(ob.age);
console.log(ob.country);

let js_ob={"name":"Abhishek","age":21};

let json_st=JSON.stringify(js_ob);
console.log(typeof json_st);