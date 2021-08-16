/*

Berapa berat badan ideal Anda?

Rumus menghitung
Pria: Berat badan ideal (kilogram) = [tinggi badan (sentimeter) - 100] - [(tinggi badan (sentimeter) - 100) x 10%]
Wanita: Berat badan ideal (kilogram) = [tinggi badan (sentimeter) - 100] - [(tinggi badan (sentimeter) - 100) x 15%]

nb = silahkan menggunakan input tinggi yang sama untuk menghitung kedua berat badan ideal.

Output:
Berat badan ideal pria untuk tinggi ... sentimeter adalah ... kilogram
Berat badan ideal wanita untuk tinggi ... sentimeter adalah ... kilogram 

*/

// var isi = confirm("Apakah anda seorang Pria ? ");

// if (isi) {
//     var tinggiP = prompt("Masukan tinggi anda ")
// } else {
//     var tinggiW = prompt("Masukan tinggi anda ")
// }

function beratBadanPria() {
    beratPria = (tinggi - 100)-((tinggi - 100)*10/100);
    return beratPria
}

function beratBadanWanita() {
    beratWanita = (tinggi - 100)-((tinggi - 100)*15/100);
    return beratWanita
}

var tinggi = parseInt(prompt("Masukan tinggi anda "));
document.write("Berat badan ideal pria untuk tinggi " + tinggi + " sentimeter adalah " + beratBadanPria() + " kilogram" + "<br>");
document.write("Berat badan ideal wanita untuk tinggi " + tinggi + " sentimeter adalah " + beratBadanWanita() + " kilogram" + "<br>");