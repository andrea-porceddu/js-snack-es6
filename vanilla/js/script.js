// 1. ES5
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal (backtick `)

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
console.log(`La bici con peso minore ha un peso di ${pesoMin} kg`)

// destructuring


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

console.log(bici)
*/

// 1. ES6
const negozio2 = [
	{'nome': 'bici01', 'peso': '23',}, // 0
	{'nome': 'bici02', 'peso': '25', },	// 1
	{'nome': 'bici03', 'peso': '12', },	// 2
	{'nome': 'bici04', 'peso': '7', },	// 3
	{'nome': 'bici05', 'peso': '9', },	// 4
]

let pesoMin2 = 0
for (let i = 0; i < negozio2.length; i++) {
	for (let j = 0; j < negozio2.length; j++) {
		// console.log(negozio[i].peso)
		if (parseInt(negozio2[j].peso) < parseInt(negozio2[i].peso)) {
			pesoMin2 = parseInt(negozio2[j].peso)
		}
	}
}
// console.log(pesoMin2)
console.log(`La bici con peso minore ha un peso di ${pesoMin2} kg`)


// 2. ES5
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// array di oggetti squadre
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

// assegno a ogni oggetto di array squadre un numero random per keys pt e fs
for (var y = 0; y < footballClubs.length; y++) {
	var thisClub = footballClubs[y]
	thisClub.pt = randomNum(1, 200)
	thisClub.fs = randomNum(1, 200)
}

// creo array i cui elementi sono i nomi e i falli subiti di ogni oggetto di array footballClubs
var arr = []
for (var z = 0; z < footballClubs.length; z++) {
	var thisClub2 = footballClubs[z]
	arr.push({'name': thisClub2.name}, {'fs': thisClub2.fs})
}

// stampa
for (var e = 0; e < footballClubs.length; e++) {
	console.log(`Nome squadra: ${footballClubs[e].name} - Falli subiti: ${footballClubs[e].fs}`)
}


// 2. ES6

let footballClubs3 = [
	{'name': 'Atalanta', 'pt': '0', 'fs': '0'},
	{'name': 'SS Lazio', 'pt': '0', 'fs': '0'},
	{'name': 'Sassuolo', 'pt': '0', 'fs': '0'},
	{'name': 'Verona', 'pt': '0', 'fs': '0'},
	{'name': 'Sampdoria', 'pt': '0', 'fs': '0'},
]
// console.log(footballClubs3)

for (let x = 0; x < footballClubs3.length; x++) {
	let thisClub3 = footballClubs3[x]
	thisClub3.pt = randomNum(1, 200)
	thisClub3.fs = randomNum(1, 200)
}
// console.log(footballClubs3)

let newArr = []
for (let k = 0; k < footballClubs3.length; k++) {
	let thisClub3 = footballClubs3[k]
	newArr.push(
		{'name': thisClub3.name}, {'fs': thisClub3.fs}
	)
}

// stampa
for (var g = 0; g < footballClubs3.length; g++) {
	console.log(`Nome squadra: ${footballClubs3[g].name} - Falli subiti: ${footballClubs3[g].fs}`)
}