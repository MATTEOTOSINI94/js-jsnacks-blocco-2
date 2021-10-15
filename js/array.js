
// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi all’array che ha meno elementi
//  fino a quando ne avrà tanti quanti l’altro.


const array1 = [15, 2, 7];
const array2 = [5];

arrayGrande = array1
arrayPiccolo = array2


const differenza = arrayGrande.length - arrayPiccolo.length
for (let x = 0; x < differenza; x++) {
    const element = differenza[x];

    arrayPiccolo.push(Math.ceil(Math.random() * 100))
}

console.log(arrayPiccolo)

// if (array1.length === array2.length){

// }
// else if (array1.length === array2.length){

// }