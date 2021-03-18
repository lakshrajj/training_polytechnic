//sum of all the primes below two million.
function prime(num){
	for (i=2;i<num/2+1;i++){
		if(num%i===0){
			return undefined;
		}
	}
	return num;
}
c=0
a=2000000
for (x=2;x<=a;x++){
      if(prime(x)){
      	c=c+x
      	
    } 
  }
  console.log(c-4)
//Running Fine
//Taking About 250 ms in JS compiled using SubLime.
