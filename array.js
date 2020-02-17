var sum=0;

var s=0;
function arraysum() {
var num =[];
for(i=0; i<=5; i++){
num.push(i);
sum=sum+num[i];
}
document.getElementById("output").innerHTML= ("total sum is : "+sum);
}

/////
function arrayodd() {
  var su=0;
  var m=0;
var nu =[];
for(j=0; j<=100; j++){
nu.push(j);
if(nu[i]%2==0) {
  su=su+nu[j];
} else{
m=m+nu[j];
}
}
document.getElementById("arraysum").innerHTML= ("even sum is : "+su + "odd sum is: "+m);
}

///
function evenodd() {
var z=0;
while (z<10){
s=s+z;
z=z+3;
}
document.getElementById("output1").innerHTML= ("even sum is : "+s );
}
