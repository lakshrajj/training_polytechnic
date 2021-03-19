//one Pythagorean triplet for which a + b + c = 1000.
//Find the product abc.
for (a = 1; a < 350; a++) {
   sum = 0;
  for ( b = a + 1; sum <= 1000; b++) {
     c = Math.sqrt((a * a) + (b * b));
    sum = a + b + c;
    if (sum === 1000) {
    	console.log("Sum of A+b+c=")
    	console.log(a + b + c)
      console.log(a * b * c);
    }
  }
}
//Working Fine Executing in less than 1 sec
