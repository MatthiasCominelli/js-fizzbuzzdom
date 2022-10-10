
//creiamo un loop che considera tutti i numerdi da 1 a 100

for (let i = 1; i <= 100; i++) {
    // console.log(i);
//aggiungiamo i 3 if/else nel caso siano multiplo di 3, 5 o entrambi

if ((i % 3 == 0) && (i % 5 == 0)) {
    console.log("FizzBuzz")

} else if (i % 3 == 0) {
    console.log("Fizz");

} else if (i % 5 == 0) {
    console.log("Buzz");

} else {
    console.log(i);
}}

  

  
 