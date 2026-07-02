console.log("Hello today we are going to cover the js");

//Fetch Method

//promises
    //Pending promises
    //Resolve promises
    //Reject promises

let promise = new Promise((resolve, reject) => {
   // resolve("resolve");
        reject("reject");
});
console.log(promise);

promise.then((res) => {
    console.log("resolve promise execute");
}).catch(() => {
    console.log("promise reject");
});

 async function getData(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();

        console.log(data);
    }catch(error){

    }
}
getData();

// CRUD
    //Create
    //Read
    //Update
    //Delete

 async function createData(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            body:JSON.stringify({
                name:"Amit",
                age:21
            })
        });
        const data = await response.json();

        console.log(data);
    }catch(error){

    }
}

createData();

 async function getDataById(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();

        console.log(data);
    }catch(error){

    }
}

getDataById();






//String interpolation
console.log("hii" + 2);

let str = `this is the Qlith ${2026}`;
console.log(str);

//MATH Object
console.log(Math.PI);
console.log(Math.LN10);

console.log(Math.sqrt(99));
console.log(Math.min(1, 2, 3));
console.log(Math.random(9));
console.log(Math.floor(9.9));
console.log(Math.ceil(9.9));