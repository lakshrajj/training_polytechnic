var a=0                             //  Sum of All Natural Number
for (i=1;i<1000;i++){               //  which are multiple of 3 or 5
     if(i%3===0 || i%5===0){        //   below 1000  
        a=a+i;
       }
    }
console.log(a)
