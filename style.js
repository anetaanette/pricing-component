let toggle = document.querySelector(".checkbox")
let firstDollar = document.querySelector(".one");
let secondDollar = document.querySelector(".two");
let thirdDollar = document.querySelector(".three");


function animatedToggle() {
    toggle.classList.toggle("active");

    if(toggle.classList.contains("active")) {
        firstDollar.innerText = "$ 19.99";
    secondDollar.innerText = "$ 24.99";
    thirdDollar.innerText = "$ 39.99";
    } else {
        firstDollar.innerText = "$ 199.99";
    secondDollar.innerText = "$ 249.99";
    thirdDollar.innerText = "$ 399.99";
    }
}

toggle.addEventListener("click", animatedToggle);