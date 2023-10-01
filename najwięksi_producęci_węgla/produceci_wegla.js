const miejsce1 = document.querySelector(".miejsce1");
const miejsce2 = document.querySelector(".miejsce2");
const miejsce3 = document.querySelector(".miejsce3");
const content1 = document.querySelector("#content1");
const content2 = document.querySelector("#content2");
const content3 = document.querySelector("#content3");

miejsce1.addEventListener('click', miejsce1Info);
miejsce2.addEventListener('click', miejsce2Info);
miejsce3.addEventListener('click', miejsce3Info);

function miejsce1Info() {
    content1.style.display = "block";
    content2.style.display = "none";
    content3.style.display = "none";
}

function miejsce2Info() {
    content2.style.display = "block";
    content1.style.display = "none";
    content3.style.display = "none";
}

function miejsce3Info() {
    content3.style.display = "block";
    content2.style.display = "none";
    content1.style.display = "none";
}
