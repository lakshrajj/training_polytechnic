   //  Sum of All Natural Number  which are multiple of 3 or 5  below 1000  
var a=0
for (i=1;i<1000;i++){
     if(i%3===0 || i%5===0){
        a=a+i;
       }
    }
console.log(a)
