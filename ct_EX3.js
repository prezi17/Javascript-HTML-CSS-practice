// in Ex2 to Ex5, change the name of the following function properly
function equation() {
  var a=parseInt(document.getElementById("num1").value);
  var b=parseInt(document.getElementById("num2").value);
  var c=parseInt(document.getElementById("num3").value);
    var v=(-b+(Math.sqrt(Math.pow(b,2)-(4*a*c))))/(2*a);
    var u=(-b-(Math.sqrt(Math.pow(b,2)-(4*a*c))))/(2*a);

  var v=parseFloat(v).toFixed(2);
  var u=parseFloat(u).toFixed(2);

  document.getElementById("output").innerHTML="root one"+v+ "<br>" +"another "+u;

}
