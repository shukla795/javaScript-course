// we can achieve assynchronization with three Ways
// async/await
// callbacks
// promises

// achieve callbacks with setTimeout


// setTimeout(() => {
//         for(let i=0;i<10;i++){
//             console.log('ith value='+i);
//         }
// });
// console.log('Done printing');

// ####AJAX
//   ajax stands for asynchronous javascript and XML
//   it is not an programming language , its is set of existing technologies
//   ajax helps in fetching data asynchronously without interfering with the existing page


//   No page reload
//  Better user experience
//  saves network bandwidth
//  very interactive
//  only required part will come from server

// ajax uses XMLHttpRequest

// promises

var promise = new Promise(function(resolve, reject) { 
    const x = "geeksforgeeks"; 
    const y = "geeksforgeeks"
    if(x === y) { 
      resolve(); 
    } else { 
      reject(); 
    } }); 
  promise.then(function(){ 
  console.log('Success, You are a GEEK');}).catch(function () { 
  console.log('Some error has occurred');}); 
 







