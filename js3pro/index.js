console.log("this is API based project");
// Api key is not working this time
// 1341f7d259624393808e66f2d88b76a3
let newsaccordian = document.getElementById("newsaccordian");
 
// let source = 'bbc-news';
// let apikey = '1341f7d259624393808e66f2d88b76a3';
let xhr = new XMLHttpRequest();   
xhr.open('GET','https://newsapi.org/v2/top-headlines?sources=bbc-news&apikey=1341f7d259624393808e66f2d88b76a3',true); 

xhr.onload = function () {
        if(this.status == 200){
          console.log(this.responseText);
                let obj = JSON.parse(this.responseText);
                console.log(obj);
        }else{
            console.log("some error occured");
        }
}

xhr.send();

let htm = `
<div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
            </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
        </div>
</div>
   `