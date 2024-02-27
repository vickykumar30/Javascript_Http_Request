window.onload = function(){
    var product = document.getElementById("product");
    var spinner = document.getElementById("spinner");
    spinner.style.display =  "block";
    fetch("https://fakestoreapi.com/products",{method : 'Get'})
    .then(function(response){
        return (response.json())
    })
    .then(function(data){
        console.log(data)
        // console.log(data.description)
        for(let i=0; i<data.length;i++){
            // console.log(data[i]);
            let pdata = data[i]
            // console.log(pdata.image)
            let pcard = `<div class="card g-2 m-2" style="width: 22rem;">
            <img src="${pdata.image}" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
              <h5 class="card-title">${pdata.title}</h5>
              <p class="card-text">${pdata.description}</p>
              <p class="card-text">$ ${pdata.price}</p>
              <p class="card-text">${pdata.category}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>`
          product.innerHTML += pcard;
          spinner.style.display =  "none";
        }
       
    })
    .catch(function(){
        console.log(err.msg)
    })
}