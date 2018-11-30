var items = {
	money: {
		copper: {
			name: 'Copper',
			cost: 1,
			desc: 'A dull bronze coin; used for trading',
			category: 'money'
		},
		silver: {
			name: 'Silver',
			cost: 10,
			desc: 'A shiny triangular coin; used for trading',
			category: 'money'
		},
		gold: {
			name: 'Gold',
			cost: 100,
			desc: 'An anvil shaped gold coin, embossed with intricate engravings of animals; used for trading',
			category: 'money'
		},
		platinum: {
			name: 'Platinum',
			cost: 1000,
			desc: 'A rare coin made from rare metal; used for trading',
			category: 'money'
		}
	},
	clothes: [{
		name: 'Shirt',
		cost: 50,
		desc: 'A button up shirt, made on a loom',
		type: 'Clothes',
		icon: 'fas fa-tshirt'

	}, {
		name: 'Pants',
		cost: 40,
		desc: 'A pair of trousers',
		type: 'Clothes',
		icon: 'fas fa-tshirt'

	}, {
		name: 'Under-Garments',
		cost: 20,
		desc: 'Silk Underwear',
		type: 'Clothes',
		icon: 'fas fa-tshirt'

	}, {
		name: 'Business Suit',
		cost: 15000,
		desc: 'Cotton trim and silk lining, this suit is power and luxury',
		type: 'Clothes',
		icon: 'fas fa-tshirt'

	}],

	armor: {
		paddedArmor: {
			name: 'Padded Armor',
			cost: 500,
			desc: 'Padded armor crafted from quilted layers of cloth and batting.',
			ac: '11 + dex mod\n',
			type: 'Light Armor',
			rarity: 'Standard',
			weight: '8 lbs',
			stealth: 'Stealth: Disadvantage\n',
			category: 'armor',
			icon: 'fas fa-user-shield',
			buffer: '&#10'


		},
		leatherArmor: {
			name: 'Leather Armor',
			cost: 1000,
			desc: 'The Breastplate and shoulder protectors of this armor are made of leather that has been stiffened by being boiled in oil. The rest of the armor is made of softer and more flexible materials.',
			ac: '11 + dex mod\n',
			type: 'Light Armor',
			rarity: 'Standard',
			weight: '10 lbs',
			category: 'armor',
			icon: 'fas fa-user-shield',
			buffer: '&#10'


		},
		studdedLeatherArmor: {
			name: 'Studded Leather Armor',
			cost: 4500,
			desc: 'Made from tough but flexible leather, studded leather is reinforced with close-set rivets or spikes.',
			ac: '12 + dex mod\n',
			type: 'Light Armor',
			rarity: 'Standard',
			weight: '13 lbs',
			category: 'armor',
			icon: 'fas fa-user-shield',
			buffer: '&#10'


		},
		hideArmor: {
			name: 'Hide Armor',
			cost: 1000,
			desc: 'This crude armor consists of thick furs and pelts.',
			ac: '12 + dex mod (max +2)\n',
			type: 'Medium Armor',
			rarity: 'Standard',
			weight: '12 lbs',
			category: 'armor',
			icon: 'fas fa-user-shield',
			buffer: '&#10'

		},
		chainShirt: {
			name: 'Chain Shirt',
			cost: 5000,
			desc: "Made of interlocking metal rings, a chain shirt is worn between layers of clothing or leather. This armor offers modest Protection to the wearer's upper body and allows the sound of the rings rubbing against one another to be muffled by outer layers.",
			ac: '13 + dex mod (max +2)\n',
			type: 'Medium Armor',
			rarity: 'Standard',
			weight: '20 lbs',
			category: 'armor',
			icon: 'fas fa-user-shield',
			buffer: '&#10'

		},
		scaleMail: {
			name: 'Scale Mail',
			cost: 5000,
			desc: 'This armor consists of a coat and leggings (and perhaps a separate skirt) of leather covered with overlapping pieces of metal, much like the scales of a fish. The suit includes gauntlets.',
			ac: '14 + dex mod (max +2)\n',
			type: 'Medium Armor',
			rarity: 'Standard',
			weight: '45 lbs',
			stealth: 'Stealth: Disadvantage\n',
			category: 'armor',
			icon: 'fas fa-user-shield',
			buffer: '&#10'

		},
		breastplate: {
			name: 'Breastplate',
			cost: 40000,
			desc: "This armor consists of a fitted metal chest piece worn with supple leather. Although it leaves the legs and arms relatively unprotected, this armor provides good Protection for the wearer's vital organs while leaving the wearer relatively unencumbered.",
			ac: '14 + dex mod (max +2)\n',
			weight: '20 lbs',
			rarity: 'Standard',
			type: 'Medium Armor',
			category: 'armor',
			icon: 'fas fa-user-shield',
			buffer: '&#10'

		},
		halfplate: {
			name: 'Half Plate',
			cost: 75000,
			desc: "Half plate consists of shaped metal plates that cover most of the wearer's body. It does not include leg Protection beyond simple greaves that are attached with leather straps.",
			ac: '15 + dex mod (max +2)\n',
			weight: '40 lbs',
			type: 'Medium Armor',
			rarity: 'Standard',
			stealth: 'Stealth: Disadvantage\n',
			category: 'armor',
			icon: 'fas fa-user-shield',
			buffer: '&#10'

		},
		ringMail: {
			name: 'Ring Mail',
			cost: 3000,
			desc: "This armor is Leather Armor with heavy rings sewn into it. The rings help reinforce the armor against blows from swords and axes. Ring mail is inferior to Chain Mail, and it's usually worn only by those who can't afford better armor.",
			ac: '14\n',
			weight: '40 lbs',
			type: 'Heavy Armor',
			rarity: 'Standard',
			stealth: 'Stealth: Disadvantage\n',
			category: 'armor',
			icon: 'fas fa-user-shield',
			buffer: '&#10'

		},
		chainMail: {
			name: 'Chain Mail',
			cost: 7500,
			desc: 'Made of interlocking metal rings, chain mail includes a layer of quilted fabric worn underneath the mail to prevent chafing and to cushion the impact of blows. The suit includes gauntlets.',
			ac: '16\n',
			str: 'Strength Required: 13\n',
			stealth: 'Stealth: Disadvantage\n',
			weight: '55 lbs',
			type: 'Heavy Armor',
			rarity: 'Standard',
			category: 'armor',
			icon: 'fas fa-user-shield',
			buffer: '&#10'

		},
		splintArmor: {
			name: 'Splint Armor:',
			cost: 20000,
			desc: 'This armor is made of narrow vertical strips of metal riveted to a backing of leather that is worn over cloth padding. Flexible Chain Mail protects the joints.',
			ac: '17\n',
			str: 'Strength Required: 15\n',
			stealth: 'Stealth: Disadvantage\n',
			weight: '60 lbs',
			type: 'Heavy Armor',
			rarity: 'Standard',
			category: 'armor',
			icon: 'fas fa-user-shield',
			buffer: '&#10'

		},
		plateArmor: {
			name: 'Plate Armor',
			cost: 150000,
			desc: 'Plate consists of shaped, interlocking metal plates to cover the entire body. A suit of plate includes gauntlets, heavy leather boots, a visored helmet, and thick layers of padding underneath the armor. Buckles and straps distribute the weight over the body.',
			ac: '18\n',
			str: 'Strength Required: 15\n',
			stealth: 'Stealth: Disadvantage\n',
			weight: '65 lbs',
			type: 'Heavy Armor',
			rarity: 'Standard',
			category: 'armor',
			icon: 'fas fa-user-shield',
			buffer: '&#10'

		},
		shield: {
			name: 'Shield',
			cost: 1000,
			desc: 'A shield is made from wood or metal and is carried in one hand. Wielding a shield increases your Armor Class by 2. You can benefit from only one shield at a time.',
			ac: '+ 2\n',
			weight: '6 lbs',
			rarity: 'Standard',
			category: 'Shield',
			type: 'Shield',
			icon: 'fas fa-shield-alt',
			buffer: '&#10'
		}
	},
	food: {
		Bacon: {
			name: "Bacon",
			cost: 4,
			type: 'Food',
			desc: "Bacon",
			icon: 'fas fa-utensils'
		},
		Ham: {
			name: "Ham",
			cost: 5,
			type: 'Food',
			desc: "Ham",
			icon: 'fas fa-utensils'
		},
		Beefsteak: {
			name: "Beef steak",
			cost: 5,
			type: 'Food',
			desc: "Beef steak",
			icon: 'fas fa-utensils'
		},
		Kippers: {
			name: "Kippers",
			cost: 6,
			type: 'Food',
			desc: "Kippers",
			icon: 'fas fa-utensils'
		},
		Smokedsausage: {
			name: "Smoked sausage",
			cost: 6,
			type: 'Food',
			desc: "Smoked sausage",
			icon: 'fas fa-utensils'
		},
		Bloodpudding: {
			name: "Blood pudding",
			cost: 2,
			type: 'Food',
			desc: "Blood pudding",
			icon: 'fas fa-utensils'
		},
		Friedperch: {
			name: "Fried perch",
			cost: 6,
			type: 'Food',
			desc: "Fried perch",
			icon: 'fas fa-utensils'
		},
		Hash: {
			name: "Hash",
			cost: 5,
			type: 'Food',
			desc: "Hash",
			icon: 'fas fa-utensils'
		},
		Meatballs: {
			name: "Meatballs",
			cost: 5,
			type: 'Food',
			desc: "Meatballs",
			icon: 'fas fa-utensils'
		},
		Porkchop: {
			name: "Pork chop",
			cost: 5,
			type: 'Food',
			desc: "Pork chop",
			icon: 'fas fa-utensils'
		},
		Chickenhalf: {
			name: "Chicken half",
			cost: 7,
			type: 'Food',
			desc: "Chicken half",
			icon: 'fas fa-utensils'
		},
		Legofmutton: {
			name: "Leg of mutton",
			cost: 7,
			type: 'Food',
			desc: "Leg of mutton",
			icon: 'fas fa-utensils'
		},
		Rabbitstew: {
			name: "Rabbit stew",
			cost: 4,
			type: 'Food',
			desc: "Rabbit stew",
			icon: 'fas fa-utensils'
		},
		Sausage: {
			name: "Sausage",
			cost: 4,
			type: 'Food',
			desc: "Sausage",
			icon: 'fas fa-utensils'
		},
		Vealsweetbreads: {
			name: "Veal sweetbreads",
			cost: 6,
			type: 'Food',
			desc: "Veal sweetbreads",
			icon: 'fas fa-utensils'
		},
		Lambstew: {
			name: "Lamb stew",
			cost: 4,
			type: 'Food',
			desc: "Lamb stew",
			icon: 'fas fa-utensils'
		},
		Wholeduck: {
			name: "Whole duck",
			cost: 10,
			type: 'Food',
			desc: "Whole duck",
			icon: 'fas fa-utensils'
		},
		Porkliver: {
			name: "Pork liver",
			cost: 3,
			type: 'Food',
			desc: "Pork liver",
			icon: 'fas fa-utensils'
		},
		Mixedgrill: {
			name: "Mixed grill",
			cost: 8,
			type: 'Food',
			desc: "Mixed grill",
			icon: 'fas fa-utensils'
		},
		Stuffedtrout: {
			name: "Stuffed trout",
			cost: 8,
			type: 'Food',
			desc: "Stuffed trout",
			icon: 'fas fa-utensils'
		},
		Lambchop: {
			name: "Lamb chop",
			cost: 5,
			type: 'Food',
			desc: "Lamb chop",
			icon: 'fas fa-utensils'
		},
		Broiledcatfish: {
			name: "Broiled catfish",
			cost: 3,
			type: 'Food',
			desc: "Broiled catfish",
			icon: 'fas fa-utensils'
		},
		Dogstew: {
			name: "Dog stew",
			cost: 2,
			type: 'Food',
			desc: "Dog stew",
			icon: 'fas fa-utensils'
		},
		Catcutlet: {
			name: "Cat cutlet",
			cost: 2,
			type: 'Food',
			desc: "Cat cutlet",
			icon: 'fas fa-utensils'
		},
		Froglegs: {
			name: "Frog legs",
			cost: 2,
			type: 'Food',
			desc: "Frog legs",
			icon: 'fas fa-utensils'
		},
		Octopus: {
			name: "Octopus",
			cost: 10,
			type: 'Food',
			desc: "Octopus",
			icon: 'fas fa-utensils'
		},
		Wyvernshank: {
			name: "Wyvern shank",
			cost: 200,
			type: 'Food',
			desc: "Wyvern shank",
			icon: 'fas fa-utensils'
		},
		Monkeybrain: {
			name: "Monkey brain",
			cost: 4,
			type: 'Food',
			desc: "Monkey brain",
			icon: 'fas fa-utensils'
		},
		Owlbearchop: {
			name: "Owlbear chop",
			cost: 50,
			type: 'Food',
			desc: "Owlbear chop",
			icon: 'fas fa-utensils'
		},
		Gianttoadtongue: {
			name: "Giant toad tongue",
			cost: 30,
			type: 'Food',
			desc: "Giant toad tongue",
			icon: 'fas fa-utensils'
		},
		Sharkfilet: {
			name: "Shark filet",
			cost: 20,
			type: 'Food',
			desc: "Shark filet",
			icon: 'fas fa-utensils'
		},
		Chickeneggs: {
			name: "Chicken eggs",
			cost: 2,
			type: 'Food',
			desc: "Chicken eggs",
			icon: 'fas fa-utensils'
		},
		Duckeggs: {
			name: "Duck eggs",
			cost: 3,
			type: 'Food',
			desc: "Duck eggs",
			icon: 'fas fa-utensils'
		},
		Gooseeggs: {
			name: "Goose eggs",
			cost: 3,
			type: 'Food',
			desc: "Goose eggs",
			icon: 'fas fa-utensils'
		},
		Sharpcheese: {
			name: "Sharp cheese",
			cost: 1,
			type: 'Food',
			desc: "Sharp cheese",
			icon: 'fas fa-utensils'
		},
		Softcheese: {
			name: "Soft cheese",
			cost: 3,
			type: 'Food',
			desc: "Soft cheese",
			icon: 'fas fa-utensils'
		},
		Curds: {
			name: "Curds",
			cost: 1,
			type: 'Food',
			desc: "Curds",
			icon: 'fas fa-utensils'
		},
		Hippogriffegg: {
			name: "Hippogriff egg",
			cost: 60,
			type: 'Food',
			desc: "Hippogriff egg",
			icon: 'fas fa-utensils'
		},
		Griffinmilkcheese: {
			name: "Griffin-milk cheese",
			cost: 45,
			type: 'Food',
			desc: "Griffin-milk cheese",
			icon: 'fas fa-utensils'
		},
		Gnomesyogurt: {
			name: "Gnomes’ yogurt",
			cost: 15,
			type: 'Food',
			desc: "Gnomes’ yogurt",
			icon: 'fas fa-utensils'
		},
		Dwarvenbluecheese: {
			name: "Dwarven blue cheese",
			cost: 11,
			type: 'Food',
			desc: "Dwarven blue cheese",
			icon: 'fas fa-utensils'
		},
		Dragonturtleomelet: {
			name: "Dragon turtle omelet",
			cost: 18,
			type: 'Food',
			desc: "Dragon turtle omelet",
			icon: 'fas fa-utensils'
		},
		Quaileggs: {
			name: "Quail eggs",
			cost: 1,
			type: 'Food',
			desc: "Quail eggs",
			icon: 'fas fa-utensils'
		},
		Carrots: {
			name: "Carrots",
			cost: 1,
			type: 'Food',
			desc: "Carrots",
			icon: 'fas fa-utensils'
		},
		Turnips: {
			name: "Turnips",
			cost: 1,
			type: 'Food',
			desc: "Turnips",
			icon: 'fas fa-utensils'
		},
		Potato: {
			name: "Potato",
			cost: 2,
			type: 'Food',
			desc: "Potato",
			icon: 'fas fa-utensils'
		},
		Taro: {
			name: "Taro",
			cost: 1,
			type: 'Food',
			desc: "Taro",
			icon: 'fas fa-utensils'
		},
		Yams: {
			name: "Yams",
			cost: 2,
			type: 'Food',
			desc: "Yams",
			icon: 'fas fa-utensils'
		},
		Onions: {
			name: "Onions",
			cost: 2,
			type: 'Food',
			desc: "Onions",
			icon: 'fas fa-utensils'
		},
		Cabbage: {
			name: "Cabbage",
			cost: 2,
			type: 'Food',
			desc: "Cabbage",
			icon: 'fas fa-utensils'
		},
		Leeks: {
			name: "Leeks",
			cost: 2,
			type: 'Food',
			desc: "Leeks",
			icon: 'fas fa-utensils'
		},
		Collardgreens: {
			name: "Collard greens",
			cost: 2,
			type: 'Food',
			desc: "Collard greens",
			icon: 'fas fa-utensils'
		},
		Broccoli: {
			name: "Broccoli",
			cost: 1,
			type: 'Food',
			desc: "Broccoli",
			icon: 'fas fa-utensils'
		},
		Spinach: {
			name: "Spinach",
			cost: 1,
			type: 'Food',
			desc: "Spinach",
			icon: 'fas fa-utensils'
		},
		Corn: {
			name: "Corn",
			cost: 1,
			type: 'Food',
			desc: "Corn",
			icon: 'fas fa-utensils'
		},
		Chickpeas: {
			name: "Chick peas",
			cost: 1,
			type: 'Food',
			desc: "Chick peas",
			icon: 'fas fa-utensils'
		},
		Peas: {
			name: "Peas",
			cost: 1,
			type: 'Food',
			desc: "Peas",
			icon: 'fas fa-utensils'
		},
		Greenbeans: {
			name: "Green beans",
			cost: 2,
			type: 'Food',
			desc: "Green beans",
			icon: 'fas fa-utensils'
		},
		Lentils: {
			name: "Lentils",
			cost: 1,
			type: 'Food',
			desc: "Lentils",
			icon: 'fas fa-utensils'
		},
		Broadbeans: {
			name: "Broad beans",
			cost: 2,
			type: 'Food',
			desc: "Broad beans",
			icon: 'fas fa-utensils'
		},
		Blackbeans: {
			name: "Black beans",
			cost: 2,
			type: 'Food',
			desc: "Black beans",
			icon: 'fas fa-utensils'
		},
		Pumpkin: {
			name: "Pumpkin",
			cost: 3,
			type: 'Food',
			desc: "Pumpkin",
			icon: 'fas fa-utensils'
		},
		Seaweed: {
			name: "Seaweed",
			cost: 1,
			type: 'Food',
			desc: "Seaweed",
			icon: 'fas fa-utensils'
		},
		Artichoke: {
			name: "Artichoke",
			cost: 3,
			type: 'Food',
			desc: "Artichoke",
			icon: 'fas fa-utensils'
		},
		Apple: {
			name: "Apple",
			cost: 4,
			type: 'Food',
			desc: "Apple",
			icon: 'fas fa-utensils'
		},
		Pear: {
			name: "Pear",
			cost: 3,
			type: 'Food',
			desc: "Pear",
			icon: 'fas fa-utensils'
		},
		Peach: {
			name: "Peach",
			cost: 3,
			type: 'Food',
			desc: "Peach",
			icon: 'fas fa-utensils'
		},
		Dates: {
			name: "Dates",
			cost: 3,
			type: 'Food',
			desc: "Dates",
			icon: 'fas fa-utensils'
		},
		Strawberries: {
			name: "Strawberries",
			cost: 3,
			type: 'Food',
			desc: "Strawberries",
			icon: 'fas fa-utensils'
		},
		Raspberries: {
			name: "Raspberries",
			cost: 3,
			type: 'Food',
			desc: "Raspberries",
			icon: 'fas fa-utensils'
		},
		Blackberries: {
			name: "Blackberries",
			cost: 3,
			type: 'Food',
			desc: "Blackberries",
			icon: 'fas fa-utensils'
		},
		Blueberries: {
			name: "Blueberries",
			cost: 4,
			type: 'Food',
			desc: "Blueberries",
			icon: 'fas fa-utensils'
		},
		Currants: {
			name: "Currants",
			cost: 3,
			type: 'Food',
			desc: "Currants",
			icon: 'fas fa-utensils'
		},
		Raisins: {
			name: "Raisins",
			cost: 2,
			type: 'Food',
			desc: "Raisins",
			icon: 'fas fa-utensils'
		},
		Melon: {
			name: "Melon",
			cost: 7,
			type: 'Food',
			desc: "Melon",
			icon: 'fas fa-utensils'
		},
		Stewedprunes: {
			name: "Stewed prunes",
			cost: 4,
			type: 'Food',
			desc: "Stewed prunes",
			icon: 'fas fa-utensils'
		},
		Pomegranite: {
			name: "Pomegranite",
			cost: 2,
			type: 'Food',
			desc: "Pomegranite",
			icon: 'fas fa-utensils'
		},
		Banana: {
			name: "Banana",
			cost: 2,
			type: 'Food',
			desc: "Banana",
			icon: 'fas fa-utensils'
		},
		Guava: {
			name: "Guava",
			cost: 1,
			type: 'Food',
			desc: "Guava",
			icon: 'fas fa-utensils'
		},
		Underdarkglowfruit: {
			name: "Underdark glowfruit",
			cost: 10,
			type: 'Food',
			desc: "Underdark glowfruit",
			icon: 'fas fa-utensils'
		},
		Seagrapes: {
			name: "Sea-grapes",
			cost: 10,
			type: 'Food',
			desc: "Sea-grapes",
			icon: 'fas fa-utensils'
		},
		Coarseryebread: {
			name: "Coarse rye bread",
			cost: 4,
			type: 'Food',
			desc: "Coarse rye bread",
			icon: 'fas fa-utensils'
		},
		Nutbread: {
			name: "Nut bread",
			cost: 10,
			type: 'Food',
			desc: "Nut bread",
			icon: 'fas fa-utensils'
		},
		Rice: {
			name: "Rice",
			cost: 3,
			type: 'Food',
			desc: "Rice",
			icon: 'fas fa-utensils'
		},
		Millet: {
			name: "Millet",
			cost: 4,
			type: 'Food',
			desc: "Millet",
			icon: 'fas fa-utensils'
		},
		Flatbread: {
			name: "Flatbread",
			cost: 6,
			type: 'Food',
			desc: "Flatbread",
			icon: 'fas fa-utensils'
		},
		Mush: {
			name: "Mush",
			cost: 1,
			type: 'Food',
			desc: "Mush",
			icon: 'fas fa-utensils'
		},
		Oatmeal: {
			name: "Oatmeal",
			cost: 2,
			type: 'Food',
			desc: "Oatmeal",
			icon: 'fas fa-utensils'
		},
		Wildrice: {
			name: "Wild rice",
			cost: 2,
			type: 'Food',
			desc: "Wild rice",
			icon: 'fas fa-utensils'
		},
		Sunflowerloaf: {
			name: "Sunflower loaf",
			cost: 4,
			type: 'Food',
			desc: "Sunflower loaf",
			icon: 'fas fa-utensils'
		},
		Goblinbannock: {
			name: "Goblin bannock",
			cost: 5,
			type: 'Food',
			desc: "Goblin bannock",
			icon: 'fas fa-utensils'
		},
		Centaurrye: {
			name: "Centaur rye",
			cost: 6,
			type: 'Food',
			desc: "Centaur rye",
			icon: 'fas fa-utensils'
		},
		Seaoats: {
			name: "Sea oats",
			cost: 10,
			type: 'Food',
			desc: "Sea oats",
			icon: 'fas fa-utensils'
		},
		Pinenuts: {
			name: "Pine nuts",
			cost: 6,
			type: 'Food',
			desc: "Pine nuts",
			icon: 'fas fa-utensils'
		},
		Marzipan: {
			name: "Marzipan",
			cost: 10,
			type: 'Food',
			desc: "Marzipan",
			icon: 'fas fa-utensils'
		},
		Berrypie: {
			name: "Berry pie",
			cost: 25,
			type: 'Food',
			desc: "Berry pie",
			icon: 'fas fa-utensils'
		},
		Applepie: {
			name: "Apple pie",
			cost: 25,
			type: 'Food',
			desc: "Apple pie",
			icon: 'fas fa-utensils'
		},
		Raisinpie: {
			name: "Raisin pie",
			cost: 20,
			type: 'Food',
			desc: "Raisin pie",
			icon: 'fas fa-utensils'
		},
		Pecanpie: {
			name: "Pecan pie",
			cost: 25,
			type: 'Food',
			desc: "Pecan pie",
			icon: 'fas fa-utensils'
		},
		Mincepie: {
			name: "Mince pie",
			cost: 25,
			type: 'Food',
			desc: "Mince pie",
			icon: 'fas fa-utensils'
		},
		Rhubarbpie: {
			name: "Rhubarb pie",
			cost: 11,
			type: 'Food',
			desc: "Rhubarb pie",
			icon: 'fas fa-utensils'
		},
		Plaincake: {
			name: "Plain cake",
			cost: 12,
			type: 'Food',
			desc: "Plain cake",
			icon: 'fas fa-utensils'
		},
		Walnutcake: {
			name: "Walnut cake",
			cost: 13,
			type: 'Food',
			desc: "Walnut cake",
			icon: 'fas fa-utensils'
		},
		Fruitcake: {
			name: "Fruitcake",
			cost: 14,
			type: 'Food',
			desc: "Fruitcake",
			icon: 'fas fa-utensils'
		},
		Spicebread: {
			name: "Spice bread",
			cost: 15,
			type: 'Food',
			desc: "Spice bread",
			icon: 'fas fa-utensils'
		},
		Custard: {
			name: "Custard",
			cost: 10,
			type: 'Food',
			desc: "Custard",
			icon: 'fas fa-utensils'
		},
		Plumpudding: {
			name: "Plum pudding",
			cost: 10,
			type: 'Food',
			desc: "Plum pudding",
			icon: 'fas fa-utensils'
		},
		Ricepudding: {
			name: "Rice pudding",
			cost: 10,
			type: 'Food',
			desc: "Rice pudding",
			icon: 'fas fa-utensils'
		},
		Applesauce: {
			name: "Applesauce",
			cost: 9,
			type: 'Food',
			desc: "Applesauce",
			icon: 'fas fa-utensils'
		},
		Woodelvencakes: {
			name: "Wood-elven cakes",
			cost: 26,
			type: 'Food',
			desc: "Wood-elven cakes",
			icon: 'fas fa-utensils'
		},
		Cremebrulee: {
			name: "Crème brulée",
			cost: 30,
			type: 'Food',
			desc: "Crème brulée",
			icon: 'fas fa-utensils'
		},
		Sherbet: {
			name: "Sherbet",
			cost: 25,
			type: 'Food',
			desc: "Sherbet",
			icon: 'fas fa-utensils'
		},
		Honeycake: {
			name: "Honey-cake",
			cost: 25,
			type: 'Food',
			desc: "Honey-cake",
			icon: 'fas fa-utensils'
		},
		Spicedpumpkin: {
			name: "Spiced pumpkin",
			cost: 21,
			type: 'Food',
			desc: "Spiced pumpkin",
			icon: 'fas fa-utensils'
		},
		Chocolatetorte: {
			name: "Chocolate torte",
			cost: 34,
			type: 'Food',
			desc: "Chocolate torte",
			icon: 'fas fa-utensils'
		},
		Toffee: {
			name: "Toffee",
			cost: 11,
			type: 'Food',
			desc: "Toffee",
			icon: 'fas fa-utensils'
		},
		Vanillafudge: {
			name: "Vanilla fudge",
			cost: 11,
			type: 'Food',
			desc: "Vanilla fudge",
			icon: 'fas fa-utensils'
		}
	},
	sweets: [{
		name: "Gnomes’ yogurt",
		cost: 15,
		type: 'Sweets',
		desc: 'Gnomes’ yogurt',
		icon: 'fas fa-cookie-bite'

	}, {
		name: "Berry pie",
		cost: 25,
		type: 'Sweets',
		desc: 'Berry pie',
		icon: 'fas fa-cookie-bite'

	}, {
		name: "Apple pie",
		cost: 25,
		type: 'Sweets',
		desc: 'Apple pie',
		icon: 'fas fa-cookie-bite'

	}, {
		name: "Raisin pie",
		cost: 20,
		type: 'Sweets',
		desc: 'Raisin pie',
		icon: 'fas fa-cookie-bite'

	}, {
		name: "Pecan pie",
		cost: 25,
		type: 'Sweets',
		desc: 'Pecan pie',
		icon: 'fas fa-cookie-bite'

	}, {
		name: "Rhubarb pie",
		cost: 11,
		type: 'Sweets',
		desc: 'Rhubarb pie',
		icon: 'fas fa-cookie-bite'

	}, {
		name: "Plain cake",
		cost: 12,
		type: 'Sweets',
		desc: 'Plain cake',
		icon: 'fas fa-cookie-bite'

	}, {
		name: "Walnut cake",
		cost: 13,
		type: 'Sweets',
		desc: 'Walnut cake',
		icon: 'fas fa-cookie-bite'

	}, {
		name: "Fruitcake",
		cost: 14,
		type: 'Sweets',
		desc: 'Fruitcake',
		icon: 'fas fa-cookie-bite'

	}, {
		name: "Spice bread",
		cost: 15,
		type: 'Sweets',
		desc: 'Spice bread',
		icon: 'fas fa-cookie-bite'

	}, {
		name: "Custard",
		cost: 10,
		type: 'Sweets',
		desc: 'Custard',
		icon: 'fas fa-cookie-bite'

	}, {
		name: "Plum pudding",
		cost: 10,
		type: 'Sweets',
		desc: 'Plum pudding',
		icon: 'fas fa-cookie-bite'

	}, {
		name: "Rice pudding",
		cost: 10,
		type: 'Sweets',
		desc: 'Rice pudding',
		icon: 'fas fa-cookie-bite'

	}, {
		name: "Applesauce",
		cost: 9,
		type: 'Sweets',
		desc: 'Applesauce',
		icon: 'fas fa-cookie-bite'

	}, {
		name: "Wood-elven cakes",
		cost: 26,
		type: 'Sweets',
		desc: 'Wood-elven cakes',
		icon: 'fas fa-cookie-bite'

	}, {
		name: "Crème brulée",
		cost: 30,
		type: 'Sweets',
		desc: 'Crème brulée',
		icon: 'fas fa-cookie-bite'

	}, {
		name: "Sherbet",
		cost: 25,
		type: 'Sweets',
		desc: 'Sherbet',
		icon: 'fas fa-cookie-bite'

	}, {
		name: "Honey-cake",
		cost: 25,
		type: 'Sweets',
		desc: 'Honey-cake',
		icon: 'fas fa-cookie-bite'

	}, {
		name: "Chocolate torte",
		cost: 34,
		type: 'Sweets',
		desc: 'Chocolate torte',
		icon: 'fas fa-cookie-bite'

	}, {
		name: "Toffee",
		cost: 11,
		type: 'Sweets',
		desc: 'Toffee',
		icon: 'fas fa-cookie-bite'

	}, {
		name: "Vanilla fudge",
		cost: 11,
		type: 'Sweets',
		desc: 'Vanilla fudge',
		icon: 'fas fa-cookie-bite'

	}],
	drink: [{
			type: 'Drink',
			name: 'Mug of Ale',
			cost: 4,
			desc: 'A mug of bitter-sweet alcohol, it has a faint fruity aroma rising from the froth.',
			icon: 'fas fa-beer'

		}, {
			type: 'Drink',
			name: 'Gallon of Ale',
			cost: 20,
			desc: 'A small and heavy barrel, it has a twist tap to release a torrent of bitter-sweet alcohol.',
			icon: 'fas fa-beer'

		}, {
			type: 'Drink',
			name: 'Pitcher of Wine',
			cost: 20,
			desc: 'Cheap wine, but it gets you drunk just the same.',
			icon: 'fas fa-beer'

		}, {
			type: 'Drink',
			name: 'Bottle of Wine',
			cost: 1000,
			desc: 'Exquisite wine, imported from a far off land.',
			icon: 'fas fa-beer'

		}

	],
	accommodation: [{
		type: 'Accommodation',
		name: 'Dirty patch of floor',
		cost: 7,
		desc: 'The corner of a barn; Uncomfortable and pungent, but you have a roof over your head',
		icon: 'fas fa-bed'

	}, {
		type: 'Accommodation',
		name: 'Blanket to sleep on',
		cost: 10,
		desc: 'A place on the floor near the hearth and a flea-ridden blanket amongst the riff-raff',
		icon: 'fas fa-bed'

	}, {
		type: 'Accommodation',
		name: 'Bed to sleep in',
		cost: 30,
		desc: 'A placed on a raised bed or heated floor; with a blanket and pillow',
		icon: 'fas fa-bed'

	}, {
		type: 'Accommodation',
		name: 'Comfortable Room',
		cost: 80,
		desc: 'A small private room with one bed, a washbasin and a covered chamber pot',
		icon: 'fas fa-bed'

	}],
	musicalIntruments: {
		bagpipes: {
			type: 'Musical Instrument',
			name: 'Bagpipes',
			cost: 3000,
			icon: 'fas fa-music'

		},
		drum: {
			type: 'Musical Instrument',
			name: 'Drum',
			cost: 600,
			icon: 'fas fa-music'

		},
		dulcimer: {
			type: 'Musical Instrument',
			name: 'Dulcimer',
			cost: 2500,
			icon: 'fas fa-music'

		},
		flute: {
			type: 'Musical Instrument',
			name: 'Flute',
			cost: 200,
			icon: 'fas fa-music'

		},
		lute: {
			type: 'Musical Instrument',
			name: 'Lute',
			cost: 3500,
			icon: 'fas fa-music'

		},
		lyre: {
			type: 'Musical Instrument',
			name: 'Lyre',
			cost: 3000,
			icon: 'fas fa-music'

		},
		horn: {
			type: 'Musical Instrument',
			name: 'Horn',
			cost: 300,
			icon: 'fas fa-music'

		},
		panflute: {
			type: 'Musical Instrument',
			name: 'Pan Flute',
			cost: 1200,
			icon: 'fas fa-music'

		},
		shawm: {
			type: 'Musical Instrument',
			name: 'Shawm',
			cost: 200,
			icon: 'fas fa-music'

		},
		violin: {
			type: 'Musical Instrument',
			name: 'Violin',
			cost: 3000,
			icon: 'fas fa-music'

		},
	},
	tools: {
		hammer: {
			type: 'Tool',
			name: 'Hammer',
			cost: 50,
			icon: 'fas fa-hammer'
		},
		chisel: {
			type: 'Tool',
			name: 'Chisel',
			cost: 25,
			icon: 'fas fa-hammer'
		},
		Saw: {
			type: 'Tool',
			name: 'Saw',
			cost: 200,
			icon: 'fas fa-hammer'
		}
	},
	books: {
		map: {
			type: 'Book',
			name: 'Map',
			cost: 80,
			desc: 'Map of the local area',
			icon: 'fas fa-atlas'
		},
		blankLeatherBook: {
			type: 'Book',
			name: 'Empty Leather Book',
			cost: 20,
			desc: 'An empty travellers journal',
			icon: 'fas fa-book'
		},
		bookOfSpells: {
			type: 'Book',
			name: 'Book Of Spells',
			cost: 2000,
			desc: 'A Wizards journal, filled with spells and incantations',
			icon: 'fas fa-book'
		},
		bookOfNecromancy: {
			type: 'Book',
			name: 'Book Of Necromancy',
			cost: 2000,
			desc: 'A Dead Necromancers journal, filled with spells and incantations',
			icon: 'fas fa-book-dead'
		}


	},

	prostitution: [{
		type: 'Female Prostitue',
		name: 'Esmarelda',
		cost: 20,
		desc: 'She will rock your world for only 2 Silver an hour',
		icon: 'fas fa-female'

	}, {
		type: 'Female Prostitue',
		name: 'Rosmarie',
		cost: 200,
		desc: "A higher class lady; although her revealing gown and jewellery aren't the attire of a 'modest' woman",
		icon: 'fas fa-female'

	}, {
		type: 'Male Prostitue',
		name: 'Richard',
		cost: 20,
		desc: 'A handsome sailor looking to please.',
		icon: 'fas fa-male'

	}, {
		type: 'Male Prostitue',
		name: 'Bardock',
		cost: 200,
		desc: "An ex-gladiator, he has plenty of experience in battle and.. other persuits.",
		icon: 'fas fa-male'

	}],
	otherServices: {
		haircut: {
			type: 'Haircut',
			name: 'Haircut',
			cost: 10,
			desc: 'The barber will cut your hair however you want it',
			icon: 'fas fa-cut'

		}
	}

}






function getRandomMeal() {
	var numFoods = Math.floor(Math.random() * 5 + 1);
	var meal = {
		type: 'Meal',
		icon: 'fas fa-utensils',
		cost: 0,
		desc: ''
	};
	for (var i = 0; i < numFoods; i++) {
		var randomProperty = function(obj) {
			var keys = Object.keys(obj)
			return obj[keys[keys.length * Math.random() << 0]];
		};
		var keys = Object.keys(items.food);
		var thisFood = items.food[keys[Math.floor(Math.random() * keys.length)]];
		meal.cost += thisFood.cost;
		meal.desc += thisFood.name;
		if (i < numFoods - 1) {
			meal.desc += ', ';
		}
		if (i == 0) {
			meal.name = thisFood.name + ' Meal';
		}
	}
	return meal;
}