window.onload=function kit() {
var buttoncap= ["sum","condition", "arraysum", "palindrome","if else", "create triangle"]
for(i=0,i<=6;i++) {
var newButton=document.createElement("button");
document.getElementsByTagName("nav").append("button");
document.getElementsByTagName('button').innerHTML(buttoncap[i]);

(newButton).attr("id", "button" + (i+1));  // Assings Id to button corresposnding to its order
$(newButton).html(buttonCaption[i]);  // Gets the name of the button and assing it
$(newButton).attr("onClick", "execute("+i+");") // add onClick event to each button
$(newButton).attr("class", "button"); // add class to button


}
}
