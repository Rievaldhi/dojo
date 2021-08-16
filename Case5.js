// var dataSiswa = [
//     ["Jojo", 55.5, "nilaiPeserta(55.5)"],
//     ["Andika", 70.1, "nilaiPeserta(70.1)"],
//     ["Alif", 19, "nilaiPeserta(19)"],
//     ["Vista", 102, "nilaiPeserta(102)"]
// ];

// for(var i = 0 ; i < dataSiswa.length ; i++){
//     for (var j = 0 ; j < dataSiswa[i].length ; j++){
//        document.write(dataSiswa[i][j] + "<br>") ;
//     }
//     //document.write(dataSiswa[i] + "<br>");
// }



// var nama = "andika'

// function cetakNama(sapa){
//     console.log('nama saya ' + sapa)
// } 

// function menyapa(sapa){
//     cetakNama(sapa);
//     console.log('selamat malam')
// }
// function addContact(id, refreshCallback) {
//     refreshCallback();
// }

// function refreshContactList() {
//     alert('Hello World');
// }

// addContact(1, refreshContactList);

// //Soal 1
// Buatlah sebuah fungsi dengan kemampuan sebagai berikut: 
// - apabila parameter ("luas permukaan",10,20,30) maka akan mengembalikan nilai luas permukaan kubus. 
// - apabila parameter ("volume",10,20,30) maka akan mengembalikan nilai volume. 

// //Soal 2
// Terdapat 5 data nama berikut ini: 
//     1. Budi 
//     2. Adi 
//     3. Gunawan 
//     4. Joko 
//     5. Bambang 
// Silahkan berikan kondisi ketika nama di atas diinputkan akan mengeluarkan output "Boleh masuk!" dan selain nama di atas akan mengeluarkan output "Tidak boleh masuk!". 

//soal 2
var input = prompt("Masukan nama anda : ");

if (input == "Budi"){
    document.write("Silahkan boleh masuk!")
} else if (input == "Adi"){
    document.write("Silahkan boleh masuk!")
} else if (input == "Gunawan"){
    document.write("Silahkan boleh masuk!")
} else if (input == "Joko"){
    document.write("Silahkan boleh masuk!")
} else if (input == "Bambang"){
    document.write("Silahkan boleh masuk!")
} else {
    document.write("Maaf tidak boleh masuk!")
}


//soal1
var menu = prompt("Silahkan pilih opsi perhitungan","1 - hitung luas permukaan, 2- hitung volume")

//menu
if(menu==1){
    
    document.write("Anda memilih hitung luas permukaan")
    luasPermukaan()

} else if(menu == 2){
    
    document.write("Anda memilih hitung volume")
    luasVolume()

}else{
    document.write("Masukan opsi pilihan yang tersedia")
}

function hLuasPermukaan (panjang,lebar,tinggi){
    var luas = 2 * (panjang*lebar) + 2 * (panjang*lebar) + 2 *(tinggi*lebar)
    return luas
}

function hVolume (panjang,lebar,tinggi){
    var volume = panjang*lebar*tinggi
    return volume
}

//
function luasPermukaan (){
    var panjang = parseInt(prompt("Masukan Panjang Permukaan Balok : "))
    var lebar = parseInt(prompt("Masukan Lebar Permukaan Balok : "))
    var tinggi = parseInt(prompt("Masukan Tinggi Permukaan Balok : "))
    var luas = hLuasPermukaan(panjang,lebar,tinggi)
    document.write("Luas Permukaan Balok adalah : " + luas) 
}

function luasVolume (){
    var panjang = parseInt(prompt("Masukan Panjang Balok : "))
    var lebar = parseInt(prompt("Masukan Lebar Balok : "))
    var tinggi = parseInt(prompt("Masukan Tinggi Balok : "))
    var volume = hVolume(panjang,lebar,tinggi)
    document.write("Volume Balok adalah : " + volume) 
}



var menu = prompt("Silahkan pilih menu yang tersedia", "1 - luas , 2 - volume")
if (menu==1){
    var panjangBalok = parseInt(prompt("Masukkan panjang Balok : "))
    var lebarBalok = parseInt(prompt("Masukkan lebar Balok : "))
    var tinggiBalok = parseInt(prompt("Masukkan tinggi Balok : "))
    var panjang1 = panjangBalok
    var lebar1 = lebarBalok
    var tinggi1 = tinggiBalok
    var luas = hLuasBalok(panjang1,lebar1,tinggi1)

    document.write("Luas Balok adalah : " + luas);
} else if (menu==2){
    var panjangBalok = parseInt(prompt("Masukkan panjang Balok : "))
    var lebarBalok = parseInt(prompt("Masukkan lebar Balok : "))
    var tinggiBalok = parseInt(prompt("Masukkan tinggi Balok : "))
    var panjang1 = panjangBalok
    var lebar1 = lebarBalok
    var tinggi1 = tinggiBalok
    var volume = hVolumeBalok(panjang1,lebar1,tinggi1)

    document.write("Volume Balok adalah : " + volume);
} else {
    document.write("Menu yang Anda pilih tidak valid" + "<br>")
}


var menu = prompt("Masukkan perhitungan yang ingin dicari : ", "1 - luas, 2 - volume");
var panjangBalok = parseInt(prompt("Masukkan panjang balok : "));
var lebarBalok = parseInt(prompt("Masukkan lebar balok : "));
var tinggiBalok = parseInt(prompt("Masukkan tinggi balok : "));
var hasil = balok(menu, panjangBalok, lebarBalok, tinggiBalok);
document.write("Hasilnya adalah " + hasil)

function balok(menu, panjang, lebar, tinggi) {
    var hasil
    if (menu == 1) {
        hasil = 2 * ((panjang * lebar) + (panjang * tinggi) + (lebar * tinggi))
        return hasil;
    } else if (menu == 2) {
        hasil = panjang * lebar * tinggi
        return hasil;
    } else {
        return ("Inputan Anda salah")
    }
}


