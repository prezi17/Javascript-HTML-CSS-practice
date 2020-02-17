/* Task6.js - Add your Java Script Code Here */
  var i=20;
function countdown() {
  var p=document.getElementById("mydata");
      if(i>0)
        {
        p.innerHTML=i;
          }
      else {
        p.innerHTML="BOOM..!!";
            }

      i=i-1;
}
