

var slider_img = document.querySelector('.slider-img');
var images =['IMG_2509.jpeg', 'IMG_2512.jpeg', 'IMG_2515.jpeg', 'IMG_2516.jpeg', 'IMG_2518.jpeg', 'IMG_2520.jpeg'];
var i = 0;


function prev(){
if(i <= 0) i = image.length;
i--;
return setImg();
}

function next(){
    if(i >= image.length - 1) i = -1;
    i++;
    return setImg();
}
function setImg(){
    return slider_img.setAttribute('src', 'images/' + images[image])
}


    