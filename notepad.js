let btn=document.getElementById("btn1");
btn.addEventListener("click", showElement)

var id=1;
var btnn=1;

function showElement()
{
  let x = document.getElementById("form").value

  
  let y = document.createElement("p");
  y.setAttribute("id","para"+id)
  let z= document.createElement("button");
  let btn_id="button-"+btnn;
  z.setAttribute("id",btn_id)
  z.setAttribute("onclick",`remove()`)
  z.innerHTML="x";
  y.innerHTML = x;

// Append to another element:
document.getElementById("contentA").appendChild(y);
y.appendChild(z);
console.log(id);
id++;
btnn++;

}

function remove()
{
  console.log("insode the remove function")
  console.log(event.target.parentElement.id);
  console.log(event.target.id);
  
let para=document.getElementById(event.target.parentElement.id);
para.style.display="none";
}













