console.log("tut7");
//  ######traversing the javascript

// const cont = document.querySelector(".no");
cont = document.querySelector(".container");
//  cont = cont.childNodes; // all data comes 
//  cont = cont.children; remove text & comments

//    cont = cont.childNodes[0].nodeName;
// cont = cont.childNodes[0].nodeType;

// Node type value
// 1-Element
// 2-Attribute
// 3-Textnode
// 8 - Comment
// 9-document
// 10 - doc type


 console.log(cont);
// console.log(cont.children[1].children[0].children);

// console.log(cont.firstChild); childNodes ka first child
// console.log(cont.firstElementChild); childNodes ka firstelement child

// console.log(cont.lastChild); childNodes ka last child
// console.log(cont.lastElementChild); childNodes ka lastElement child


// console.log(cont.childElementCount);

// console.log(cont.firstElementChild.parentNode);
//  console.log(cont.firstElementChild.nextElementSibiling);
//  console.log(cont.firstElementChild.nextSibiling);
//  console.log(cont.firstElementChild.nextElementSibiling.nextElementSibiling.nextElementSibiling);


//  ##### create & replace & remove element


//   let element  = document.createElement('p');
//    element.className = 'new';
//    element.id = 'new';
//    element.setAttribute('title','mytitle');
//    element.innerText = 'this is me';
//    element.innerText = '<b>this is me</b>';
   
// //    where add
//     let ul = document.querySelector(ul.this);
//     ul.appendChild(element);

//     let text = document.createTextNode("this i me");
//     element.appendChild(text); 


//  let elem2 = document.createElement('h2');
//  elem2.className = 'elem2';
//  elem2.id = 'elem2';
//  let text2 = document.createTextNode('this is me');
//  elem2.appendChild(text2);
//  element.replaceWith(elem2);

// //   replaceChild
//  let myul = document.getElementById('myul');
//   myul.replaceChild(elem2.document.getElementById('ioi'));

// myul.removeChild(document.getElementById('ioi'));

// //  get id & class from Attribute
//  let pr = elem2.getAttribute('id');
//  pr = elem2.getAttribute('class');
  

//  let check = elem2.hasAttribute('id');
//   check = elem2.hasAttribute('class');












