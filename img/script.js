let imageCount = document.querySelectorAll('.image-slider img')
let con = document.querySelector('.images')
const imageWidth = 400

let valueLeft = 0
function nextImage() {
    valueLeft ++
    if (valueLeft >= imageCount.length) {
        valueLeft = 0}
    con.style.left = (valueLeft * imageWidth * -1) + 'px'
}

timer = setInterval(nextImage, 2000)

function hoverOnImages() {
    clearInterval(timer)
}