// button 1 ubah warna background

const btn1 = document.querySelector("#c #buttonSatu");
var semuaP = document.querySelectorAll("p");

btn1.addEventListener("click" , function () {

    for (var i = 0; i < semuaP.length; i++){
        semuaP[i].style.backgroundColor = "grey";
    }


})

const btn2 = document.querySelector("#c #buttonDua");
btn2.addEventListener("click" , function () {

    btn2.style.backgroundColor = "Yellow"
    btn2.style.color = "blue"

})

const btn3 = document.querySelector("#c #buttonTiga");
var semuaP = document.querySelectorAll("p");

btn3.addEventListener("click" , function () {

    for (var i = 0; i < semuaP.length; i++){
        semuaP[i].style.color = "green";
        semuaP[i].style.fontFamily= "Times New Roman";
        
    }

})

const btn4 = document.querySelector("#c #buttonEmpat");
var semuaP = document.querySelectorAll("p");

btn4.addEventListener("click" , function () {

    for (var i = 0; i < semuaP.length; i++){

        semuaP[i].style.fontSize= "x-large";
        
    }

})

const btn5 = document.querySelector("#c #buttonLima");
btn5.addEventListener("click" , function () {

    container.style.backgroundColor = "pink"

})

const btn6 = document.querySelector("#c #buttonEnam");
btn6.addEventListener("click" , function () {

var h2 = document.createElement("h2")
var inputh2 = document.createTextNode("selamat datang di dojobox.id tag <p> diubah menjadi tag <h2>")
h2.appendChild(inputh2)

var sectionA = document.getElementById("a")
var p1 = sectionA.getElementsByClassName("p1")[0]

sectionA.replaceChild(h2,p1)
})

const btn7 = document.querySelector("#c #buttonTujuh");
btn7.addEventListener("click" , function () {

const listBaru = document.createElement("li")
const isiList = document.createTextNode("Rie")
listBaru.appendChild(isiList)

const listSementara = document.querySelector("#b ul")
const listTarget = listSementara.querySelector("li:nth-child(4)")
listSementara.insertBefore(listBaru,listTarget)

const listHapus = document.querySelector("li:nth-child(1)")

listHapus.parentElement.removeChild(listHapus);

})

const btn8 = document.querySelector("#c #buttonDelapan");
btn8.addEventListener("click" , function () {

    document.getElementById("judul").innerHTML = "Post Test";

})

const btn9 = document.querySelector("#c #buttonSembilan");
btn9.addEventListener("click" , function () {

    const hapusLink = document.querySelector("#a a");
    hapusLink.remove();


})

const btn10 = document.querySelector("#c #buttonSepuluh");
btn10.addEventListener("click" , function () {

    const listHapus1 = document.querySelector("#a a")
    listHapus1.parentElement.removeChild(listHapus1);

    const listBaru1 = document.createElement("a")
    const isiList1 = document.createTextNode("link ke github Rie")
    listBaru1.appendChild(isiList1);
    const listSementara1 = document.querySelector("#c ul")
    const listTarget1 = listSementara1.querySelector("li:nth-child(1)")
    listSementara1.insertBefore(listBaru1,listTarget1)

    document.querySelector("#c a").href = "http://www.cnn.com/";

})