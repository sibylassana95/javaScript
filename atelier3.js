var nombre1,nombre2,diviseur;
nombre1=parseInt(prompt("Entrez le premier nombre"));
nombre2=parseInt(prompt("Entrez le second nombre"));
if(nombre1>0 && nombre2>0){
for(var i=1;i<=nombre1;i++){
if((nombre1%i==0)&&(nombre2%i==0)){
diviseur=i;
}
}
alert("PGCD("+nombre1+";"+nombre2+")"+" = "+diviseur);
}
