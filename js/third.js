// Datatype of js
//  primitive type
//  string , number , null , Boolean , undefined , Symbol

// refrence type
//    Array , object literals  , function , date 

let name = "string";
console.log((typeof name) );

let number = 34;
console.log((typeof number));

let arr = [1,2,3,4];
 console.log(typeof arr);

let obj = {
    har:"shukla",
    shu:"harshit",
} 
console.log((typeof obj));

function fname(params) {
    
}
console.log((typeof fname));

let date = new Date();
console.log(date);

//type conversion

let num = String(34);
console.log((typeof num));
let i= 45;
console.log((typeof i.toString()));

let bool = Number(true);
console.log((typeof bool));

let i1 = 34.5;
console.log((typeof i1));
console.log( i1.toFixed(2));

let num1  = parseInt("34");
console.log(typeof num1);
// parseFloat
// type coresion(when we add string & number)