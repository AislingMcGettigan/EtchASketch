
// make 16x16 grid
function makeBlocks() {
  for (var i = 0; i < 16; i++) {
      var row = document.createElement('div');
      row.className = "row";
      for (var j = 0; j < 16; j++) {
          var box = document.createElement('div');
          box.className = "box";
          row.appendChild(box);
      }                
      document.getElementById('boxParent').appendChild(row);
  }
}

//when window loads, generate grid
window.addEventListener("load", makeBlocks());

//on mouse enter, change color of squares
var gridCells = document.querySelectorAll('.box'); 
gridCells.forEach(cell => cell.addEventListener('mouseenter', changeColor)); 

//get value of color picker input
function GetColorPickerValue(){
  var val = document.getElementById('bgcolor').value;
  return val;
}

//change box to color of value of color picker
function changeColor() {
  var color = GetColorPickerValue();
  if(color != null || color != undefined){
  this.style.backgroundColor = color; 
  }
}

//Add button for clearing grid
var btn = document.createElement("button");   
var btnDiv = document.getElementById("btnDiv");  
btn.textContent = "Clear grid";          
btn.id= "btn";          
btnDiv.appendChild(btn); 


// clear grid 
function clear() {    	 
  gridCells.forEach(cell => cell.style.backgroundColor = 'white'); 
}

//on click, clear grid
btn.addEventListener('click', clear); 





