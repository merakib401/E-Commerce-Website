



const loadCatagories = () =>{
    document.getElementById("main-section").style.display="none"
const url = "https://fakestoreapi.com/products/categories"
fetch (url)
.then((res) => res.json())
.then ((data) => displayCatagories(data)
)
}
const displayCatagories = (catagories) =>{
 const catagorieContent = document.getElementById("catagorie-content")
 catagorieContent.innerHTML =" ";

    catagories.forEach((catagorie) => {
        const btnDiv = document.createElement ("div")
        btnDiv.innerHTML = `
        <h2 class="text-[20px]">Our Products</h2>
        <button class="btn btn-outline">${catagorie}</button>
       `
        catagorieContent.append(btnDiv)
    });



}


// loadCatagories()