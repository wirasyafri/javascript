function tipedata(){
    var data ="jakarta"
    console.log(typeof(data))
    if(data === "jakarta"){
        return data
    }else{
        return "gagal"
    }
}
//sama dengannya 3
function tipedata2(){
    var lala = "2"
    console.log(typeof(lala))
    if(lala === 2){ 
        return "sukses"
    }else{
        return "gagal"
    }
}
//sama dengannya 2 (yang penting valuenya terlihat sama)
function tipedata3(){
    var lala = "2"
    console.log(typeof(lala))
    if(lala == 2){ 
        return "sukses"
    }else{
        return "gagal"
    }
}
console.log(tipedata());
console.log(tipedata2())
console.log(tipedata3())