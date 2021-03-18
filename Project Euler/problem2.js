// sum of fibonicci series of less than 4 million in sequence
a=0;b=1;sum=0;
for(i=1;i<=90;i++){               
     c=a+b                      
     a=b                      
     b=c;
  (c%2==0 && c<4000000)?sum=c+sum : undefined;
}
console.log(sum)
