// in Ex2 to Ex5, change the name of the following function properly


function area() {
  var a=parseInt(document.getElementById("num1").value);
  var b=parseInt(document.getElementById("num2").value);
  var c=parseInt(document.getElementById("num3").value);
  var s=(a+b+c)/2;
  var p=Math.sqrt(s*(s-a)*(s-b)*(s-c));
  var z=parseFloat(p).toFixed(2);
  document.getElementById("output").innerHTML="area:"+z;

}
