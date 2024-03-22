function displayTart(image, name, description, price) {
  if (!(image && name && description && price)) return;
  let tart = document.createElement("center");
  tart.classList.add("background");
  tart.classList.add("tart");
  let tartHTML = `
    <img class="tart-image" src="./images/tarts/${image}.jpeg">
    <div class="tart-text">
      <p class="bold">${name}</p>
      <p>${description}</p>
      <p>£${price}</p>
      <button class="add-to-cart">Add to cart</button>
    </div>`;
  tart.innerHTML = tartHTML;
  document.getElementById("products").appendChild(tart);
}