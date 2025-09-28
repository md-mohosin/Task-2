function name(name = 'Mohsin') {
    console.log(`Hi ${name}`)
}

// name()
name('Mohsin')




    function sum(...numbers) {
        const result = numbers.reduce((total, n) => total + n, 0)
        console.log(result)
    }


sum(1, 2, 3)




const user = (name = "Mohsin")=>{
    console.log(`${name} is normal user`)
}

user('Murtasim')







const age = '12'
console.log(parseInt(age))

console.log(Math.floor(Math.random()*10))+1

console.log(Math.random()*10)+1









function first() {
  console.log("First function");
  second();
}

function second() {
  console.log("Second function");
  third();
}

function third() {
  console.log("Third function");
}

first();


let a;
let b;

(function(){
     a = 5;
     b = 7;
    console.log("Sum:", a + b);
})()

console.log(a)




{
  let z = 30;
  /*var z = 30;*/ // accasable
  console.log(z)
}
console.log(z); 



