function changeImgAndColor(imageName, color){
    const circle = document.querySelector('.circle');
    // const button = document.querySelector('.call-to-action');
    // button.style.background = color;
    circle.style.background = color;
    document.querySelector('.hero-img').src = imageName 

}
