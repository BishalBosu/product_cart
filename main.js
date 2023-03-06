//crudcrud base url
const url = "https://crudcrud.com/api/a26a92fa0cf642c5a0b89f377de57d6d";


function clicked(){
    let price = document.getElementById("price").value;
    let name = document.getElementById("name").value;
    let catagoty = document.getElementById("type").value;

    obj = {
        price,
        name,
        catagoty
    };


    if (catagoty=="electronics"){
        axios
        .post(url+"/electronics", obj)
        .then(r=>{
            element = r.data;
            document.getElementById("electronics").innerHTML += `<div id = "${element._id}" class="mb-3"> &#8377;${element.price} - ${element.catagoty} - ${element.name} 
            <button type="button" onclick="del('${element._id}', '${element.catagoty}')" class="btn btn-danger"> Delete product</button> </div>`

        })
        .catch(e => {
            console.log(e);
        })
    }
    else if (catagoty=="food"){
        axios
        .post(url+"/food", obj)
        .then(r=>{
            element = r.data;
            document.getElementById("food").innerHTML += `<div id = "${element._id}" class="mb-3"> &#8377;${element.price} - ${element.catagoty} - ${element.name} 
            <button type="button" onclick="del('${element._id}', '${element.catagoty}')" class="btn btn-danger"> Delete product</button> </div>`

        })
        .catch(e => {
            console.log(e);
        })
    }
    else if (catagoty=="skincare"){
        axios
        .post(url+"/skincare", obj)
        .then(r=>{
            element = r.data;
            document.getElementById("skin").innerHTML += `<div id = "${element._id}" class="mb-3"> &#8377;${element.price} - ${element.catagoty} - ${element.name} 
            <button type="button" onclick="del('${element._id}', '${element.catagoty}')" class="btn btn-danger"> Delete product</button> </div>`

        })
        .catch(e => {
            console.log(e);
        })
    }
   
}




function show(){
    //get for electro
    axios
    .get(url+"/electronics")
    .then(r => {
        r.data.forEach(element => {
            document.getElementById("electronics").innerHTML += `<div id = "${element._id}" class="mb-3"> &#8377;${element.price} - ${element.catagoty} - ${element.name} 
            <button type="button" onclick="del('${element._id}', '${element.catagoty}')" class="btn btn-danger"> Delete product</button> </div>`

        });
    })
    .catch(e=>{
        console.log(e);
    })


    //get for food
    axios
    .get(url+"/food")
    .then(r => {
        r.data.forEach(element => {
            document.getElementById("food").innerHTML += `<div id = "${element._id}" class="mb-3"> &#8377;${element.price} - ${element.catagoty} - ${element.name} 
            <button type="button" onclick="del('${element._id}', '${element.catagoty}')" class="btn btn-danger"> Delete product</button> </div>`

        });
    })
    .catch(e=>{
        console.log(e);
    })

    //get for skincare
    axios
    .get(url+"/skincare")
    .then(r => {
        r.data.forEach(element => {
            document.getElementById("skin").innerHTML += `<div id = "${element._id}" class="mb-3"> &#8377;${element.price} - ${element.catagoty} - ${element.name} 
            <button type="button" onclick="del('${element._id}', '${element.catagoty}')" class="btn btn-danger"> Delete product</button> </div>`

        });
    })
    .catch(e=>{
        console.log(e);
    })
}

function del(id, catagory){
    
axios
    .delete(url+`/${catagory}/${id}`)
    .then(document.getElementById(id).remove())
    .catch(err =>{
        console.log(err);
    })

    
}

window.addEventListener("DOMContentLoaded", () =>{
    show();


})