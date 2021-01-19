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

// 2. ES6

let footballClubs3 = [
	{'name': 'Atalanta', 'pt': '0', 'fs': '0'},
	{'name': 'SS Lazio', 'pt': '0', 'fs': '0'},
	{'name': 'Sassuolo', 'pt': '0', 'fs': '0'},
	{'name': 'Verona', 'pt': '0', 'fs': '0'},
	{'name': 'Sampdoria', 'pt': '0', 'fs': '0'},
]
// console.log(footballClubs3)

// funzione genera numero random
function randomNum(min, max) {
	return Math.floor(Math.random() * (max + 1 - min) + min)
}

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