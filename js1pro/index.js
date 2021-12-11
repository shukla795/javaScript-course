showData();

//  document.getElementById("sdata").addEventListener("click",function() {
//     let gdata = document.getElementById("gdata");
//     console.log(gdata.value);
//  })

let gdata = document.getElementById("gdata");
gdata.addEventListener("input",function () {
    let searchvalue = gdata.value;
    // console.log(searchvalue);
    let notedata = document.getElementsByClassName("notecard");
    Array.from(notedata).forEach(function (element) {
       let cardda =  element.getElementsByTagName("p")[0].innerText;
       if(cardda.includes(searchvalue)){
           element.style.display = "block";
       }else{
        element.style.display = "none";
       }
    // console.log(element);
    })
})


let cont = document.getElementById("btn");
cont.addEventListener("click",function() {
//    console.log("you click");
   let data = document.getElementById("txt");
//    console.log(data.value); 
   
    let notes  = localStorage.getItem("notes");
    if(notes==null){
       noteobj = [];
    }else{
        noteobj = JSON.parse(notes);
    }
    noteobj.push(data.value);
    localStorage.setItem("notes",JSON.stringify(noteobj));
    data.value = " "; 
    showData();
});

function showData() {
    let notes  = localStorage.getItem("notes");
    if(notes==null){
       noteobj = [];
    }else{
        noteobj = JSON.parse(notes);
    }
    // noteobj.push(data.value);
    // localStorage.setItem("notes",JSON.stringify(noteobj));
    // data.value = " "; 
    let inht = "";
    noteobj.forEach(function (element,index) {
        // console.log(element);
         inht += `
                     
                        <div class="notecard  mx-3 my-3 card" style="width: 18rem;">
                        <div class="card-body">
                        <h4>Note ${index+1}</h4>
                            <p class="card-text">${element}</p>
                        </div>
                   <button id="${index}" style="margin-bottom:25px" onClick="{Delete(this.id)}" class="btn btn-primary" type="submit">Delete Node</button>
                      </div>
                      `;
    });
    let showdata = document.getElementById("show");
    showdata.innerHTML = inht;
}



function Delete(index) {
    // console.log(index);
    let notes  = localStorage.getItem("notes");
    if(notes==null){
       noteobj = [];
    }else{
        noteobj = JSON.parse(notes);
    }

    noteobj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(noteobj));
    showData();
}

 





