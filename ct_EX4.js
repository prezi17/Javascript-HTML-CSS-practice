// in Ex2 to Ex5, change the name of the following function properly
function equation() {

  var a=parseInt(document.getElementById("num1").value);
  var b=parseInt(document.getElementById("num2").value);
  var c=parseInt(document.getElementById("num3").value);

  var d=((b*b)-4*a*c);
  if(d>0){
    r = "it have 2 distinct roots";
    }
else if(d==0) {
    r = "roots are identical";
}
else if(d<0) {
r = "it have no roots in real number";
}
   document.getElementById("output").innerHTML=r;

}
