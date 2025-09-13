import Home from "./Home.js";
import Products from "./Products.js";
import Cart from "./Cart.js";

const searchEle = document.querySelector("header input[type='search']");
const searchResultsEle = document.querySelector("#search-results");
const searchResultsContentEle = document.querySelector(
  "#search-results .content"
);
const cancelSearchEle = document.querySelector("#search-results button");
const cartCountEle = document.querySelector("#cart .count");
const routes = {
  home: { path: "/" },
  mobiles: { path: "/mobiles" },
  watches: { path: "/watches" },
  cart: { path: "/cart" },
};
let cartItems = new Map();
let page;
let currentPath;

searchEle.addEventListener("input", (e) => {
  console.log(page);
  if (currentPath === "/mobiles" || currentPath === "/watches") {
    page.updateSearchResults(e);
  }
});
cancelSearchEle.addEventListener("click", exitSearch);
searchResultsContentEle.addEventListener("click", (e) =>
  scrollToSearchResult(e)
);

window.addEventListener("load", () => {
  updatePage();
});
document.querySelectorAll(".route").forEach((route) => {
  route.addEventListener("click", (e) => {
    e.preventDefault();
    const element = e.target.closest(".route");
    const href = element.href.slice(element.href.lastIndexOf("/") + 1);
    history.pushState(routes[href].path, "", routes[href].path);
    updatePage();
  });
});
window.addEventListener("popstate", () => {
  updatePage();
});
function updatePage() {
  currentPath = location.pathname.slice(location.pathname.lastIndexOf("/"));
  console.log(currentPath);
  if (currentPath === "/cart") cartCountEle.style.display = "none";
  if (currentPath === "/") {
    page = new Home();
  } else if (currentPath === "/mobiles") {
    page = new Products("smartphones");
  } else if (currentPath === "/watches") {
    page = new Products("smartwatches");
  } else if (currentPath === "/cart") {
    page = new Cart();
  }
}
function exitSearch() {
  searchResultsContentEle.innerHTML = "";
  searchResultsEle.style.display = "none";
  searchEle.value = "";
}
function scrollToSearchResult(e) {
  const searchMatchEle = e.target.closest(".match");
  if (searchMatchEle !== null) {
    const fullName = searchMatchEle.querySelector("h5").innerHTML.trim();
    const elements = Array.from(page.DOMEle.children);
    for (let i = 0; i < elements.length; i++) {
      if (elements[i]?.querySelector("h5")?.innerHTML.trim() === fullName) {
        const navbarToggler = document.querySelector(".navbar-toggler");
        navbarToggler.classList.add("collapsed");
        navbarToggler.setAttribute("aria-expanded", "false");
        document.querySelector(".navbar-collapse").classList.remove("show");
        elements[i].scrollIntoView(false, {
          behaviour: "smooth",
          block: "center",
        });
        exitSearch();
        break;
      }
    }
  }
}
export default cartItems;
export { cartCountEle, searchEle, searchResultsEle, searchResultsContentEle };
