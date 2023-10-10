//your JS code here. If required.

let form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  form.style.display = "none";
  table();
});

 let ptag = document.createElement("p")
 document.body.insertBefore(ptag,form)

let input1 = document.getElementById("player1")
let input2 = document.getElementById("player2")

// let player1 = input1.value;
// let player2 = input2.value;

function table() {
  const table = document.createElement("table");
  table.style.border = "1px solid black";
  table.style.backgroundColor = "pink";
table.style.width = "300px"; // Set the width to 300 pixels
  table.style.height = "200px";
  // Create a 3x3 table by using nested loops
  for (let i = 0; i < 3; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 3; j++) {
      const td = document.createElement("td");
      td.style.width = "50px"; 
      td.style.height = "50px"; 
		td.style.border = "1px solid black"
      td.addEventListener("click",()=>{
	   	  Xand0(td);
    });
      row.appendChild(td);
    }
    table.appendChild(row);
  }

  document.body.appendChild(table);
}
let up = null;
function Xand0(td){
if(up){
	td.innerText = "0"
	up = false;
	ptag.innerText = `${input1.value}`;
}	
	else{
		td.innerText = "X";
		up = true;
		ptag.innerText = `${input2.value}`;
	
	   }
}





