// in Ex2 to Ex5, change the name of the following function properly
function mapping() {

  var g=parseInt(document.getElementById("num1").value);



  if(g>=90 && g<=100){
    r = "A+";
    }
else if(80<=g && g<=89) {
    r = "A";
}
else if(75<=g && g<=79) {
r = "B+";
}
else if(70<=g && g<=74) {
r = "B";
} if(65<=g && g<=69) {
r = "C+";
}
else if(60<=g && g<=64) {
r = "C";
}
else if(55<=g && g<=59) {
r = "D+";
}
else if(50<=g && g<=54) {
r = "D";
}
else if(g==49 | g==48) {
r = "E";
}
else if(g<=47 && g>=0) {
r = "F";
}

/*
  switch (true){
	case (a>89):
		answer="A+";
		break;
	case (a>79):
		answer="A";
		break;
    case (a>79):
  		answer="A";
  		break;
      case (a>79):
    		answer="A";
    		break;
        case (a>79):
      		answer="A";
      		break;
		// in Ex5, you need to add more cases for other letter grades
	default:
		answer="F";
  }

  /* in Ex2 to Ex5, you need to renmae "sum" to make it more readable
     for those problem, you may also need to rename s to a better
	 varibale that you have in your formulas above */
   document.getElementById("output").innerHTML="grade: "+r;

}
