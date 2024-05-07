/*function eat()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Burger");
        },2000);
    });
}
function foodTour(food)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(food === "Burger")
                {
                    resolve("Enjoying Burger");
                }
            else{
                reject(new Error("Not in the mood for this food...."));
            }
        },2000);
    });
}

async function willEat(){
    try{
        let fastFood = await eat();
        let response=await foodTour(fastFood);
        console.log(response);
    }
    catch(error)
    {
        console.log(error.message);
    }
}
willEat();*/

function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = [
                { id: 1, name: "Aravind", email: "Ab@gmail.com" },
                { id: 2, name: "pavan", email: "pb@gmail.com" }
            ];
            resolve(data);
        }, 1000);
    });
}
function displayUserData(userData) {
    userData.forEach(user => {
        console.log("User ID:"+ user.id);
        console.log("Name:"+ user.name);
        console.log("Email:"+ user.email);
    });
}
async function fetchAndDisplayUserData() {
    try {
        const userData = await fetchUserData();
        displayUserData(userData);
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}
fetchAndDisplayUserData();
 