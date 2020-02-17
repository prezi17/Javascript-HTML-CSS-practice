/* Task3.js - Add your Java Script Code Here */
function func(num) {
  var p =document.getElementById("mydata")
  var sum=0;
  for(i=0; i<=num; i++) {
    sum=sum+i;
  }
  p.innerHTML= "Result ="+ sum;
}
