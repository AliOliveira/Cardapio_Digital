const menu = document.getElementById("menu")
const cartBtn = document.getElementById("cart-btn")
const cartModal = document.getElementById("cart-modal")
const cartItems = document.getElementById("cart-items")
const cartTotal = document.getElementById("cart-total")
const cartCount = document.getElementById("cart-count")
const dateSpan = document.getElementById("date-span")
const address = document.getElementById("address")
const addressWarn = document.getElementById("address-warn")
const closeModalBtn = document.getElementById("close-modal-btn")
const checkoutBtn = document.getElementById("checkout-btn")


//OPEN MODAL CART
cartBtn.addEventListener("click", function(){
    cartModal.style.display = "flex"
})

//CLOSE MODAL CART

cartModal.addEventListener("click", function(event){
    if(event.target === cartModal){
      cartModal.style.display = "none"
    }
})

closeModalBtn.addEventListener("click", function(){
    cartModal.style.display = "none"
})

menu.addEventListener("click", function(event){
    let parentButton = event.target.closest(".add-cart-btn")

    if(parentButton){
        const name = parentButton.getAttribute("data-name")
        const price = parseFloat(parentButton.getAttribute("data-price"))
    
        //ADD TO CART
    }
})

//FUNCTION ADD TO CART

function addToCart(name, price){
    alert("O item é " + name)
}