import cartItems from "./main.js";
import {
  cartCountEle,
  searchEle,
  searchResultsEle,
  searchResultsContentEle,
} from "./main.js";

import phones from "./smartphones-data.js";
import watches from "./smartwatches-data.js";

export default class Products {
  constructor(category) {
    this.category = category;
    this.data = category === "smartphones" ? phones : watches;
    document.querySelector(
      "main"
    ).innerHTML = `<section id=${this.category} class="mt-5 user-action">
                        <div class="container-fluid py-5">
                            <div class="section-header d-flex align-items-center justify-content-between">
                              <h2 class="text-uppercase">${this.category}</h2>
                              <a href="#" class="text-dark">More</a>
                            </div>
                            <div class="row row-gap-4"></div>
                        </div>
                    </section>`;
    this.DOMEle = document.querySelector(`#${this.category} .row`);
    this.DOMEle.addEventListener("click", (e) => this.addProductToCart(e));
    this.displayProducts(this.data.products);
  }

  displayProducts(data) {
    for (let i = 0; i < data.length; i++) {
      this.DOMEle.innerHTML += `<div class="product col-6 col-sm-4 col-md-3 position-relative"  data-id=${
        data[i].id
      }>
                            <div class="card overflow-hidden border-0">
                              <img
                                src=${data[i].image_url}
                                class="card-img-top"
                                alt=${data[i].name + " " + data[i].model}
                                />
                              <div class="card-body">
                              <div class="card-title mb-0 text-center">
                                  <h5 class="mb-2">${
                                    data[i].name + " " + data[i].model
                                  }</h5>
                                  <span class="text-info">${
                                    data[i].price + data[i].currency
                                  }</span>
                                </div>
                              </div>
                              </div>
                              <button type="button" class="buy btn btn-dark d-block position-absolute rounded-0 fs-6">
                                ADD TO CART
                              </button>
                        </div>`;
    }
  }
  addProductToCart(e) {
    if (e.target.classList.contains("buy") === true) {
      const productID = e.target.closest(".product").dataset.id;
      const product = this.data.products[productID - 1];
      cartItems.set(this.category + productID, {
        product: product,
        quantity: 1,
      });
      if (cartItems.size === 1) cartCountEle.style.display = "flex";
      cartCountEle.innerHTML = cartItems.size;
    }
  }
  updateSearchResults(event) {
    searchResultsContentEle.innerHTML = "";
    let query = event.target.value.toLowerCase().trim();
    if (query.length === 1) {
      searchResultsEle.style.left = `${searchEle.parentElement.offsetLeft}px`;
      searchResultsEle.style.width = `${searchEle.parentElement.offsetWidth}px`;
      searchResultsEle.style.display = "block";
    } else if (query.length === 0) searchResultsEle.style.display = "none";

    if (query !== "") {
      const matches = this.searchProducts(query);
      console.log(matches);
      for (let index of matches) {
        const match = this.data.products[index - 1];

        searchResultsContentEle.innerHTML += `<div class="match">
            <button class="btn">
            <img
            src=${match.image_url}
              alt=${match.name + " " + match.model}
              class="img-thumbnail"
              style="width: 150px; height: 150px"
            />
            <h5 class="h5">${match.name + " " + match.model}</h5>
          </button>
        </div>`;
      }
    }
  }
  searchProducts(query) {
    let results = [];
    const products = this.data.products;
    for (let i = 0; i < products.length; i++) {
      const fullName =
        products[i].name.toLowerCase() + " " + products[i].model.toLowerCase();
      if (fullName.includes(query) === true) results.push(products[i].id);
    }
    return results;
  }
}

/*
    *** SEARCH
    ---- ( pathname === 'mobiles' || 'watches' )
      ---- searchProducts in this.data
        ---- 
*/
