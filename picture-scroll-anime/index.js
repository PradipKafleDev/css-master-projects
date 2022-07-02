const boxFrame = document.querySelectorAll('.box')

window.addEventListener('scroll', slidingImages)

slidingImages()

function slidingImages() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxFrame.forEach(box => {
        const frameTop = box.getBoundingClientRect().top

        if(frameTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}