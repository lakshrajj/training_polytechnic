// 10 001st prime number
function prime(num){
	for (i=2;i<num/2+1;i++){
		if(num%i===0){
			return undefined;
		}
	}
	return num;
}
c=-1
a=10001
for (x=2;x>1;x++){
      if(prime(x)){
      	c++
      	if(c==a){
      		break;
      	}
      	
    } 
  }
 console.log("10001-th Prime No : "+x)
 //Working Fine
 // Executing in 1 less than 1 Sec in Sumblime in JS
