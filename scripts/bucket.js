var mycoffee=JSON.parse(localStorage.getItem("coffee")) 
append(mycoffee)
function append(mycoffee)
{
    
    let box=document.querySelector("#add_to_bucket");
    // box.innerHTML=null;
    mycoffee.forEach(function (el)
    {
        let container=document.createElement("div");

        let image=document.createElement("img")
        image.src=el.image;

        let type=document.createElement("p")
        type.innerText=el.title;

        let price=document.createElement("p")
        price.innerText=el.price;

        let button=document.createElement("button")
        button.innerText="Remove";

        container.append(image,type,price,button)
        box.append(container);
       

    })
    
}

// function addData(el)
// {
//     cartArr.push(el);
//     localStorage.setItem("coffee",JSON.stringify(cartArr));
// }  



