function panggilSplice(){
    var kota =["jakarta","medan","malang","surabaya"]
    console.log(kota);
    //parameter pertama untuk menghitung posisi index
    //parameter kedua untuk menentukan berapa jumlah data array yang akan dihapus
    kota.splice(2,0,"sumenep")
    console.log(kota);
    //bisa tanpa parameter ketiga sehingga fungsinya untuk menghapus
    kota.splice(2,1)
    console.log(kota);
    
}
panggilSplice()