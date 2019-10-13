var output=1;
var penambah=2;
function wira(){
    for(i=0;i<=55;i++){

        console.log(output);
        output=output+penambah;
        penambah++;
        if(output>=60){
            break;
        }
    }

}

wira()