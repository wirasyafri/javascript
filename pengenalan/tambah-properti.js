function panggilObject(){
    var mobil = {
        type:'sedan',
        harga:'32132132123',
        warna:'putih',
        tahun:[2001,2002,2003]
    }
    mobil.merk = "hahah";
    mobil.harga =123;
    console.log(mobil);
    console.log(mobil.warna);
    console.log(mobil.tahun);
    console.log(mobil.tahun[0]);
    }
    
    panggilObject()