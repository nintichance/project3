const gallery = document.querySelector('.gallery')
const overlay = document.querySelector('.overlay')
const overlayImage = overlay.querySelector('img')
const overlayClose = overlay.querySelector('.close')

function generateHTML([h, v]) {
    return 
    `
    <div class='item h${h} v${v}'></div>
    <img src=${props.img}
    `
    
}