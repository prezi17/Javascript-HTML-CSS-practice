// in Ex9 to Ex15, change the name of the following function properly
function problem_12() {
  var outputObj=document.getElementById("output");

  var a = parseInt(prompt("Please enter a number: ", ""));
  var temp=a;
var reverse=0;
while (temp!=0)
{
reverse=reverse*10+temp%10;
temp=parseInt(temp/10);
}

if (reverse==a) {

outputObj.innerHTML= "number:  "+a+"<br> <br> equal to its reverse? "+ "yes";
}
else {
  outputObj.innerHTML= "number:  "+a+"<br> <br> equal to its reverse? "+ "no";
}
  outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}
