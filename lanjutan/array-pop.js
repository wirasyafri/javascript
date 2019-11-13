//menghapus data terujung diakhir
function panggilPop(){
    var kota = ["jakarta","bandung","malang","surabaya"]
console.log(kota);
console.log("=========");
var kota2 = kota.pop();
console.log(kota2);
// kota.pop() 
kota = kota.pop();  
return kota
}
console.log(panggilPop());
