var villageClass = 'middleClass';
var buildingTypes = [{
	type: 'House',
	variants: ['House', 'Shack', 'Home', 'Hut', 'Shelter', 'Farmhouse', 'Homeless Shelter', 'Shanty', 'Abode', 'Cottage', 'Villa', 'Bungalow', 'Manor', 'Mansion'],
	percentageOfTown: 40
}, {
	type: 'Tavern',
	variants: ['Tavern', 'Inn', 'Brothel', 'Lodge', 'Hostel'],
	percentageOfTown: 15,
	names: ['The Busty Noble', 'The winking rabbit', 'Hostel Chimera', 'Elvish Bedroom', 'High Comfort', 'The lovely lady', 'The Raunchy Goblin', 'The soverign goblin', 'The Lucky Hippo', 'The wet hawk', 'Queens Comfort', 'Kings Comfort', 'The gentlemans axehead']
}, {
	type: 'Shop',
	variants: ['Blacksmith', 'Barber', 'Stonemason', 'Tannery', 'Furrier', 'Butcher', 'Book store', 'Travelling Merchant', 'Merchant', 'Marketplace', 'General Store', 'Carpenter', 'Tailor', 'Cobbler', 'Bakery', 'Fishery', 'Sweets Merchant', 'Music Store'],
	percentageOfTown: 15
}, {
	type: 'Church',
	variants: ['Church', 'Monastery', 'Shrine', 'Altar', 'Temple'],
	percentageOfTown: 5
}, {
	type: 'Storage Yard',
	variants: ['Armory', 'Barn', 'Stables', 'Granary', 'Cattle Barn', 'Warehouse'],
	percentageOfTown: 5
}, {
	type: 'Factory',
	variants: ['Lumber Mill', 'Grain Mill', 'Woodcutter', 'Water Well', 'Oil Well', 'Mine'],
	percentageOfTown: 5
}, {
	type: 'Defence',
	variants: ['Guard Tower', 'Watch Tower', 'Barracks', 'Guard House', 'Gate house'],
	percentageOfTown: 5
}, {
	type: 'medical',
	variants: ['Doctors office', 'Alchemist', 'Apothecary', 'Potions Merchant'],
	percentageOfTown: 5
}, {
	type: 'other',
	variants: ['Theater', 'School', 'University', 'Prison'],
	percentageOfTown: 5
}]



// {
// 	type: 'Tavern',
// 	name: 'The Winking Skeever',
// 	inventory: [{
// 		type: 'money',
// 		value: '95 Silver'
// 	}, {
// 		type: 'food',
// 		value: 'Venison'
// 	}, {
// 		type: 'food',
// 		value: 'Rabbit'
// 	}],
// 	description: 'A rawdy Inn, bustling with drunkards and nobodies.'
// }


function getTownBuildings(numBuildings) {
	townBuildings = [];
	for (var i = 0; i < buildingTypes; i++) {
		var numberOfThisType = numBuildings * (buildingTypes[i].percentageOfTown / 100);
		for (var j = 0; j < numberOfThisType; j++) {
			var thisBuildingAliases = building[i].variants
			var thisBuildingType = thisBuildingAliases[Math.floor(Math.random() * thisBuildingAliases.length)];
			var thisBuildingName = buildingTypes[i].names[Math.floor(Math.random() * buildingTypes[i].names.length)];
			var thisBuilding = {
				type: thisBuildingType,
				name: thisBuildingName,
				aliases: thisBuildingAliases
			}
			townBuildings.push(thisBuilding);
		}
	}
	return townBuildings;
}


function getRandomBuilding() {
	// var randomInventory getBuildingInv();
	var randomBuilding = buildingTypes[Math.floor(Math.random() * buildingTypes.length)];
	var newbuilding = {
		type: randomBuilding.type,
		aka: randomBuilding.aka

	}
	return newbuilding;
}