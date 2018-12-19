villagePopulation = 0;
dominantRace = 'Human';
possibleRaces = [{
	race: 'Dwarf',
	maxAge: 350,
}, {
	race: 'Elf',
	maxAge: 750,
}, {
	race: 'Halfling',
	maxAge: 250,
}, {
	race: 'Human',
	maxAge: 85,
}, {
	race: 'Dragonborn',
	maxAge: 80,
}, {
	race: 'Gnome',
	maxAge: 500,
}, {
	race: 'Half-Elf',
	maxAge: 200,
}, {
	race: 'Half-Orc',
	maxAge: 75,
}, {
	race: 'Tiefling',
	maxAge: 100,
}];
possibleJobs = ['Hunter', 'Noble', 'Smith', 'Guard', 'Merchant', 'Craftsman', 'Tailor', 'Baker', 'Barman', 'Barmaid', 'Barber', 'Mason', 'Tanner', 'Furrier', 'Butcher', 'Fisher', 'Farmer', 'Bard', 'Adventurer', 'Prostitute', 'Laborour', 'Doctor', 'Nurse', 'Factory Worker', 'Stable Hand', 'Alchemist', 'Student', 'Monk', 'Priest']
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

function getRace(index = 'random') {
	if (index == 'random') {
		index = Math.floor(Math.random() * possibleRaces.length)
	}
	return possibleRaces[index]
}

function getJob(index = 'random') {
	if (index == 'random') {
		index = Math.floor(Math.random() * possibleJobs.length)
	}
	return possibleJobs[index]

}

function getGender(index = 'random') {
	genders = ['Male', 'Female']
	if (index == 'random') {
		index = Math.floor(Math.random() * genders.length)
	}
	return genders[index]
}

function randomBetween(min, max) {
	return Math.floor(Math.random() * max) + min
}

function newPerson(personIndex, gender = getGender(), familyName = getLastName(), parents = []) {
	race = getRace();
	data = {
		index: personIndex,
		gender: gender,
		name: (gender == 'Male' ? getMaleName() : getFemaleName()) + " " + familyName,
		race: race.race,
		age: randomBetween(0, race.maxAge),
		job: getJob(),
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
			child = newPerson(personIndex++, null, familyName);
			maxChildren--;
			people.push(child)
		}

	}
	while (personIndex < population) {
		people.push(newPerson(personIndex++));
	}

	return people
}