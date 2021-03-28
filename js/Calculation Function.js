function calculate(num1,func,num2){
  var ans;

switch (func) {
               case '+': ans=(Number(num1)+Number(num2));
               break;
            
               case '-':ans=(num1-num2);
               break;
            
               case '*': ans=(num1*num2);
               break;
            
               case '/': ans=(num1/num2);
               break;
               default: ans=("Wrong Input Error <br />")
            }
return ans;
}

var a = prompt("Enter Number ","0");
var x =prompt("Enter Funtion to Perform ","0");
var b = prompt("Enter 2nd Number ","0");

 document.write(calculate(a,x,b));

//Lakshrajj
