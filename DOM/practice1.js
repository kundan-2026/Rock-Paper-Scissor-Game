let change = document.querySelector("#appends");

change.innerText = change.innerText + " from the anpa college.";

let box1 = document.querySelectorAll(".box");

let count = 0;
for (let box of box1) {
  box.style.height = "150px";
  box.style.width = "150px";
  box.style.marginTop = "30px";
  box.style.border = "3px solid red";
  box.style.fontSize = "25px";
  box.style.color = "purple";
  box.innerText = `Hey, This is my box number ${count + 1}`;
  box.style.backgroundColor = "pink";
  count++;
}
