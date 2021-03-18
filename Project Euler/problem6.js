//difference between the sum of the squares of the first one hundred natural numbers and the square of the sum
a=0,p=0
for(i=1;i<101;i++){
	a=a+(i*i)
   p=p+i
}
console.log((p*p)-a)
