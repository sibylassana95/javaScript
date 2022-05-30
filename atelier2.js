var nombre1,nombre2,multiple;
nombre1=parseInt(prompt("Entrez le premier nombre"));
nombre2=parseInt(prompt("Entrez le second nombre"));
if(nombre1>0 && nombre2>0){
for(var i=nombre1*nombre2;i>=nombre1;i--){
if((i%nombre1==0)&&(i%nombre2==0)){
multiple=i;
}
}
alert("PPCM("+nombre1+";"+nombre2+")"+" = "+multiple);
}
