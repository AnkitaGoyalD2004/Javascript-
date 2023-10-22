console.log("Hello World");
var myName = 'Ankita Goyal';
console.log(myName);
// there is a type of operator 
// which tells us a data type of a var
console.log(typeof(myName));

// Lets checkout some data types example
console.log(typeof(10 + "20")); // Here we get 1020 because in this concatenation take place
console.log(typeof("20" - 10));// Here is a bug in this case 
// this provide me 10 because now type of this is number
console.log('Ankita' + 'Goyal');
// In js 1 = true and 0 is false 
console.log(true + true);// this gives me an output of 2
console.log(false - true);// this gives me -1


//Lets see the use of NaN
var myPhoneNumber = 'Dishu Goyal';
console.log(isNaN(myPhoneNumber));
if(isNaN(myPhoneNumber)){
    console.log('Please enter a valid phone number');
}

//Operatoras
console.log(5+20);
// 5&20 is operand and + is operator and whole 5+20 is Expression
var x = 5 ; 
var y = 8;
console.log("is both the x and y are equal" + x == y); 
// 30 will give me false because of concatenation
console.log("Is both the x and y are equal : ${x == y}");