//crudcrud base url
const url = "http://localhost:3002";


async function clicked(){
    let price = document.getElementById("price").value;
    let name = document.getElementById("name").value;
    let catagoty = document.getElementById("type").value;

    obj = {
        price,
        name,
        catagoty
    };


    clickProcess(catagoty, obj);
   
}

async function clickProcess(type, obj){
    try{
       const r = await axios
        .post(url+`/${type}`, obj);

        const element = await r.data;
        
        document.getElementById(`${type}`).innerHTML += `<div id = "${element._id}" class="mb-3"> &#8377;${element.price} - ${element.catagoty} - ${element.name} 
        <button type="button" onclick="del('${element._id}', '${element.catagoty}')" class="btn btn-danger"> Delete product</button> </div>`
        
    }
    catch(e) {
        console.log(e); 
    }

}


function show(){
    //get for electro
    showProcess("electronics");


    //get for food
    showProcess("food");

    //get for skincare
    showProcess("skincare");
}

//delete function
async function del(id, catagory){ 
    try{
        const r = await axios
            .delete(url+`/${catagory}/${id}`);

        document.getElementById(id).remove();
    }
    catch(err){

            console.log(err);
        }

    
}

window.addEventListener("DOMContentLoaded", () =>{
    show();

})

async function showProcess(type){
    try{
        const r = await axios
        .get(url+`/${type}`);

        const data = await r.data;

        
        data.forEach(element => {
                document.getElementById(`${type}`).innerHTML += `<div id = "${element._id}" class="mb-3"> &#8377;${element.price} - ${element.catagoty} - ${element.name} 
                <button type="button" onclick="del('${element._id}', '${element.catagoty}')" class="btn btn-danger"> Delete product</button> </div>`

            });
        
    }
    catch(e){
        console.log(e);
    }

}