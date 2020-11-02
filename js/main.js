
$(document).ready(function(){
// JSnack 1
// Creare un array di oggetti
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore con handlebars.
var biciclette=[
    {
        nome:'pippo',
        perso:10
    },
    {
        nome:'nicola',
        perso:33
    },
    {
        nome:'luca',
        perso:15
    },
];

// handelbars----------
var source=$('#bike-B').html();
var template = Handlebars.compile(source);


var confrontoBici=biciclette[0];

for(var i=1; i<biciclette.length; i++){
    if(biciclette[i].peso<confrontoBici.peso){
    confrontoBici=biciclette[i]
    }
}
console.log(confrontoBici)
var loadin={
    nome:confrontoBici.nome,
    peso:confrontoBici.peso,

}

var html=template(loadin);
$('.container').append(html)

// JSnack 2
// Partendo da un array di nomi (scelti da voi) creiamo un nuovo array.
// Chiedere due numeri all'utente per definire la posizione iniziale e finale dal quale estrarre i valori dall'array originale.
// Il nuovo array deve contenere gli elementi dell'array originale aventi la posizione (indice array)  compresa tra i due numeri inseriti dall'utente.
var nomi=['luigi', 'marco', 'pippo', 'massimo'];
var tot=nomi.length-1;
var Narray=[]
var domUtente=parseInt(prompt('inserisici 2 numeri '))
var domUtente2=parseInt(prompt('inserisici 2 numeri '))
for(var i=0; i<nomi.length; i++){
    if (domUtente<=i && domUtente2>=i){
        Narray.push(nomi[i])
    }
}
console.log(nomi)
console.log(Narray)

// JSnack 3
// Creiamo un array di oggetti (scelti da voi)
// Creiamo una copia da questo array di partenza e aggiungiamo ai singoli elementi una nuova proprietà position che contiene una lettera casuale.
// Non dobbiamo modificare l'array iniziale.

}) //fine READY----------------------------