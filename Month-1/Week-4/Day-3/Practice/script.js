console.log("Hello Welcome");

// DOM Manipulation

//getElementById
//getElementByC;assName
//getElementByTagName

const p = document.getElementById("paragraph");
console.log(p);

const bold_tags = document.getElementsByClassName("bold-content");
console.log(bold_tags[1]);

const h1_tags = document.getElementsByTagName("h1");
console.log(h1_tags);

//querySelector()
//qyerySelectorAll()

const paragraph = document.querySelector("#paragraph");
console.log("paragraph");

const bolds = document.querySelector(".bold-content");
console.log("bolds");

