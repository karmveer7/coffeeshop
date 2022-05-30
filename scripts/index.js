// Add the coffee to local storage with key "coffee"
getdata();
async function getdata(){
    let url=`https://masai-mock-api.herokuapp.com/coffee/menu`;
    let item=await fetch(url);
    let mydata=await item.json();
    console.log(mydata.menu.data);
let mycoffe=mydata.menu.data;
   append(mycoffe)
}
function append(mycoffe)
{
    let box=document.querySelector("#menu");
    box.innerHTML=null;
    mycoffe.forEach(function (el)
    {
        let container=document.createElement("div");

        let image=document.createElement("img")
        image.src=el.image;

        let type=document.createElement("p")
        type.innerText=el.title;

        let price=document.createElement("p")
        price.innerText=el.price;

        let button=document.createElement("button")
        button.innerText="Add to Bucket";

        container.append(image,type,price,button)
        box.append(container);
        button.addEventListener("click",function(){
          addData(el)
        })

    })
    
}
var cartArr=JSON.parse(localStorage.getItem("coffee")) ||[]

function addData(el)
{
    cartArr.push(el);
    localStorage.setItem("coffee",JSON.stringify(cartArr));
}  



