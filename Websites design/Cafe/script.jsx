let text = document.querySelector('.name-text');
console.log(text);

setInterval(() => {
    if (text.classList.contains('name-text')) {
        text.classList.remove('name-text');
    } else {
        text.classList.add('name-text');
    }
}, 700);

function slideshow() {
    let nav = document.querySelector(".nav-items");

    if (nav.classList.contains("extra")) {
        nav.classList.remove("extra");
    }
    else {
        nav.classList.add("extra");
    }
}