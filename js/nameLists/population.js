villagePopulation = 0;
dominantRace = 'Human';
possibleRaces = ['Dwarf', 'Elf', 'Halfling', 'Human', 'Dragonborn', 'Gnome', 'Half-Elf', 'Half-Orc', 'Tiefling'];

class Person {

	constructor(data, parents = []) {
		this.data = data;
		this.parents = parents;
		if (parents.length == 2) {
			parents[0].children.push(this);
			parents[1].children.push(this);
		}
		this.children = [];
	}
}

function getGender(index = 'random') {
	genders = ['Male', 'Female']
	if (index == 'random') {
		index = Math.floor(Math.random() * genders.length)
	}
	return genders[index]
}

function newPerson(personIndex, gender = getGender(), familyName = getLastName(), parents = []) {
	data = {
		index: personIndex,
		gender: gender,
		name: (gender == 'Male' ? getMaleName() : getFemaleName()) + " " + familyName,
		race: 'Human',
		age: '25',
		job: 'Hunter',
		lng: 'Common',
		AC: 10,
		HP: 4,
		SP: 30,
		STR: 10,
		DEX: 10,
		CON: 10,
		INT: 10,
		WIS: 10,
		CHA: 10,
		inventory: [{
			type: 'money',
			value: '10 Silver'
		}, {
			type: 'armor',
			value: 'Helmet'
		}, {
			type: 'key',
			value: 'iron Key'
		}]

	}
	return new Person(data, parents)
}

var nonFamilyRelationshops = ['Secret Lover', 'Business Partner', 'Friend', 'Workmate', 'Colleague', 'Paramour', 'Neighbour', 'Rival', 'School Friend', 'Childhood Friend', 'Childhood Sweetheart', 'Nemesis', 'Distant Relative']

function populateTown(population = 100) {
	var personIndex = 0
	var people = [];
	for (var familyNum = 0; familyNum < population / 5; familyNum++) {
		var familyName = getLastName();
		var maxChildren = Math.floor(Math.random() * 3) + 1; //Between 1 and 3

		var mother = newPerson(personIndex++, 'Female', familyName);
		people.push(mother);
		var father = newPerson(personIndex++, 'Male', familyName);
		people.push(father);
		while (maxChildren > 0) {
			child = newPerson(personIndex++, null, familyName, [mother, father]);
			maxChildren--;
			people.push(child)
		}

	}
	while (personIndex < population) {
		people.push(newPerson(personIndex++));
	}

	return people
}