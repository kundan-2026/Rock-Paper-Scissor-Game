// console.log("hello world");

// let div = document.querySelector("div");
// console.log(div);

// get attribute
// let getAtt = document.querySelector("div");
// console.log(getAtt.getAttribute);

// set attribute
let para = document.querySelector(".para");
console.log(para.setAttribute("class", "newPara"));

// create a new button and also add the some property of the css...
let btn = document.createElement("button");
btn.innerText = "click me";

let div = document.querySelector("div");
div.after(btn);

btn.style.background = "grey";
btn.style.color = "white";
btn.style.fontSize = "18px";
btn.style.padding = "5px";
btn.style.borderRadius = "3px";
