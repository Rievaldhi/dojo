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
            case (nilai >= 80 ) : 
                document.write("Grade anda A dengan nilai " + nilai + " pertahankan");
            break;
            case (nilai >= 60) :
                document.write("Grade anda B dengan nilai " + nilai + " tingkatkan");
            break;
            case (nilai >= 40) :
                document.write("Grade anda C dengan nilai " + nilai + " tingkatkan");
            break;
            case (nilai >= 20) :
                document.write("Grade anda D dengan nilai " + nilai + " tingkatkan");
            break;
            default :
                document.write("Grade anda E dengan nilai " + nilai + " tingkatkan");
        }
        
}
document.write("Nilai peserta pertama ")
nilaiPeserta(5);
document.write("<br>"+"Nilai peserta kedua ")
nilaiPeserta(60.5);
document.write("<br>"+"Nilai peserta ketiga ")
nilaiPeserta(39.5);
document.write("<br>"+"Nilai peserta keempat ")
nilaiPeserta(50);
document.write("<br>"+"Nilai peserta kelima ")
nilaiPeserta(101);

/*
    Silahkan panggil fungsi nilaiPeserta dengan parameter beberapa nilai: 
    1. 5
    2. 60.5
    3. 39.5
    4. 50
    5. 101
*/