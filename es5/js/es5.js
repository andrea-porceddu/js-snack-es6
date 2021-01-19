/* 1. ES5
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal (backtick `)*/

/* creo array negozio di oggetti
ogni oggetto ha proprietà nome e peso */
var negozio = [
	{
		'nome': 'bici01', 
		'peso': '12', 
	}, // 0
	{'nome': 'bici02', 'peso': '17', },	// 1
	{'nome': 'bici03', 'peso': '8', },	// 2
	{'nome': 'bici04', 'peso': '24', },	// 3
	{'nome': 'bici05', 'peso': '12', },	// 4
]
// console.log(negozio.length);

/* creo variabile inizializzata a 0 che mi servirà come variabile temporanea a cui assegnare il valore 
della key peso di ogni oggetto. pesoMin assume il valore minore confrontando il valore di peso di ogni oggetto */
var pesoMin = 0
for (var i = 0; i < negozio.length; i++) {
	for (var j = 0; j < negozio.length; j++) {
		// console.log(negozio[i].peso)
		if (parseInt(negozio[j].peso) < parseInt(negozio[i].peso)) {
			pesoMin = parseInt(negozio[j].peso)
		}
	}
}
// console.log(pesoMin)
// stampa utilizzando backtick e template literal
console.log(`La bici con peso minore ha un peso di ${pesoMin} kg`)

/* --- Ottavio correction --- io avevo messo apici su valori peso
// salvo l'oggetto in posizione 0 dell'array
var bici = negozio[0]
// console.log(negozio[0])

// parto da posizione 1 dell'array e confronto l'oggetto bici
for (var i = 1; i < negozio.length; i++) {
	if (negozio[i].peso < bici.peso) {
		bici = negozio[i]
	}
}
console.log(bici) */

/* 2. ES5
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo 
nomi e falli subiti e stampiamo tutto in console. */

// array footballClubs di oggetti
var footballClubs = [
	{'name': 'AC Milan', 'pt': '0', 'fs': '0'},
	{'name': 'Inter', 'pt': '0', 'fs': '0'},
	{'name': 'Napoli', 'pt': '0', 'fs': '0'},
	{'name': 'AS Roma', 'pt': '0', 'fs': '0'},
	{'name': 'Juventus', 'pt': '0', 'fs': '0'},
]
// console.log(footballClubs);

// funzione genera numero random
function randomNum(min, max) {
	return Math.floor(Math.random() * (max + 1 - min) + min)
}

/* scorro l'array di oggetti footballClubs e per ogni oggetto salvo in una variabile ogni singolo oggetto 
dell'array footballClubs e per ognuno di essi assegno alle keys pt e fs numeri random come valore */
for (var y = 0; y < footballClubs.length; y++) {
	var thisClub = footballClubs[y]
	thisClub.pt = randomNum(1, 200)
	thisClub.fs = randomNum(1, 200)
}

/* creo NUOVO array di oggetti e per la lunghezza dell'array di oggetti footballClubs salvo in una variabile 
ogni oggetto di footballClubs e per ognuno di essi pusho nel nuovo array il nome e i falli subiti di ogni 
oggetto dell'array footballClubs */
var arr = []
for (var z = 0; z < footballClubs.length; z++) {
	var thisClub2 = footballClubs[z]
	arr.push({'name': thisClub2.name}, {'fs': thisClub2.fs})
}

// stampa utilizzando backtick e template literal
for (var e = 0; e < footballClubs.length; e++) {
	console.log(`Nome squadra: ${footballClubs[e].name} - Falli subiti: ${footballClubs[e].fs}`)
}