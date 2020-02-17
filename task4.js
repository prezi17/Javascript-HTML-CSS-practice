/* Task4.js - Add your Java Script Code Here */
function func01()
{
  var p= document.getElementById("mydata")
  var value1=  Math.floor((Math.random() * 6) + 1);

  var value2= Math.floor((Math.random()*6)+1);
  p.innerHTML= "Dice rolls are : "+ value1 + ","+ value2;

    if (value1==value2) {
      alert("DOUBLES..!!")

    }

}
