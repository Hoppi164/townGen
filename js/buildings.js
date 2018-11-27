var villageClass = 'middleClass';
var buildingTypes = [{
	type: 'Tavern',
	variants: ['Tavern', 'Inn', 'Brothel', 'Lodge', 'Hostel'],
	percentageOfTown: 15,
	names: ['The Busty Noble', 'The winking rabbit', 'Hostel Chimera', 'Elvish Bedroom', 'High Comfort', 'The lovely lady', 'The Raunchy Goblin', 'The soverign goblin', 'The Lucky Hippo', 'The wet hawk', 'Queens Comfort', 'Kings Comfort', 'The gentlemans axehead']
}, {
	type: 'Shop',
	variants: ['Shop', 'Blacksmith', 'Barber', 'Stonemason', 'Tannery', 'Furrier', 'Butcher', 'Book store', 'Travelling Merchant', 'Merchant', 'Marketplace', 'General Store', 'Carpenter', 'Tailor', 'Cobbler', 'Bakery', 'Fishery', 'Sweets Merchant', 'Music Store'],
	percentageOfTown: 15
}, {
	type: 'House',
	variants: ['House', 'Shack', 'Home', 'Hut', 'Shelter', 'Farmhouse', 'Homeless Shelter', 'Shanty', 'Abode', 'Cottage', 'Villa', 'Bungalow', 'Manor', 'Mansion'],
	percentageOfTown: 40
}, {
	type: 'Church',
	variants: ['Church', 'Monastery', 'Shrine', 'Altar', 'Temple'],
	percentageOfTown: 5
}, {
	type: 'Storage Yard',
	variants: ['Storage Yard', 'Armory', 'Barn', 'Stables', 'Granary', 'Cattle Barn', 'Warehouse'],
	percentageOfTown: 5
}, {
	type: 'Factory',
	variants: ['Factory', 'Lumber Mill', 'Grain Mill', 'Woodcutter', 'Water Well', 'Oil Well', 'Mine'],
	percentageOfTown: 5
}, {
	type: 'Barracks',
	variants: ['Guard Tower', 'Watch Tower', 'Barracks', 'Guard House', 'Gate house'],
	percentageOfTown: 5
}, {
	type: 'Medical Office',
	variants: ['Medical Office', 'Doctors office', 'Alchemist', 'Apothecary', 'Potions Merchant'],
	percentageOfTown: 5
}, {
	type: 'other',
	variants: ['Theater', 'School', 'University', 'College', 'Prison'],
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
	var index = 0;
	for (var i = 0; i < buildingTypes.length; i++) {
		var numberOfThisType = numBuildings * (buildingTypes[i].percentageOfTown / 100);
		for (var j = 0; j < numberOfThisType; j++) {
			var thisBuildingAliases = buildingTypes[i].variants
			var thisBuildingType = thisBuildingAliases[Math.floor(Math.random() * thisBuildingAliases.length)];
			var thisBuildingName = null;
			if (typeof buildingTypes[i].names !== 'undefined') {
				var thisBuildingName = buildingTypes[i].names[Math.floor(Math.random() * buildingTypes[i].names.length)];
			}
			var thisBuilding = {
				type: thisBuildingType,
				name: thisBuildingName,
				aliases: thisBuildingAliases,
				index: index
			}
			if (thisBuilding.aliases.includes("Tavern")) {
				thisBuilding.inventory = items.accommodation;
				thisBuilding.inventory = thisBuilding.inventory.concat(items.drink);
			}
			townBuildings.push(thisBuilding);
			index++;
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