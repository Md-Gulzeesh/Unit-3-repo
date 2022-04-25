// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

document.getElementById("wallet").innerText = JSON.parse(localStorage.getItem("amount"));
let input = document.getElementById("search");
input.addEventListener("input",()=>{
    const url = `https://www.omdbapi.com/?s=${input.value}&apikey=7e5b987f`;
    fetch(url).then(function(res){
        return res.json();
    }).then(function(res){
        let data = res;
        console.log(res.Search)
        append_data(data.Search);
    }).catch((err)=>{
        console.log(err)
    });
})
function append_data(d){
    document.getElementById("movies").innerHTML = null;
    d.forEach(element => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = element.Poster;
        let title = document.createElement("h3");
        title.innerText = element.Title;
        let book_now = document.createElement("button");
        book_now.setAttribute("class","book_now");
        book_now.innerText = "Book Now";
        book_now.addEventListener("click",(el)=>{
            console.log(el);
            let movie = JSON.stringify(localStorage.setItem("movie",el));
            window.location.href = "checkout.html";
        })
        div.append(img,title,book_now);
        document.getElementById("movies").append(div);

    });
}