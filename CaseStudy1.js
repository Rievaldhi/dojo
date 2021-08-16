var x = 5;
var y = 8.5;

//buatlah proses perhitungan penjumlahan, pengurangan, perkalian, dan pembagian dari kedua variabel di atas.

//penjumlahan 
hasil = x + y ;
document.write("Hasil penjumlahan dari " + x + " dengan " + y + " adalah = " + hasil + "<br>");

//pengurangan
hasil = x - y ;
document.write("Hasil pengurangan dari " + x + " dengan " + y + " adalah = " + hasil + "<br>");

//perkalian
hasil = x * y ;
document.write("Hasil perkalian dari " + x + " dengan " + y + " adalah = " + hasil + "<br>");

//pembagian
hasil = x / y ;
document.write("Hasil pembagian dari " + x + " dengan " + y + " adalah = " + hasil + "<br>");



var bil1 = parseInt(prompt("Masukan nilai ke 1 "));
var bil2 = parseInt(prompt("Masukan nilai ke 2 "));

function tambah() {
    document.write("Hasil penjumlaha keda bilangan  : " + (bil1 + bil2) + "<br>");
    
}

function kurang(x,y){
    var hasilKurang = x-y;
    document.write("Hasil pengurangan  " + hasilKurang + "<br>")
    
}