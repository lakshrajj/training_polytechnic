//starting number, under one million, produces the longest chain

//This Code is 100% written by me without seeing Solution/hints/answers etc..


k=0;  //Taking K as Temparary Number to take highest Values
for (num=837700;num<=837900;num++){
	j=1;p=0; //Taking P as Temparary Number to take highest Values & j for increment
	i=num   //not using num directly in loop because value gonna change multiple time of num so it can make errors or make our 1st loop not useful
	for (x=num;x<=num+10000;x++){
		
	if(i%2===0){   //Condition for Even Numbers
	  				i=i/2    //Calculation for Even Numbers
	 				j++;
	}	else if(i===1)	{   //breaking loop if i=1 so that it dont run in odd condition
			break;
	}	else	{
	  				i=3*i + 1 //calculation if i is an odd number
	 				j++;
		  					}
		  if(p<j){
		  			p=j   //getting larest values
		 				 }
		} if(k<p){
 					 k=p  //getting larest Values
  	}      
}
console.log("---> "+num+" have "+k+" Elements long Chain")

//Executing in less than 0.1 Sec in Sublime in Javascript
