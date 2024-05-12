let qrImg = document.querySelector("#qr-img");

let btn = document.querySelector("#inputBar");

btn.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        generateQR();
    }
})

function generateQR() {
    let search = document.querySelector("#inputBar").ariaValueMax;
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${search}`
}

