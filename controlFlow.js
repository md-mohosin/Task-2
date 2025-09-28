const num = 60;

if (num == 10) {
    console.log(num * num)
}
else {
    console.log(num + num)
}

let age = 20

age > 18 ? console.log('You are allowed to vote in the election') : console.log("You are not allowed to vote in the election.")



const price = 250;

if (price <= 400 && price >= 300) {
    console.log('I eat Kacchi')
}

else if (price <= 300 && price >= 250) {
    console.log('I eat Teheri')
}

else if (price <= 200 && price >= 100) {
    console.log('I eat Chicken')
}

else {
    console.log("I eat Jhalmuri")
}






const fruit = 'Banana'

switch (fruit) {
    case 'Apple':
        console.log('Apple is sweet and healthy.')
        break

    case 'Banana': console.log('Banana is Yellow'); break

    case 'Orange': console.log('Orane is rich in vitamin C'); break

    default: console.log('Unknown fruit')
}





try {
    const x = 5;
    // const y = 6
    console.log(x + y)

} catch (error) {
    console.log(`Error: ${error.message}`)
}




function substruction(a, b) {

    if (b == 0) {
        throw new Error("Substruction by 0 is not possible")
    }

    const result = a / b
    console.log(result)
}

try {
    substruction(10, 0)
} catch (error) {
    console.log(error.message)
}




function divison(a, b) {

    if (b == 0) {
        throw { message: "Division by 0 is not possible", code: 100 }
    }

    const result = a / b
    console.log(result)
}

try {
    divison(10, 0)
} catch (error) {
    console.log(error.message)
}





