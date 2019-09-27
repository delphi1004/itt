
//----- numbers ---------------//

let firstNumber = 10;
let secondNumber = 20;

console.log('\n')
console.log(`this is possible way to display a variables ${firstNumber}`);
console.log(`The sum is %s`,firstNumber+secondNumber);
console.log(`or ${firstNumber+secondNumber}`);
console.log('\n')

//----- strings ---------------//

let firstName = 'John';
let lastName = 'Lee';
let fullName = (firstName + ' ' + lastName);

console.log(firstName + ' '+lastName);
console.log(`Length of name is ${fullName.length}`);
console.log(`'Lee' is ${fullName.indexOf('Lee')} `);
console.log(`replacing result is ${fullName.replace('Lee','Kim')} `);
console.log('\n')

//----- boolean ---------------//

let a1 = true;
let a2 = 'true';
let a3 = 0;
let a4 = 0;

console.log(a1 + ' ' + a2 + ' ' + Boolean(a3) + ' ' + Boolean(a4));
console.log(` 10 is bigger than 1? ${Boolean(10 > 1)} \n\n`);

//----- object ---------------//

let person = { firstName : "John" , lastName : "Lee" , age : 46 , nationality : "Korean"};

console.log(`${person.firstName} ${person.lastName} is ${person.age} years old and came from ${person.nationality}`);


//----- copy object ---------------//

let x = person;

x.age = 10;


//----- array ---------------//

let myData = ["apple" , "banana" , person , 100];

console.log(myData[0]);

for (i = 0;i<myData.length;i++){

    console.log(myData[i]);
}

myData.forEach((data) =>{

    console.log(data);
})













