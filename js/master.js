// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo.
//  Si potrebbe fare saltando un if o comunque accorpando porzioni di codice.
//  Occhio solo a non saltare troppi passaggi logici che per qualcuno sono ostici.

// faccio inserire un numero all'utente
const numberUser = Math.ceil(Math.random() * 100)

if(numberUser % 2 ===0){
    console.log("numero pari")
} else{
    console.log("numero dispari")
    console.log(numberUser + 1)
}
