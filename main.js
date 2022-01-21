// let wrapper = document.querySelector('.wrapper')
// // wrapper.style = 'background: blue; margin: 0 auto; width: 900px'
// let inner = document.querySelectorAll('.inner')

// function randomColor() {
//     let r = Math.floor(Math.random() * 256)
//     let g = Math.floor(Math.random() * 256)
//     let b = Math.floor(Math.random() * 256)
//     return `rgb(${r}, ${g}, ${b})`
// }

// let body = document.querySelector('body')
// let btn = document.querySelector('.btn')

// // setInterval(() => {
//     for (const iterator of inner) {
//         iterator.style = 'transition: 0.5'
//         iterator.style.background = randomColor()
//     }
// // }, 1000); 

let body = document.querySelector('body')
let img = document.querySelectorAll('.image')

img.forEach(element => {
    element.addEventListener('click', function () {
        let attr = this.getAttribute('src')
        body.style = `background: url(${attr}) center / cover no-repeat`
    })
});


   



















































































   
    


