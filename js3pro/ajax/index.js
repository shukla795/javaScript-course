let fetchbtn = document.getElementById('fetchbtn');
let backbtn = document.getElementById('backbtn');

 backbtn.addEventListener("click" , populate);

fetchbtn.addEventListener("click",fetchdata);
function fetchdata() {
    console.log("fetch data");
    const xhr = new XMLHttpRequest();

    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true); 
       xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true); 
       xhr.getAllResponseHeaders('content-type','application/json');

    // Asynchronous
    // GET - we get some data from file or URL
    // post -- we give some data & URL or File & after this we will get response
    
    
    // what to do on progress
    xhr.onprogress = function () {
        console.log('on progress');
        // we can show here loading 
    }

    // readystate change
    // show code values
      xhr.onreadystatechange = function () {
          console.log('ready State is' , xhr.readyState);
      }
    
    // what to do when Response is ready
    xhr.onload = function () {
        if(this.status == 200){
        console.log(this.responseText);
        }else{
            console.log("some error occured");
        }
    }
    
    params = 	{"name":"test","salary":"123","age":"23"};
    xhr.send(params);

}




function populate(){

 let xhr = new XMLHttpRequest();   
 xhr.open('GET','https://dummy.restapiexample.com/api/v1/employees',true); 
 

// Asynchronous
// GET - we get some data from file or URL
// post -- we give some data & URL or File & after this we will get response


// what to do on progress
xhr.onprogress = function () {
  console.log('on progress');
  // we can show here loading 
}

// readystate change
// show code values
// xhr.onreadystatechange = function () {
//     console.log('ready State is' , xhr.readyState);
// }

// what to do when Response is ready
xhr.onload = function () {
  if(this.status == 200){
//   console.log(this.responseText);
    let obj = JSON.parse(this.responseText);
    console.log(obj);
        //     let list = document.getElementById('list');
        //     let str = "";

        //     for(key in obj){
        //     str += `<li>${obj[key].employee_name}</li>`;
        //     }
        // list.innerHTML = str;

   }else{
      console.log("some error occured");
  }
}

xhr.send();
    
}