function periOfRectangle1(len,wid){
    p = 2*(len+wid);
    return p;
}


function periOfRectangle2(len,wid){
    p = ((2*len)+(2*wid));
    return p;
}

var a = prompt("Length of Rectangle ","0");
var b = prompt("Width of Rectangle ","0");


document.write("Perimeter Of Rectangle : ");
document.write(periOfRectangle1(a,b));
document.write("\n \n");
document.write(periOfRectangle2(a,b));
