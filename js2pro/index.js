console.log("This project id done with object oriented concept");
  
//   this is constructor
function Book(name , author , type) {
    this.name = name;
    this.author = author;
    this.type = type;
}


function Display(params){
    
}

Display.prototype.add = function (book) {
    // console.log("Adding to UI");
    // e.preventDefault();
    let tablebody = document.getElementById('tablebody');
    let uistring = `
                    <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>
                    `
        tablebody.innerHTML += uistring;            
}
Display.prototype.clear = function () {
    let libraryform = document.getElementById('libraryform');
    libraryform.reset();
    // console.log("cnjdnc");
}

Display.prototype.show = function (type , dismessage) {

     let message  = document.getElementById('message');
     message.innerHTML = `
                            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Holy guacamole!</strong> ${dismessage}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                           `

      setTimeout(function () {
          message.innerHTML = '';
      },2000)                     
}

Display.prototype.validate = function (book) {
         if(book.name.length<2||book.author.length<2){
             return false;
         }else{
             return true;
         }
    // console.log("cnjdnc");
}

let libraryform = document.getElementById("libraryform");
libraryform.addEventListener("submit" , libraryformsubmit);

function libraryformsubmit(e) {
    
    let name  = document.getElementById('bookname').value;
    let author = document.getElementById('author').value;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    let type;

    if(fiction.checked){
     type = fiction.value;
    }else if(programming.checked){
     type = programming.value;
    }else if(cooking.checked){
     type = cooking.value;
    }
        

    let book = new Book(name , author , type);
    // console.log(book);
   
    let display = new Display();
    if(display.validate(book)){
            display.add(book);
            display.clear();
            display.show('success', 'succes Congrats...');
    }else{
       display.show('danger' , 'sorry please fill all feilds');
    }
    e.preventDefault();
    // console.log("this is event listner");
}