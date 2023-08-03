
document.getElementById("ID").style.color="blue";

document.getElementsByClassName("CLASS")[0].style.color="red";

document.getElementsByTagName("h1")[2].style.color="purple";

document.querySelector("button").style.backgroundColor="cyan";
document.querySelector(".btn").style.backgroundColor="brown";
document.querySelector("#btn").style.backgroundColor="orange";

var len=document.querySelectorAll("button").length;

for (let i = 0; i < len; i++) {
    document.querySelectorAll("button")[i].style.color="red";
}
    
