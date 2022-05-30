var nombre,compte;
compte=0;
nombre=parseInt(prompt("Entrer un nombre"));
if(nombre>0){
for(var i=1;i<=nombre;i++){
if(nombre%i==0){
compte=compte+1;
}
}
if(compte==2){
alert(nombre+" est un nombre premier.");
}
else{
alert(nombre+" n'est pas un nombre premier.");
}
}
else{
alert("Entrez un nombre positif non nul");
}
