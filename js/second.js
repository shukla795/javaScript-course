console.log("Second js");
// variables in js

// var , let , const
//  var --> we can used in anywhere in js
// let --> used in block scope
// const --> we can't change value , but we have various methods to add values that with only methods

var name = "string add";
console.log(name);


var number = 34;
console.log(number);

{
    let number = 45;
    console.log(number);
}

const cant = "can't change value";
console.log(cant); 

// but here change value 

const arr1 = [34,13,12,45];
arr1.push(78);
console.log(arr1);

// most programming case type
//  1-camelCase
//  2-kabab-case
//  3-snake_case
//  4-PascalCase