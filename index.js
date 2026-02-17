
const loadCetegoryBtn = () => {
  const url = "https://fakestoreapi.com/products/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCategroyBtn(data));
};
const displayCategroyBtn = (btns) => {
  const categoryBtn = document.getElementById("category-btn");
  for (btn of btns) {
    const safeId = (btn);
    categoryBtn.innerHTML += `
           <button id="category-btn-${btn}" onclick="productShowCategory(\`${btn}\`)" class="btn btn-outline rounded-full cetegroy-btn">${btn.toUpperCase()}</button>
        `;
  }
};

// product card display
const productCard = () => {
  manageSpinner(true);
  const url = "https://fakestoreapi.com/products";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayProductCard(data));
};


// loading spinner

const manageSpinner = (status) => {
  if (status === true) {
    document.getElementById("spinner").classList.remove("hidden");
    document.getElementById("product-container").classList.add("hidden");
  } else {
    document.getElementById("product-container").classList.remove("hidden");
    document.getElementById("spinner").classList.add("hidden");
  }
};


loadCetegoryBtn();

