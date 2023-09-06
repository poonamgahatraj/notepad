let btn=document.getElementById("btn1");
btn.addEventListener("click", showElement)


function showElement()
{
  let x = document.getElementById("form").value
  
  let y = document.createElement("p");
  y.innerHTML = x;

// Append to another element:
document.getElementById("contentA").appendChild(y);

}

