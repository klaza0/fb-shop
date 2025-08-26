let cart = JSON.parse(localStorage.getItem("cart")) || [];

// إضافة منتج
function addToCart(productName, price) {
    let item = { name: productName, price: price };
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(productName + " added to cart!");
}

// لما نفتح cart.html
document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.includes("cart.html")) {
        let savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        let cartDiv = document.getElementById("cart-items");
        let totalDiv = document.getElementById("cart-total");

        if (savedCart.length === 0) {
            cartDiv.innerHTML = "<p>Your cart is empty.</p>";
        } else {
            let total = 0;
            savedCart.forEach(item => {
                cartDiv.innerHTML += `
                  <div class="cart-item">
                    <p>${item.name} - $${item.price}</p>
                  </div>
                `;
                total += item.price;
            });
            totalDiv.innerHTML = `Total: $${total}`;
        }
    }
});
