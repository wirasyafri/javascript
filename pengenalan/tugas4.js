var syafri = 175,wira = 170,wicak=130;

function cektinggi(a,b,c){
if(a<b){
    if(a<c&&b<c){
        console.log(a,b,c);
    }else if(a<c&&b>c){
        console.log(a,c,b);
    }
}if(b<a){
    if(b<c&&a<c){
console.log(b,a,c);
    }else if(b<c&&a>c){
console.log(b,c,a);

    }
}
if(c<a){
    if(c<b&&b<a){
        console.log(c,b,a);
    }else{
        console.log(c,a,b);
    }
}
}

cektinggi(syafri,wira,wicak)
