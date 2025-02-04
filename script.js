console.log("teste karalho")


const menu = document.getElementById("menu");
const cartBtn = document.getElementById("cart-btn");
const btnAddToCart = document.getElementById("add-to-cart-btn");
const cartModal = document.getElementById("cart-modal");
const cartItensConteiner = document.getElementById("cart-items");
const precoTotal = document.getElementById("cart-total");
const checkout = document.getElementById("checkout-btn"); 
const closeModal = document.getElementById("close-model-btn");
const cartCount = document.getElementById("cart-count");
const addressInput = document.getElementById("address");
const addressWarn = document.getElementById("address-warn");


//functions para abrir carrinho


cartBtn.addEventListener("click", function(){
   cartModal.style.display = "flex";
})


//functions para fechar carrinho

cartModal.addEventListener("click", function(event) {
    if(event.target === cartModal) {
        
        cartModal.style.display = "none";
    }
    console.log(event)
    })


    closeModal.addEventListener("click", function(){
        cartModal.style.display = "none";
    })


