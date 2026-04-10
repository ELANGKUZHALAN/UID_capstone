let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, image) {
    cart.push({ name, price, image });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}

// DISPLAY CART ITEMS
function displayCart() {
    let cartItems = document.getElementById("cart-items");
    let total = document.getElementById("total");

    if (!cartItems) return;

    cartItems.innerHTML = "";
    let totalPrice = 0;

    cart.forEach((item, index) => {
        totalPrice += item.price;

        cartItems.innerHTML += `
            <div class="cart-item">
                <h4>${item.name}</h4></br>
                <p>₹${item.price}</p></br>
                <button onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });

    total.innerText = "Total: ₹" + totalPrice;
}

// REMOVE ITEM
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// LOAD CART WHEN PAGE OPENS
window.onload = displayCart;