const switchButton = document.getElementById("switch-label");

//Nav

const sn1 = document.getElementById("s-n-1");
const en1 = document.getElementById("e-n-1");
const checkboxresponsive = document.getElementById("checkbox-responsive");

const menuIcon = document.getElementById("menu-icon");
const crossIcon = document.getElementById("cross-icon");

//Main 2

if (document.getElementById("s-1") != null) {
    var s1 = document.getElementById("s-1");
    var s2 = document.getElementById("s-2");

    var e1 = document.getElementById("e-1");
    var e2 = document.getElementById("e-2");
}

//Footer

const sf1 = document.getElementById("s-f-1");
const ef1 = document.getElementById("e-f-1");

const sf2 = document.getElementById("s-f-2");
const ef2 = document.getElementById("e-f-2");

//---Nosotros

var s2m1 = document.getElementById("2s-m-1");
var e2m1 = document.getElementById("2e-m-1");

var s2m2 = document.getElementById("2s-m-2");
var e2m2 = document.getElementById("2e-m-2");

var s2m3 = document.getElementById("2s-m-3");
var e2m3 = document.getElementById("2e-m-3");

var s2v1 = document.getElementById("2s-v-1");
var e2v1 = document.getElementById("2e-v-1");

var s2v2 = document.getElementById("2s-v-2");
var e2v2 = document.getElementById("2e-v-2");

var s2i1 = document.getElementById("2s-i-1");
var e2i1 = document.getElementById("2e-i-1");

var s2i2 = document.getElementById("2s-i-2");
var e2i2 = document.getElementById("2e-i-2");

var s2i3 = document.getElementById("2s-i-3");
var e2i3 = document.getElementById("2e-i-3");

var s2i4 = document.getElementById("2s-i-4");
var e2i4 = document.getElementById("2e-i-4");

var s2i5 = document.getElementById("2s-i-5");
var e2i5 = document.getElementById("2e-i-5");

var s2s1 = document.getElementById("2s-s-1");
var e2s1 = document.getElementById("2e-s-1");

var s2s2 = document.getElementById("2s-s-2");
var e2s2 = document.getElementById("2e-s-2");

//----------------------------Code

switchButton.checked = false;

switchButton.addEventListener("click", function () {
    if (switchButton.checked) {
        sn1.classList.add("hidden");
        en1.classList.remove("hidden");

        sf1.classList.add("hidden");
        ef1.classList.remove("hidden");

        sf2.classList.add("hidden");
        ef2.classList.remove("hidden");
    } else {
        sn1.classList.remove("hidden");
        en1.classList.add("hidden");
        sf1.classList.remove("hidden");
        ef1.classList.add("hidden");

        sf2.classList.remove("hidden");
        ef2.classList.add("hidden");
    }
});

checkboxresponsive.checked = false;

checkboxresponsive.addEventListener("click", function () {
    if (checkboxresponsive.checked) {
        sn1.classList.add("checked");
        en1.classList.add("checked");

        menuIcon.classList.add("hidden");
        crossIcon.classList.remove("hidden");
    }else{
        sn1.classList.remove("checked");
        en1.classList.remove("checked");

        menuIcon.classList.remove("hidden");
        crossIcon.classList.add("hidden");
    }
});

//Inicio

if (document.getElementById("s-1") != null) {
    switchButton.addEventListener("click", function () {
        if (switchButton.checked) {
            s1.classList.add("hidden");
            s2.classList.add("hidden");

            e1.classList.remove("hidden");
            e2.classList.remove("hidden");
        } else {
            s1.classList.remove("hidden");
            s2.classList.remove("hidden");

            e1.classList.add("hidden");
            e2.classList.add("hidden");
        }
    });
}

//nosotros

if (document.getElementById("2s-m-1") != null) {
    switchButton.addEventListener("click", function () {
        if (switchButton.checked) {
            s2m1.classList.add("hidden");
            s2m2.classList.add("hidden");
            s2m3.classList.add("hidden");

            s2v1.classList.add("hidden");
            s2v2.classList.add("hidden");

            s2i1.classList.add("hidden");
            s2i2.classList.add("hidden");
            s2i3.classList.add("hidden");
            s2i4.classList.add("hidden");
            s2i5.classList.add("hidden");

            /*s2s1.classList.add("hidden");
            s2s2.classList.add("hidden");*/

            e2m1.classList.remove("hidden");
            e2m2.classList.remove("hidden");
            e2m3.classList.remove("hidden");

            e2v1.classList.remove("hidden");
            e2v2.classList.remove("hidden");

            e2i1.classList.remove("hidden");
            e2i2.classList.remove("hidden");
            e2i3.classList.remove("hidden");
            e2i4.classList.remove("hidden");
            e2i5.classList.remove("hidden");

            /*e2s1.classList.remove("hidden");
            e2s2.classList.remove("hidden");*/
        } else {
            s2m1.classList.remove("hidden");
            s2m2.classList.remove("hidden");
            s2m3.classList.remove("hidden");

            s2v1.classList.remove("hidden");
            s2v2.classList.remove("hidden");

            s2i1.classList.remove("hidden");
            s2i2.classList.remove("hidden");
            s2i3.classList.remove("hidden");
            s2i4.classList.remove("hidden");
            s2i5.classList.remove("hidden");

            /*s2s1.classList.remove("hidden");
            s2s2.classList.remove("hidden");*/

            e2m1.classList.add("hidden");
            e2m2.classList.add("hidden");
            e2m3.classList.add("hidden");

            e2v1.classList.add("hidden");
            e2v2.classList.add("hidden");

            e2i1.classList.add("hidden");
            e2i2.classList.add("hidden");
            e2i3.classList.add("hidden");
            e2i4.classList.add("hidden");
            e2i5.classList.add("hidden");

            /*e2s1.classList.add("hidden");
            e2s2.classList.add("hidden");*/
        }
    });
}

//Productos

if (document.getElementById("3s-p-1") != null) {
    const s3p1 = document.getElementById("3s-p-1");
    const e3p1 = document.getElementById("3e-p-1");

    const s3p2 = document.getElementById("3s-p-2");
    const e3p2 = document.getElementById("3e-p-2");

    const s3v1 = document.getElementById("3s-v-1");
    const e3v1 = document.getElementById("3e-v-1");

    const s3v2 = document.getElementById("3s-v-2");
    const e3v2 = document.getElementById("3e-v-2");



    switchButton.addEventListener("click", function () {
        if (switchButton.checked) {
            s3p1.classList.add("hidden");
            s3p2.classList.add("hidden");

            s3v1.classList.add("hidden");
            s3v2.classList.add("hidden");

            e3p1.classList.remove("hidden");
            e3p2.classList.remove("hidden");

            e3v1.classList.remove("hidden");
            e3v2.classList.remove("hidden");
        } else {
            s3p1.classList.remove("hidden");
            s3p2.classList.remove("hidden");

            s3v1.classList.remove("hidden");
            s3v2.classList.remove("hidden");

            e3p1.classList.add("hidden");
            e3p2.classList.add("hidden");

            e3v1.classList.add("hidden");
            e3v2.classList.add("hidden");
        }
    });
}

const carrouselImg = document.querySelector(".producto-images");
const carrouselBtn = document.querySelectorAll(".punto");

if (document.getElementById("3s-p-1") != null) {
    const carrouselImg = document.querySelector(".producto-images");
    const carrouselBtn = document.querySelectorAll(".punto");

    let currentIndex = 0;
    const totalImages = carrouselBtn.length;
    let autoSlideInterval;

    // Función para cambiar la imagen del carrusel
    function changeImage(index) {
        let posicion = index;
        let operacion = posicion * -(100 / totalImages);

        carrouselImg.style.transform = `translateX(${operacion}%)`;

        carrouselBtn.forEach((cadaPunto, i) => {
            carrouselBtn[i].classList.remove("active");
        });
        carrouselBtn[posicion].classList.add("active");
    }

    // Función para iniciar el intervalo automático
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % totalImages; // Incrementa el índice y reinicia si llega al final
            changeImage(currentIndex);
        }, 5000);
    }

    // Evento de click en los puntos del carrusel

    carrouselBtn.forEach((cadaPunto, i) => {
        carrouselBtn[i].addEventListener("click", () => {
            currentIndex = i;
            changeImage(currentIndex);

            // Reiniciar el temporizador
            clearInterval(autoSlideInterval);
            startAutoSlide();
        });
    });


    // Iniciar el intervalo automático al cargar la página
    startAutoSlide();
}
