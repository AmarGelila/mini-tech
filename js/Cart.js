import cartItems from "./main.js";
export default class Cart {
  constructor() {
    document.querySelector(
      "main"
    ).innerHTML = `<div class="container mt-5 pt-3">
                                                  <div class="cart-data mt-5 p-3 d-flex align-items-center justify-content-between rounded-3 border"> 
                                                    <h5 class="mb-0 text-dark">Total Quantity: <span class="count text-info"></span></h5>
                                                    <h5 class="mb-0 text-dark">Total Price: <span class="price text-info"></span></h5>
                                                  </div>
                                                </div>
                                                <section id="products" class="user-action mt-5">
                                                  <div class="container">
                                                    <div class="row row-gap-4"></div>
                                                  </div>
                                                </section>`;

    this.DOMEle = document.querySelector("#products .row");
    this.totalPriceEle = document.querySelector(".cart-data .price");
    this.totalPrice = 0;
    this.itemsCountEle = document.querySelector(".cart-data .count");
    this.itemsCount = cartItems.size;
    this.display();
    this.DOMEle.addEventListener("change", (e) => this.changeQuantity(e));
    this.DOMEle.addEventListener("click", (e) => this.removeItem(e));
  }

  display() {
    for (let item of cartItems) {
      this.totalPrice += +item[1].product.price;
      this.displyCartProduct(item);
    }
    this.updateDOM();
  }
  displyCartProduct(item) {
    this.DOMEle.innerHTML += `<div class="product position-relative col-6 col-sm-4 col-md-3" 
    data-key="${item[0]}">
              <div class="card overflow-hidden border-0">
                <img src=${item[1].product.image_url} class="card-img-top"
                alt=${item[1].product.name + " " + item[1].product.model} />
                <div class="card-body">
                  <div
                    class="d-flex flex-column align-items-start mb-0"
                  >
                    <h5 class="mb-1">
                      ${item[1].product.name + " " + item[1].product.model}
                    </h5>
                    <h6 class="text-info mb-1">
                      ${item[1].product.price + " " + item[1].product.currency}
                    </h6>
                    <h6 class="quantity mb-1"
                      >Quantity:   
                      <input
                        type="number"
                        name="product-quantity"
                        min="1"
                        max="10"
                        value="1"
                      />
                    </h6>
                  </div>
                </div>
              </div>
                <button
                  type="button"
                  class="remove btn btn-dark d-inline-block position-absolute rounded-0"
                >
                  REMOVE
                </button>
            </div>`;
  }
  changeQuantity(e) {
    if (e.target.name === "product-quantity") {
      const key = e.target.closest(".product").getAttribute("data-key");
      const item = cartItems.get(key);
      this.updateData(-item.quantity, item.product.price);
      cartItems.set(key, { product: item.product, quantity: +e.target.value });
      this.updateStates(+e.target.value, +item.product.price);
    }
  }
  removeItem(e) {
    if (e.target.classList.contains("remove") === true) {
      const itemEle = e.target.closest(".product");
      const key = itemEle.dataset.key;
      const item = cartItems.get(key);
      this.updateStates(-item.quantity, +item.product.price);
      cartItems.delete(key);
      itemEle.remove();
    }
  }
  updateStates(quantity, price) {
    this.updateData(quantity, price);
    this.updateDOM();
  }
  updateData(quantity, price) {
    this.itemsCount += quantity;
    this.totalPrice += quantity * price;
  }
  updateDOM() {
    this.totalPrice = +this.totalPrice.toFixed(2);
    this.itemsCountEle.textContent = this.itemsCount;
    this.totalPriceEle.textContent = this.totalPrice;
  }
}
/*
    --- remove:-
        --- check if target === remove
          --- update totalPrice , itemsCount
          --- remove it from cartItems
          --- remove it from DOM

*/
