
function problem_09() {

  var outputObj=document.getElementById("output");

  var a = parseInt(prompt("Please enter a number: ", ""));
outputObj.innerHTML="number: "+a+"<br><br>its digits: ";

  var x=a;
  var digit;
  while (x>0){
      digit=x%10;
      outputObj.innerHTML=output.innerHTML+digit+",";
      x=parseInt(x/10)
  }
  outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}
