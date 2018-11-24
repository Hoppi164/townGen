var villageClass = 'middleClass';
var buildingTypes = [{
		type: 'Shack',
		aka: ['House', 'Home', 'Shelter']
	}, {
		type: 'Farm',
		aka: ['House', 'Home', 'Shelter']
	}, {
		type: 'Cabin',
		aka: ['House', 'Home', 'Shelter']
	}, {
		type: 'Homeless Shelter',
		aka: ['House', 'Home', 'Shelter', 'Inn']
	}, {
		type: 'House',
		aka: ['House', 'Home', 'Shelter']
	}, {
		type: 'Homestead',
		aka: ['House', 'Home', 'Shelter, Farm']
	}, {
		type: 'Lodge',
		aka: ['Shelter, Inn, Tavern, Hostel']
	}, {
		type: 'Hostel',
		aka: ['Food', 'Shelter', 'Inn', 'Tavern', 'Hostel', 'Lodge']
	}, {
		type: 'Hut',
		aka: ['House', 'Home', 'Shelter']
	}, {
		type: 'Shanty',
		aka: ['House', 'Home', 'Shelter']
	}, {
		type: 'Abode',
		aka: ['House', 'Home', 'Shelter']
	}, {
		type: 'Armory',
		aka: ['Blacksmith', 'Shop', 'Store', 'Weapons', 'Defense', 'Smith']
	}, {
		type: 'Church',
		aka: ['Monastery', 'Religion', 'Religious', 'Shrine', 'Altar', 'Priest', 'Shelter', 'Temple', 'Holy']
	}, {
		type: 'Monastery',
		aka: ['Church', 'Religion', 'Religious', 'Shrine', 'Altar', 'Priest', 'Shelter', 'Temple', 'Holy']
	}, {
		type: 'General Store',
		aka: ['Shop', 'Store', 'Weapons', 'Defense', 'Equipment', 'Gear', 'Adventure', 'Items', 'Market', 'Merchant']
	}, {
		type: 'Barber',
		aka: ['Haircut', 'Cosmetic', 'Tailor']
	}, {
		type: 'Mason',
		aka: ['Stone', 'Labourer', 'Labor', 'Pickaxe', 'Gems', 'Precious', 'Stones', 'Ore', 'Iron', 'Gold', 'Silver']
	}, {
		type: 'Butcher',
		aka: ['Meat', 'Food', 'Merchant', 'Store', 'Shop', 'Sell', 'Buyer', 'Market']
	}, {
		type: 'Furrier',
		aka: ['Fur', 'Animals', 'Merchant', 'Store', 'Shop', 'Sell', 'Buyer', 'Market', 'hides', 'leather', 'Tailor']
	}, {
		type: 'Carpenter',
		aka: ['Wood', 'Labourer', 'Labor', 'Furniture']
	}, {
		type: 'Tailor',
		aka: ['Fur', 'Animals', 'Merchant', 'Store', 'Shop', 'Sell', 'Buyer', 'Market', 'hides', 'leather', 'furrier', 'Shop', 'Store', 'Market', 'Merchant']
	}, {
		type: 'Cobbler',
		aka: ['Shoes', 'Boots', 'Shop', 'Store', 'Equipment', 'Gear', 'Adventure', 'Items', 'Market', 'Merchant']
	}, {
		type: 'Brewery',
		aka: ['Food', 'Ale', 'Factory']
	}, {
		type: 'Bake House',
		aka: ['Shop', 'Store', 'Market', 'Merchant', 'Bakery', 'Food']
	}, {
		type: 'Charcoal Maker',
		aka: ['Factory', 'Labourer']
	}, {
		type: 'Lumber Mill',
		aka: ['Factory', 'Labourer']
	}, {
		type: 'Grain Mill',
		aka: ['Factory', 'Food', 'Bread', 'Maker', 'Refinary']
	}, {
		type: 'Blacksmith',
		aka: ['Armory', 'Shop', 'Store', 'Market', 'Merchant', 'Weapons', 'Defense', 'Equipment', 'Tools']
	}, {
		type: 'Woodcutter',
		aka: ['Labourer']
	}, {
		type: 'Fishery',
		aka: ['Food', 'Sailor', 'Fishermen', 'Seaman', 'Net', 'Shop', 'Store', 'Market', 'Merchant']
	}, {
		type: 'Well',
		aka: ['Water']
	}, {
		type: 'Barn',
		aka: ['Shelter', 'Animals', 'Tools', 'Barn', 'Farm', 'Shed', 'Granary']
	}, {
		type: 'Granary',
		aka: ['Shelter', 'Animals', 'Tools', 'Barn', 'Farm', 'Shed', 'Bread']
	}, {
		type: 'Cattle Barn',
		aka: ['Shelter', 'Animals', 'Tools', 'Barn', 'Farm', 'Shed', 'Granary']
	}, {
		type: 'Stables',
		aka: ['Shelter', 'Animals', 'Tools', 'Farm', 'Shed', 'Granary']
	}, {
		type: 'Warehouse',
		aka: ['Shelter', 'Animals', 'Tools', 'Barn', 'Warehouse', 'Farm', 'Shed', 'Granary']
	}, {
		type: 'Market',
		aka: ['Shop', 'Store', 'Market', 'Merchant', 'Plaza', 'Shopping Centre', 'Mall', 'Town Square']
	}, {
		type: 'Tavern',
		aka: ['Food', 'Shelter', 'Inn', 'Tavern', 'Hostel', 'Lodge']
	}, {
		type: 'Inn',
		aka: ['Food', 'Shelter', 'Inn', 'Tavern', 'Hostel', 'Lodge']
	}, {
		type: 'Almshouse',
		aka: ['Food', 'Shelter', 'Inn', 'Tavern', 'Hostel', 'Lodge']
	}, {
		type: 'Town Hall',
		aka: ['Government', 'Office', 'Court', 'Official', 'Parliment']
	}, {
		type: 'Guard Tower',
		aka: ['Watch', 'Barracks', 'Guard Tower', 'Guards']
	}, {
		type: 'Brothel',
		aka: ['whorehouse', 'Hostel', 'Inn', 'illegal', 'underground', 'prostitutes', 'pimp']
	}, {
		type: 'Theater',
		aka: ['entertainment', 'Acting', 'Artists']
	}, {
		type: 'School',
		aka: ['University', 'Study', 'Education', 'Collage', 'College', 'School']
	}, {
		type: 'University',
		aka: ['University', 'Study', 'Education', 'Collage', 'College', 'School']
	}, {
		type: 'Watch House',
		aka: ['Watch House', 'Barracks', 'Guard Tower']
	}, {
		type: 'Doctors Office',
		aka: ['Apothecary', 'Medical', 'Doctors', 'Healer']
	}, {
		type: 'Prison',
		aka: ['Gaol', 'Jail', 'Lockup', 'Police', 'Guards']
	}, {
		type: 'Potions Merchant',
		aka: ['Shop', 'Store', 'Market', 'Merchant', 'Shaman', 'Wizard', 'Doctor', 'Medical', 'Alchemist', 'Apothecary']
	}, {
		type: 'Sweets Vendor',
		aka: ['Lollies', 'Shop', 'Store', 'Market', 'Merchant', 'Children', 'Food']
	}, {
		type: 'Town Square',
		aka: ['Shop', 'Store', 'Market', 'Merchant', 'Plaza']
	}, {
		type: 'Alchemist',
		aka: ['Apothecary', 'Shop', 'Store', 'Market', 'Merchant', 'Shaman', 'Wizard', 'Doctor', 'Medical', 'Alchemist', 'Potions']
	}, {
		type: 'Cottage',
		aka: ['House', 'Home', 'Shelter, Farm', 'Homestead']
	}, {
		type: 'Villa',
		aka: ['Manor', 'House', 'Home', 'Shelter, Farm', 'Homestead', 'Mansion', 'Castle']
	}, {
		type: 'Bungalow',
		aka: ['House', 'Home', 'Shelter, Farm', 'Homestead', 'Retreat', 'Cabin', 'Abode']
	}, {
		type: 'manor',
		aka: ['Manor', 'House', 'Home', 'Shelter, Farm', 'Homestead', 'Mansion', 'Castle']
	}, {
		type: 'Abode',
		aka: ['House', 'Home', 'Shelter, Farm', 'Homestead', 'Retreat', 'Cabin']
	}, {
		type: 'Bard Merchant',
		aka: ['Music', 'Instruments']
	}

];


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




function getRandomBuilding() {
	// var randomInventory getBuildingInv();
	var randomBuilding = buildingTypes[Math.floor(Math.random() * buildingTypes.length)];
	var newbuilding = {
		type: randomBuilding.type,
		aka: randomBuilding.aka

	}
	return newbuilding;
}