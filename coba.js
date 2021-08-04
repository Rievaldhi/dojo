// var a = parseInt(prompt('Bilangan kesatu'));
// var a = parseInt(prompt('Bilangan kedua'));
// c = a + b ;
// alert (document.write('hasil bil' + b));

// var nilai = parseInt(prompt("masukan nilai : "));
// var batas_nilai = (nilai >= 80) ? "Lulus" : "Tidak lulus";
// conslole.log (document.write(batas_nilai));

// var syarat1= 1 < 2;
// var syarat2= 1 > 2;
// document.writeln("syarat1 = ", syarat1, "<BR />");
// document.writeln("syarat2 = ", syarat2, "<BR />");
// document.writeln("!syarat1 = ", !syarat1, "<BR />");
// document.writeln("!syarat2 = ", !syarat2, "<BR />");
// document.writeln("syarat1 && syarat2 = ", syarat1 && syarat2, "<BR />");
// document.writeln("syarat1 && syarat2 = ", syarat1 || syarat2, "<BR />");

// var namaVar = "123";
// document.write(typeof(namaVar) + '<br>');
// namaVar = false;
// document.write(typeof(namaVar) +  '<br>');


// var namaPengunjung = prompt("Masukan nama Anda ", "Fill your nickname");
// document.write("Hallo " + namaPengunjung + " selamat datang " + "<br>");

// var konfirmasi = confirm("Leave or not ? ");
// var hasil = (konfirmasi == true) ? "Stay" : "Leave";
// document.write(hasil + "<br>");

// var nilai = parseInt(prompt("Masukan nilai anda "));

// if (nilai >= 10) {
//     document.write("Nilai anda " + nilai + " nilai memenuhi kkm");
// } else if (nilai < 10) {
//     document.write("Nilai anda " + nilai + " belum nilai memenuhi kkm");
// } else {
//     document.write("Masukan nilai dengan format yang benar");
// }

var nilaiKkm = parseInt(prompt("Masukan nilai Anda "));

switch(true){
    case (nilaiKkm >= 90) : 
        document.write("Nilai anda sangat baik " + nilaiKkm + " memenuhi KKM");
    break;
    case (nilaiKkm >= 79) :
        document.write("Nilai anda baik " + nilaiKkm + " memenuhi KKM");
    break;
    case (nilaiKkm >= 59) :
        document.write("Nilai anda kurang baik " + nilaiKkm + " tidak memenuhi KKM");
    break;
    case (nilaiKkm >= 0) :
        document.write("Perbaiki nilai anda  " + nilaiKkm + " tidak memenuhi KKM");
    break;
    default :
        document.write("Masukan nilai yang benar");
}

// var nilai = prompt("input nilai");
// var grade = "";

// switch(true){
//     case nilai < 90:
//         document.write (grade = "A");
//         break;
//     case nilai < 80:
//         grade = "B+";
//         break;
//     case nilai < 70:
//         grade = "B";
//         break;
//     case nilai < 60:
//         grade = "C+";
//         break;
//     case nilai < 50:
//         grade = "C";
//         break;
//     case nilai < 40:
//         grade = "D";
//         break;
//     case nilai < 30:
//         grade = "E";
//         break;
//     default:
//         grade = "F";
// }