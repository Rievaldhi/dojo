function nilaiPeserta (nilai) {
    /* 
        Buat proses seleksi kondisi untuk melakukan klasifikasi nilai peserta dengan rincian:
        A = 80 - 100
        B = 60 - 80
        C = 40 - 60
        D = 20 - 40
        E = >20
    */

        switch(true){
            case (nilai >= 80 && nilai <= 100) : 
            return "A";
            //document.write("Grade anda A dengan nilai " + nilai + " pertahankan" + "<br>");
            break;
            case (nilai >= 60 && nilai <= 79) :
                return "B";
            //document.write("Grade anda B dengan nilai " + nilai + " tingkatkan" + "<br>");
            break;
            case (nilai >= 40 && nilai <= 59) :
                return "C";
            //document.write("Grade anda C dengan nilai " + nilai + " tingkatkan" + "<br>");
            break;
            case (nilai >= 20 && nilai <= 39) :
                return "D";
            //document.write("Grade anda D dengan nilai " + nilai + " tingkatkan" + "<br>");
            break;
            case (nilai >= 0 && nilai <= 19) :
               return "E";
            // document.write("Grade anda E dengan nilai " + nilai + " tingkatkan" + "<br>");
            break;
            default :
                return " Inputan anda salah"
                //document.write("Inputan anda salah" + "<br>");
        }
        
}

var dataSiswa = [
    ["Jojo", 55.5, nilaiPeserta(55.5)],
    ["Andika", 70.1, nilaiPeserta(70.1)],
    ["Alif", 19, nilaiPeserta(19)],
    ["Vista", 102, nilaiPeserta(102)]
];

//Silahkan gunakan proses perulangan untuk mengambil semua data array dataSiswa dan tampilkan outputnya.

for (var i = 0; i < dataSiswa.length; i++){

    var nama = dataSiswa[i][0];
    var nilaiP = dataSiswa[i][1];
    var grade = dataSiswa[i][2];

    document.write("Nilai untuk siswa yang bernama " + nama + " dengan nilai " + nilaiP + " mendapat keterangan " + grade + "<br>")
}