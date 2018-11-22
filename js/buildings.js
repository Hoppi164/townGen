var villageClass = 'middleClass';
var buildingTypes = [
	'Shack',
	'Farm',
	'Cabin',
	'Shelter',
	'House',
	'Homestead',
	'Lodge',
	'Hostel',
	'Hut',
	'Shanty',
	'Abode',
	'Armory',
	'Church',
	'Monastery',
	'General Store',
	'Barber',
	'Mason',
	'Butcher',
	'Furrier',
	'Carpenter',
	'Tailor',
	'Cobbler',
	'Brewery',
	'Bake House',
	'Charcoal Maker',
	'Lumber Mill',
	'Grain Mill',
	'Blacksmith',
	'Woodcutter',
	'Fishery',
	'Well',
	'Barn',
	'Granary',
	'Cattle Barn',
	'Stables',
	'Warehouse',
	'Market',
	'Tavern',
	'Inn',
	'Almshouse',
	'Town Hall',
	'Guard Tower',
	'Brothel',
	'Theater',
	'School',
	'University',
	'Watch House',
	'Doctors Office',
	'Prison',
	'Potions Merchant',
	'Sweets Vendor',
	'Town Square',
	'Post Office',
	'Alchemist',
	'Cottage',
	'Hall',
	'Villa',
	'Bungalow',
	'Alchemist',
	'manor',
	'Hall',
	'Abode'
];



// {
// 	type: 'Bakery',
// 	inventory: [{
// 		type: 'money',
// 		value: '155 Silver'
// 	}, {
// 		type: 'food',
// 		value: 'Bread'
// 	}]
// }




function getRandomBuilding() {
	// var randomInventory getBuildingInv();
	var newbuilding = {
		type: buildingTypes[Math.floor(Math.random() * buildingTypes.length)]
	}
	return newbuilding;
}