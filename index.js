



// const loadCatagories = () =>{
//     document.getElementById("main-section").style.display="none"
// const url = "https://fakestoreapi.com/products/categories"
// fetch (url)
// .then((res) => res.json())
// .then ((data) => displayCatagories(data)
// )
// }

const loadProducts =() =>{
    const url = "https://fakestoreapi.com/products"
    fetch (url)
    .then((res) =>res.json())
    .then((data) => displayProducts(data))
}

    const displayProducts = (Products) =>{
    const productContnet =document.getElementById("product-content")
        productContnet.innerHTML = ""

        Products.forEach((Product) =>{
            console.log(Product);
            const btnProduct = document.createElement("div")
            btnProduct.innerHTML = `
             <div class="bg-gray-100 flex  min-h-screen p-8  justify-center items-start">
      <div class="max-w-[320px] bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden" >
        <div class="bg-[#eef0f2] p-8 flex justify-center items-center">
          <img class="h-48 object-contain mix-blend-multiply" src ="${Product.image}" />
        </div>

        <div class="p-5">
          <div class="flex justify-between items-center mb-3">
            <span class="bg-indigo-50 text-indigo-600 text-xs font-medium px-2.5 py-1 rounded-full" >
              ${Product.category}
            </span>
            <div class="flex items-center gap-1">
              <span class="text-yellow-400 text-sm" ><i class="fa-solid fa-star"></i> </span>
              <span class="text-gray-700 text-sm font-medium">${Product.rating.rate}</span>
              <span class="text-gray-400 text-sm">(${Product.rating.count})</span>
            </div>
          </div>

          <h3 class="text-gray-800 font-semibold text-lg mb-2">
            ${Product.title}
          </h3>

          <div class="text-2xl font-bold text-[#1a2332] mb-5">$${Product.price}</div>

          <div class="flex gap-3">
            <button
              class="flex-1 flex items-center justify-center gap-2 border border-gray-200 text-gray-700 py-2.5 rounded-lg hover:bg-gray-50 transition text-sm font-medium" >
              <i class="fa-regular fa-eye"></i>
              Details
            </button>
            <button class="flex-1 flex items-center justify-center gap-2 bg-[#6366f1] text-white py-2.5 rounded-lg hover:bg-[#5558e3] transition text-sm font-medium" >
              <i class="fa-solid fa-cart-arrow-down"></i>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
            
            
            `
            productContnet.append(btnProduct)
        })

    }
    loadProducts()

// const displayCatagories = (catagories) =>{
//  const catagorieContent = document.getElementById("catagorie-content")
//  catagorieContent.innerHTML ="";

//     catagories.forEach((catagorie) => {
//         const btnDiv = document.createElement ("div")
//         btnDiv.innerHTML = `
//         <button class="btn btn-outline">All</button>
//         <di>  </di>
 
//        `
//         catagorieContent.append(btnDiv)
//     });



// }


// loadCatagories()