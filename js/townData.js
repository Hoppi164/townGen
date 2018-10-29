var app = new Vue({
	el: '#testDiv',
	data: {
		message: 'Hello Vue!'
	}
})

var townData = {
		name: 'Esphille Village',
		people: [{
			name: 'Tom Timmy Bloggs',
			race: 'Human',
			age: '25',
			job: 'Hunter',
			language: 'Common',
			AC: 10,
			HP: 4,
			SP: 30,
			STR: 10,
			DEX: 10,
			CON: 10,
			INT: 10,
			WIS: 10,
			CHA: 10,
			inventory: ['10 Copper', 'Leather Armor', 'Brass Key']
		}],
		buildings: ['Bakery', 'Hunting Lodge', 'Chapel', 'Bank']
	}
	// alert(townData.people[0])