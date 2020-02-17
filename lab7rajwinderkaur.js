
//problem 1: determine if it`s a prime number
function p01() {
    var num = parseInt(prompt("Please enter a number: ", ""));
    prime = true;
    d = 2;
    while(prime == true && d <= num/2){
      if(num%d == 0){
        prime = false;
      }
      d = d + 1;
    }

    if(prime == true){
      alert(num + " is Prime.");
    }else{
      alert(num + " is not Prime.");
    }
}

//problem 2:  to check if the sum of first 4 numbers is equal to last 4 numbers
function p02() {

var sum1=0;
var sum2=0;


for(i=1;i<=4;i++)
{
  var num = parseInt(prompt("Please enter a number: ", ""));
  sum1=sum1+num;
}
for (i=1;i<=4;i++)
{
  var num = parseInt(prompt("Please enter a number: ", ""));
  sum2=sum2+num;
}
if (sum1==sum2) {
  alert("yes");
}
else {
alert("no");
}
}

//  problem 3 : receives natural numbers until a 0 is entered or number of posive values is more than twice negative ones

function p03() {
  var p=0;
  var n=0;
do {
  var num=parseInt(prompt("please enter a number:",""));
   if (num>0) {
     p= p+1;
        }
    else if (n<0) {
        n=n+1;
           }
         } while ((n!=0)&&(p<=(2*n)));
  }

// problem 4 if number of negative values in the first half is equal to the number of positive values in the second half.

function p04()
{
  var cnt1=0;
  var cnt2=0;
  for (var i = 1; i <= 4; i++) {
    var num=parseInt(prompt("please enter a number:",""));
if(num<0) {
  cnt1++;
}
  }
  for (var i = 1; i <= 4; i++) {
    var num=parseInt(prompt("please enter a number:",""));
    if(num>0) {
      cnt2++;
    }
      }

if (cnt1=cnt2) {
  alert("yes");
  }
  else {
    alert("no");
  }
}

// problem 5 devise a program to receive a positive number, and print all prime numbers less than or equal to that number
function p05() {
    var num = parseInt(prompt("Please enter a number: ", ""));
    for (var i = 2; i <num; i++) {
        if(prime(i)==true)
        {
        alert(i);
        }
    }
}


function prime(num){
    flag = true;
    d = 2;
    while(flag == true && d <= num/2){
      if(num%d == 0){
        flag = false;
      }
      d = d + 1;
    }
    return flag;
}
