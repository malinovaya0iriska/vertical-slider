const upButton = document.querySelector('.up-button') //get object from arrow UP
const downButton = document.querySelector('.down-button') //get object from arrow DOWN

const leftSlide = document.querySelector('.leftSlide') // get object with images from the left side
const container = document.querySelector('.container')
const rightSlide = document.querySelector('.right-slide') //get object with images from the right side

const slidesSum = rightSlide.querySelectorAll('div').length // common slide's amount

let currentSlideIndex = 0 // active displayed slide, its number

leftSlide.style.top = `-${(slidesSum - 1) * 100}vh` // calculate

//slide images with button click, subscribe on Event 'click'
upButton.addEventListener('click', () => { //
    flipSlides('up')
})

downButton.addEventListener('click', () => {  //
    flipSlides('down')
})

//support flipping slides with mouse wheel
document.addEventListener('wheel', event => {
    if (event.deltaY < 0) {
        flipSlides('up')
    } else if (event.deltaY > 0) {
        flipSlides('down')
    }
})

//support flipping slides with keyboard
document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {
        flipSlides('up')
    } else if (event.key === 'ArrowDown') {
        flipSlides('down')
    }
})


//changing slides logic
// if 'up' increment index
// and check index value, if it's more than slides number return to the first img
function flipSlides(direction) {
    if (direction === 'up') {
        currentSlideIndex++
        if (currentSlideIndex === slidesSum) {
            currentSlideIndex = 0
        }
        //if 'down' increment index on 1
        // check index value, if it's more than slides number return to the last img
    } else if (direction === 'down') {
        currentSlideIndex--
        if (currentSlideIndex < 0) {
            currentSlideIndex = slidesSum - 1
        }
    }

//calculate screen height
    const screenHeight = container.clientHeight

//move slides on screen height.
//"-" up,  "+" down, left and right img in opposite directions
    rightSlide.style.transform = `translateY(-${currentSlideIndex * screenHeight}px)`
    leftSlide.style.transform = `translateY(${currentSlideIndex * screenHeight}px)`
}