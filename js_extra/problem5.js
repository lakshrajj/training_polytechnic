//smallest positive number that is evenly divisible by all of the numbers from 1 to 20
function lar(i,num){

	if(i%num===0){
	if (num<21){
		
		lar(i,num+1)
	} else {   console.log(i);   }

	}
}

for (i=2;i<300000000;i++){
lar(i,2)
}
		
