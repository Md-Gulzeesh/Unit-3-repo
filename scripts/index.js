// Store the wallet amount to your local storage with key "amount"
let wallet_amount = document.getElementById("amount");
let wallet_display = document.getElementById("wallet");
let addTowallet = document.getElementById("add_to_wallet");
addTowallet.addEventListener("click",()=>{
    console.log("inside function");
    let data = JSON.stringify(localStorage.setItem("amount",wallet_amount.value)) || null;
    wallet_display.innerText = JSON.parse(localStorage.getItem("amount"));
    
})
let movies_btn = document.getElementById("book_movies");
movies_btn.addEventListener("click",()=>{
    window.location.href = "movies.html";
})