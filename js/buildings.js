var villageClass = 'middleClass';
var buildingTypes = [{
	type: 'Tavern',
	variants: ['Tavern', 'Inn', 'Brothel', 'Lodge', 'Hostel'],
	percentageOfTown: 15,
	names: ['The Busty Noble', 'The winking rabbit', 'Hostel Chimera', 'Elvish Bedroom', 'High Comfort', 'The lovely lady', 'The Raunchy Goblin', 'The soverign goblin', 'The Lucky Hippo', 'The wet hawk', 'Queens Comfort', 'Kings Comfort', 'The gentlemans axehead']
}, {
	type: 'Shop',
	variants: ['Shop', 'Blacksmith', 'Barber', 'Stonemason', 'Tannery', 'Furrier', 'Butcher', 'Book store', 'Travelling Merchant', 'Merchant', 'Marketplace', 'General Store', 'Carpenter', 'Tailor', 'Bakery', 'Fishery', 'Sweets Merchant', 'Music Store'],
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
				index: index,
				inventory: []
			}
			if (thisBuilding.aliases.includes("Tavern")) {
				thisBuilding.inventory = thisBuilding.inventory.concat(items.accommodation);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.drink);
				thisBuilding.inventory = thisBuilding.inventory.concat(getRandomMeal());
				thisBuilding.inventory = thisBuilding.inventory.concat(getRandomMeal());
				thisBuilding.inventory = thisBuilding.inventory.concat(getRandomMeal());
				thisBuilding.inventory = thisBuilding.inventory.concat(getRandomMeal());
			}
			if (thisBuilding.type == 'Brothel') {
				thisBuilding.inventory = thisBuilding.inventory.concat(items.prostitution);
			}
			if (thisBuilding.type == 'Sweets Merchant') {
				thisBuilding.inventory = thisBuilding.inventory.concat(items.sweets);
			}
			if (thisBuilding.type == 'Tailor') {
				thisBuilding.inventory = thisBuilding.inventory.concat(items.clothes);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.armor.paddedArmor);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.armor.leatherArmor);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.armor.hideArmor);
			}
			if (thisBuilding.type == 'Tannery') {
				thisBuilding.inventory = thisBuilding.inventory.concat(items.armor.paddedArmor);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.armor.leatherArmor);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.armor.hideArmor);
			}
			if (thisBuilding.type == 'Blacksmith') {
				thisBuilding.inventory = thisBuilding.inventory.concat(Object.values(items.armor));
			}
			if (thisBuilding.type == 'Furrier') {
				thisBuilding.inventory = thisBuilding.inventory.concat(items.armor.hideArmor);
			}
			if (thisBuilding.type == 'Barber') {
				thisBuilding.inventory = thisBuilding.inventory.concat(items.otherServices.haircut);
			}
			if (thisBuilding.type == 'Music Store') {
				thisBuilding.inventory = thisBuilding.inventory.concat(Object.values(items.musicalIntruments));
			}
			if (thisBuilding.type == 'Stonemason') {
				thisBuilding.inventory = thisBuilding.inventory.concat(Object.values(items.tools));
			}
			if (thisBuilding.type == 'Carpenter') {
				thisBuilding.inventory = thisBuilding.inventory.concat(Object.values(items.tools));
			}
			if (thisBuilding.type == 'Butcher') {
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Bacon);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Ham);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Beefsteak);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Smokedsausage);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Meatballs);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Porkchop);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Chickenhalf);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Legofmutton);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Rabbitstew);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Sausage);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Lambstew);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Wholeduck);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Porkliver);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Lambchop);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Dogstew);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Catcutlet);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Monkeybrain);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Owlbearchop);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Chickeneggs);
			}
			if (thisBuilding.type == 'Fishery') {
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Broiledcatfish);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Stuffedtrout);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Friedperch);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Wholeduck);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Froglegs);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Octopus);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Gianttoadtongue);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Sharkfilet);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Duckeggs);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Gooseeggs);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Seaweed);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Millet);
			}
			if (thisBuilding.type == 'Bakery') {
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Coarseryebread);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Nutbread);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Flatbread);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Oatmeal);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Spicebread);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Plumpudding);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Woodelvencakes);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Cremebrulee);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Honeycake);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Plaincake);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Walnutcake);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Fruitcake);
			}
			if (thisBuilding.type == 'Book store') {
				thisBuilding.inventory = thisBuilding.inventory.concat(items.books.map);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.books.blankLeatherBook);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.books.bookOfSpells);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.books.bookOfNecromancy);
			}
			if (thisBuilding.type == 'Shop' || thisBuilding.type == 'General Store' || thisBuilding.type == 'Travelling Merchant' || thisBuilding.type == 'Merchant' || thisBuilding.type == 'Marketplace') {
				thisBuilding.inventory = thisBuilding.inventory.concat(items.books.map);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Flatbread);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Plaincake);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Smokedsausage);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.tools.hammer);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.musicalIntruments.flute);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.food.Toffee);
				thisBuilding.inventory = thisBuilding.inventory.concat(items.armor.paddedArmor);
			}







			townBuildings.push(thisBuilding);
			index++;
		}
	}
	return townBuildings;
}