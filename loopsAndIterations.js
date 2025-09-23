const fruits = ['Mango','Banana','Apple','Orange','Guava']

for(const fruit of fruits){
    console.log(fruit)
}


for(let i =1; i<= 10; i++){
    console.log(i)
}



const person ={
    name:"Mohsin",
    age:20,
    isStudent:true
}

for(const data in person){
    console.log(data,':',person[data])
}




let num =0

while(num <=7){
    console.log(num)
    num++
}




let i = 1;
do{
    console.log(i)
    i ++
}while(
    i <9
)


let price = 0;

while(price <=8){
    if (price == 4){
        break
    }
    price++
    console.log('price',price)
}



for(let num =0; num <=7; num ++){
    if(num == 5){
        continue
    }
    console.log(num)
}