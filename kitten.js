console.log("kitten time babe!")
let fileNames = [
    "Kitten1.jpg",
    "Kitten2.jpg",
    "Kitten3.jpg",
    "Kitten4.jpg",
    "Kitten5.jpg" 
] 

let imgs = document.getElementsByTagName('img');
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

for (imgElt of imgs){
    let index = random(0,4)
    // console.log(imgElt.src);
    let width = imgElt.clientHeight
    let height = imgElt.clientWidth
    if(width === 0) width = 300
    if(height > 500) height = 500
    console.log(width, height)
    imgElt.src = `https://placekitten.com/${width}/${height}`
}