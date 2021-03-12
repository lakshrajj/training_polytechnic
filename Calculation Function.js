function calculate(num1,func,num2){

switch (func) {
               case '+': document.write(num1+num2);
               break;
            
               case '-': document.write(num1-num2);
               break;
            
               case '*': document.write(num1*num2);
               break;
            
               case '/': document.write(num1/num2);
               break;
               default:  document.write("Unknown Error <br />")
            }

}
var a = prompt("Enter Number ","0");
var x =prompt("Enter Funtion to Perform ","0");
var b = prompt("Enter 2nd Number ","0");

calculate(a,x,b);
