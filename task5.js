/* Task5.js - Add your Java Script Code Here */
function date() {
  var d= ["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"];
  var m= ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct", "Nov","Dec"];

var date= new Date();
   var todaydate=date.getDate();
   var day= date.getDay();
   var month= date.getMonth();
   var year= date.getFullYear();

       var dayname= d[day];
      var monthname= m[month];


  var p= document.getElementById("mydata");
  p.innerHTML= ("Today is "+todaydate+"\t"+"("+dayname+")" +"\t"+monthname+"\t"+year);
// remove // below to understand how these work
//  p.innerHTML= ("Today is "+todaydate+"\t"+ day+ "\t"+month +"\t"+"\t"+year);

}
