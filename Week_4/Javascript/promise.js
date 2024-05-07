/*const tatkalBook = new Promise((resolve,reject) => {
	let bookingSuccess= true
	if(bookingSuccess)
		resolve(850)
	else
		reject()
})

tatkalBook.then((amt)=>console.log(`Thanks Pavan !I will transfer ${amt}`))
.catch(()=> console.log("Thanks for trying!! I will book the bus ticket"))

*/

/*function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { message: "Book the Ticket sucessfully" };
        resolve(data);
         reject(new Error("Not Book the Ticket take the Bus"));
      }, 2000);
    });
  }
   
  fetchData()
    .then(result => console.log(result.message))
    .catch(error => console.error(error.message))
    .finally(()=>console.log("I am here to execute"))
*/
// chain promises


let reachA=new Promise((resolve,reject)=>{
    const reached=true
    if(reached)
        setTimeout(resolve,2000,"Nithish reached")
    else
    reject("Nithish not reached")
})

let reachB=new Promise((resolve,reject)=>{
    const reached=true
    if(reached)
        setTimeout(resolve,4000,"Tharun reached")
    else
    reject("Tharun not reached")
})

let reachC=new Promise((resolve,reject)=>{
    const reached=false
    if(reached)
        setTimeout(resolve,3000,"Aruna reached")
    else
    reject("Aruna not reached")
})
Promise.race([reachA,reachB,reachC])
.then((msg)=> console.log("All of them reached"))
.catch((msg)=>console.log("msg"))




