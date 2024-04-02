function displayTart(image, name, description, price) {
  if (!(image && name && description && price)) return;
  let tart = document.createElement("center");
  tart.classList.add("background");
  tart.classList.add("product");
  let tartHTML = `
    <img class="product-image" src="images/tarts/${image}.jpeg">
    <div class="product-text">
      <p class="bold">${name}</p>
      <p>${description}</p>
      <p>£${price}</p>
      <button class="add-to-cart">Add to cart</button>
    </div>`;
  tart.innerHTML = tartHTML;
  document.getElementById("products").appendChild(tart);
}

function displayCatergory(image, name, description, url) {
  let cat = document.createElement("center");
  cat.classList.add("background");
  cat.classList.add("product");
  let catHTML = `
  <a href="/catergories/${url}.html">
    <img class="product-image" src="images/catergories/${image}.jpeg">
    <div class="product-text">
      <p class="bold">${name}</p>
      <p>${description}</p>
    </div>
  </a>`;
  cat.innerHTML = catHTML;
  document.getElementById("products").appendChild(cat);
}

async function displayProducts(src, type) {
  let products = await listProducts(src);
  if (type == "t") {
    products.forEach(
      (tart) => {
        displayTart(
          tart.image,
          tart.name,
          tart.description,
          tart.price
        );
      }
    );
  } else if (type == "c") {
    products.forEach(
      (category) => {
        displayCatergory(
          category.image,
          category.name,
          category.description,
          category.url
        );
      }
    );
  }
}