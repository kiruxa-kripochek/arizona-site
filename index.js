function changeImage() {
    var image = document.getElementById('arizona-logo');

    if (image.src.match("img/arizona-logo.png")) {
        image.src = "img/old-arizonalogo.png";
    } else {
        image.src = "img/arizona-logo.png";
    }
}