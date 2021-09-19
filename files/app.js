const menu = document.querySelector(".menu");
const boxEl = document.querySelector(".box");
const contain = document.querySelector("#change")
contain.addEventListener("click",() => {
    function rotate() {
        contain.classList.toggle("change");
    };
    rotate();
    if(!boxEl.classList.contains("show")){
        boxEl.classList.add("show");
    } else {
        boxEl.classList.remove("show")
    }
})