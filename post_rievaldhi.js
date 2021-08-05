// Esai soal A


var rakBuku = []

rakBuku.push("Buku 1 Koala Kumal" + "<br>");
rakBuku.push("Buku 2 Kambing betina" + "<br>");
rakBuku.push("Buku 3 Menghilang" + "<br>");
rakBuku.push("Buku 4 Marmut biru" + "<br>");
rakBuku.push("Buku 5 Cerita warkop" + "<br>");
document.write(rakBuku  + "<br>");

document.write("---------------------------------"  + "<br>");
document.write("<br>" + "Buku yang tersedia : "  + "<br>");
delete rakBuku[1];
delete rakBuku[3];
document.write(rakBuku + "<br>");

document.write("---------------------------------"  + "<br>");
document.write("<br>" + "Buku yang tersedia : "  + "<br>");
rakBuku.splice(1,0 , "Buku 2 Kambing betina" + "<br>");
rakBuku.splice(4,0 , "Buku 4 Marmut biru" + "<br>");
document.write(rakBuku  + "<br>");

document.write("---------------------------------"  + "<br>");
document.write("<br>" + "Buku yang tersedia : "  + "<br>");
rakBuku.splice(1,0 , "Buku 6 Coba baca dulu" + "<br>");
delete rakBuku[2];
document.write(rakBuku  + "<br>");