// 600851475143 largest prmie factor
function prime(num){
	for (i=2;i<num/2;i++){
		if(num%i===0){
			return undefined;
		}
	}
	return num;
}

a=6008
c=0
for (x=2;x<=a-1;x++){
    if(a%x===0){
      if(prime(x)){
      	c=x
      }
    } 
  }

console.log(c)

// not confirmedd
