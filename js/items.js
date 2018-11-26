var items = {
	money: {
		copper: {
			name: 'copper',
			cost: 1,
			desc: 'A dull bronze coin; used for trading',
			category: 'money'
		},
		silver: {
			name: 'silver',
			cost: 10,
			desc: 'A shiny triangular coin; used for trading',
			category: 'money'
		},
		gold: {
			name: 'gold',
			cost: 100,
			desc: 'An anvil shaped gold coin, embossed with intricate engravings of animals; used for trading',
			category: 'money'
		},
		platinum: {
			name: 'platinum',
			cost: 1000,
			desc: 'A rare coin made from rare metal; used for trading',
			category: 'money'
		}
	},

	armor: {
		paddedArmor: {
			name: 'Padded Armor',
			cost: 500,
			desc: 'Padded armor crafted from quilted layers of cloth and batting.',
			ac: '11 + dex mod',
			type: 'Light Armor',
			rarity: 'Standard',
			weight: '8 lbs',
			stealth: 'Disadvantage',
			category: 'armor'

		},
		leatherArmor: {
			name: 'Leather Armor',
			cost: 1000,
			desc: 'The Breastplate and shoulder protectors of this armor are made of leather that has been stiffened by being boiled in oil. The rest of the armor is made of softer and more flexible materials.',
			ac: '11 + dex mod',
			type: 'Light Armor',
			rarity: 'Standard',
			weight: '10 lbs',
			category: 'armor'

		},
		studdedLeatherArmor: {
			name: 'Studded Leather Armor',
			cost: 4500,
			desc: 'Made from tough but flexible leather, studded leather is reinforced with close-set rivets or spikes.',
			ac: '12 + dex mod',
			type: 'Light Armor',
			rarity: 'Standard',
			weight: '13 lbs',
			category: 'armor'

		},
		hideArmor: {
			name: 'Hide Armor',
			cost: 1000,
			desc: 'This crude armor consists of thick furs and pelts.',
			ac: '12 + dex mod (max +2)',
			type: 'Medium Armor',
			rarity: 'Standard',
			weight: '12 lbs',
			category: 'armor'
		},
		chainShirt: {
			name: 'Chain Shirt',
			cost: 5000,
			desc: "Made of interlocking metal rings, a chain shirt is worn between layers of clothing or leather. This armor offers modest Protection to the wearer's upper body and allows the sound of the rings rubbing against one another to be muffled by outer layers.",
			ac: '13 + dex mod (max +2)',
			type: 'Medium Armor',
			rarity: 'Standard',
			weight: '20 lbs',
			category: 'armor'
		},
		scaleMail: {
			name: 'Scale Mail',
			cost: 5000,
			desc: 'This armor consists of a coat and leggings (and perhaps a separate skirt) of leather covered with overlapping pieces of metal, much like the scales of a fish. The suit includes gauntlets.',
			ac: '14 + dex mod (max +2)',
			type: 'Medium Armor',
			rarity: 'Standard',
			weight: '45 lbs',
			stealth: 'Disadvantage',
			category: 'armor'
		},
		breastplate: {
			name: 'Breastplate',
			cost: 40000,
			desc: "This armor consists of a fitted metal chest piece worn with supple leather. Although it leaves the legs and arms relatively unprotected, this armor provides good Protection for the wearer's vital organs while leaving the wearer relatively unencumbered.",
			ac: '14 + dex mod (max +2)',
			weight: '20 lbs',
			rarity: 'Standard',
			type: 'Medium Armor',
			category: 'armor'
		},
		halfplate: {
			name: 'Half Plate',
			cost: 75000,
			desc: "Half plate consists of shaped metal plates that cover most of the wearer's body. It does not include leg Protection beyond simple greaves that are attached with leather straps.",
			ac: '15 + dex mod (max +2)',
			weight: '40 lbs',
			type: 'Medium Armor',
			rarity: 'Standard',
			stealth: 'Disadvantage',
			category: 'armor'
		},
		ringMail: {
			name: 'Ring Mail',
			cost: 3000,
			desc: "This armor is Leather Armor with heavy rings sewn into it. The rings help reinforce the armor against blows from swords and axes. Ring mail is inferior to Chain Mail, and it's usually worn only by those who can't afford better armor.",
			ac: '14',
			weight: '40 lbs',
			type: 'Heavy Armor',
			rarity: 'Standard',
			stealth: 'Disadvantage',
			category: 'armor'
		},
		chainMail: {
			name: 'Chain Mail',
			cost: 7500,
			desc: 'Made of interlocking metal rings, chain mail includes a layer of quilted fabric worn underneath the mail to prevent chafing and to cushion the impact of blows. The suit includes gauntlets.',
			ac: '16',
			str: '13',
			stealth: 'Disadvantage',
			weight: '55 lbs',
			type: 'Heavy Armor',
			rarity: 'Standard',
			category: 'armor'
		},
		splintArmor: {
			name: 'Splint Armor:',
			cost: 20000,
			desc: 'This armor is made of narrow vertical strips of metal riveted to a backing of leather that is worn over cloth padding. Flexible Chain Mail protects the joints.',
			ac: '17',
			str: '15',
			stealth: 'Disadvantage',
			weight: '60 lbs',
			type: 'Heavy Armor',
			rarity: 'Standard',
			category: 'armor'
		},
		plateArmor: {
			name: 'Plate Armor',
			cost: 150000,
			desc: 'Plate consists of shaped, interlocking metal plates to cover the entire body. A suit of plate includes gauntlets, heavy leather boots, a visored helmet, and thick layers of padding underneath the armor. Buckles and straps distribute the weight over the body.',
			ac: '18',
			str: '15',
			stealth: 'Disadvantage',
			weight: '65 lbs',
			type: 'Heavy Armor',
			rarity: 'Standard',
			category: 'armor'
		},
		shield: {
			name: 'Shield',
			cost: 1000,
			desc: 'A shield is made from wood or metal and is carried in one hand. Wielding a shield increases your Armor Class by 2. You can benefit from only one shield at a time.',
			ac: '+ 2',
			weight: '6 lbs',
			rarity: 'Standard',
			category: 'shield'
		}
	},
	food: [{
		name: "Bacon",
		cost: 4,
	}, {
		name: "Ham",
		cost: 5,
	}, {
		name: "Beef steak",
		cost: 5,
	}, {
		name: "Kippers",
		cost: 6,
	}, {
		name: "Smoked sausage",
		cost: 6,
	}, {
		name: "Blood pudding",
		cost: 2,
	}, {
		name: "Fried perch",
		cost: 6,
	}, {
		name: "Hash",
		cost: 5,
	}, {
		name: "Meatballs",
		cost: 5,
	}, {
		name: "Pork chop",
		cost: 5,
	}, {
		name: "Chicken half",
		cost: 7,
	}, {
		name: "Leg of mutton",
		cost: 7,
	}, {
		name: "Rabbit stew",
		cost: 4,
	}, {
		name: "Sausage",
		cost: 4,
	}, {
		name: "Veal sweetbreads",
		cost: 6,
	}, {
		name: "Lamb stew",
		cost: 4,
	}, {
		name: "Whole duck",
		cost: 10,
	}, {
		name: "Pork liver",
		cost: 3,
	}, {
		name: "Mixed grill",
		cost: 8,
	}, {
		name: "Stuffed trout",
		cost: 8,
	}, {
		name: "Lamb chop",
		cost: 5,
	}, {
		name: "Broiled catfish",
		cost: 3,
	}, {
		name: "Dog stew",
		cost: 2,
	}, {
		name: "Cat cutlet",
		cost: 2,
	}, {
		name: "Frog legs",
		cost: 2,
	}, {
		name: "Octopus",
		cost: 10,
	}, {
		name: "Wyvern shank",
		cost: 200,
	}, {
		name: "Monkey brain",
		cost: 4,
	}, {
		name: "Owlbear chop",
		cost: 50,
	}, {
		name: "Giant toad tongue",
		cost: 30,
	}, {
		name: "Shark filet",
		cost: 20,
	}, {
		name: "Chicken eggs",
		cost: 2,
	}, {
		name: "Duck eggs",
		cost: 3,
	}, {
		name: "Goose eggs",
		cost: 3,
	}, {
		name: "Sharp cheese",
		cost: 1,
	}, {
		name: "Soft cheese",
		cost: 3,
	}, {
		name: "Curds",
		cost: 1,
	}, {
		name: "Hippogriff egg",
		cost: 60,
	}, {
		name: "Griffin-milk cheese",
		cost: 45,
	}, {
		name: "Gnomes’ yogurt",
		cost: 15,
	}, {
		name: "Deep dwarven blue cheese",
		cost: 11,
	}, {
		name: "Dragon turtle omelet",
		cost: 18,
	}, {
		name: "Quail eggs",
		cost: 1,
	}, {
		name: "Carrots",
		cost: 1,
	}, {
		name: "Turnips",
		cost: 1,
	}, {
		name: "Potato",
		cost: 2,
	}, {
		name: "Taro",
		cost: 1,
	}, {
		name: "Yams",
		cost: 2,
	}, {
		name: "Onions",
		cost: 2,
	}, {
		name: "Cabbage",
		cost: 2,
	}, {
		name: "Leeks",
		cost: 2,
	}, {
		name: "Collard greens",
		cost: 2,
	}, {
		name: "Broccoli",
		cost: 1,
	}, {
		name: "Spinach",
		cost: 1,
	}, {
		name: "Corn",
		cost: 1,
	}, {
		name: "Chick peas",
		cost: 1,
	}, {
		name: "Peas",
		cost: 1,
	}, {
		name: "Green beans",
		cost: 2,
	}, {
		name: "Lentils",
		cost: 1,
	}, {
		name: "Broad beans",
		cost: 2,
	}, {
		name: "Black beans",
		cost: 2,
	}, {
		name: "Pumpkin",
		cost: 3,
	}, {
		name: "Seaweed",
		cost: 1,
	}, {
		name: "Artichoke",
		cost: 3,
	}, {
		name: "Apple",
		cost: 4,
	}, {
		name: "Pear",
		cost: 3,
	}, {
		name: "Peach",
		cost: 3,
	}, {
		name: "Dates",
		cost: 3,
	}, {
		name: "Strawberries",
		cost: 3,
	}, {
		name: "Raspberries",
		cost: 3,
	}, {
		name: "Blackberries",
		cost: 3,
	}, {
		name: "Blueberries",
		cost: 4,
	}, {
		name: "Currants",
		cost: 3,
	}, {
		name: "Raisins",
		cost: 2,
	}, {
		name: "Melon",
		cost: 7,
	}, {
		name: "Stewed prunes",
		cost: 4,
	}, {
		name: "Pomegranite",
		cost: 2,
	}, {
		name: "Banana",
		cost: 2,
	}, {
		name: "Guava",
		cost: 1,
	}, {
		name: "Underdark glowfruit",
		cost: 10,
	}, {
		name: "Sea-grapes",
		cost: 10,
	}, {
		name: "Coarse rye bread",
		cost: 4,
	}, {
		name: "Nut bread",
		cost: 10,
	}, {
		name: "Rice",
		cost: 3,
	}, {
		name: "Millet",
		cost: 4,
	}, {
		name: "Flatbread",
		cost: 6,
	}, {
		name: "Mush",
		cost: 1,
	}, {
		name: "Oatmeal",
		cost: 2,
	}, {
		name: "Wild rice",
		cost: 2,
	}, {
		name: "Sunflower loaf",
		cost: 4,
	}, {
		name: "Goblin bannock",
		cost: 5,
	}, {
		name: "Centaur rye",
		cost: 6,
	}, {
		name: "Sea oats",
		cost: 10,
	}, {
		name: "Pine nuts",
		cost: 6,
	}, {
		name: "Marzipan",
		cost: 10,
	}, {
		name: "Berry pie",
		cost: 25,
	}, {
		name: "Apple pie",
		cost: 25,
	}, {
		name: "Raisin pie",
		cost: 20,
	}, {
		name: "Pecan pie",
		cost: 25,
	}, {
		name: "Mince pie",
		cost: 25,
	}, {
		name: "Rhubarb pie",
		cost: 11,
	}, {
		name: "Plain cake",
		cost: 12,
	}, {
		name: "Walnut cake",
		cost: 13,
	}, {
		name: "Fruitcake",
		cost: 14,
	}, {
		name: "Spice bread",
		cost: 15,
	}, {
		name: "Custard",
		cost: 10,
	}, {
		name: "Plum pudding",
		cost: 10,
	}, {
		name: "Rice pudding",
		cost: 10,
	}, {
		name: "Applesauce",
		cost: 9,
	}, {
		name: "Wood-elven crisp cakes",
		cost: 26,
	}, {
		name: "Crème brulée",
		cost: 30,
	}, {
		name: "Sherbet",
		cost: 25,
	}, {
		name: "Honey-cake",
		cost: 25,
	}, {
		name: "Spiced, stuffed pumpkin",
		cost: 21,
	}, {
		name: "Chocolate torte",
		cost: 34,
	}, {
		name: "Toffee",
		cost: 11,
	}, {
		name: "Vanilla fudge",
		cost: 11,
	}],
	drink: [{
			name: 'Mug of Ale',
			cost: 4,
			desc: 'A mug of bitter-sweet alcohol, it has a faint fruity aroma rising from the froth.'
		}, {
			name: 'Gallon of Ale',
			cost: 20,
			desc: 'A small and heavy barrel, it has a twist tap to release a torrent of bitter-sweet alcohol.'
		}, {
			name: 'A Pitcher of Wine',
			cost: 20,
			desc: 'Cheap wine, but it gets you drunk just the same.'
		}, {
			name: 'A Bottle of Wine',
			cost: 1000,
			desc: 'Exquisite wine, imported from a far off land.'
		}

	],
	accommodation: [{
			type: 'accommodation',
			name: 'A Squalid place to sleep',
			cost: 7,
			desc: 'The corner of a barn; Uncomfortable and pungent, but you have a roof over your head'
		}, {
			type: 'accommodation',
			name: 'A Poor place to sleep',
			cost: 10,
			desc: 'A place on the floor near the hearth and a flea-ridden blanket amongst the riff-raff'
		}, {
			type: 'accommodation',
			name: 'A Modest bed to sleep in',
			cost: 30,
			desc: 'A placed on a raised bed or heated floor; with a blanket and pillow'
		}, {
			type: 'accommodation',
			name: 'A Comfortable Private Room',
			cost: 80,
			desc: 'A small private room with one bed, a washbasin and a covered chamber pot'
		}
		// wealthy: {
		// 	name: 'A Large Private Room',
		// 	cost: 200,
		// 	desc: 'A large private room with a comfortable bed, private bath with hot water on request, food delivered to your room on request, and private chamber pot in a separate chamber'
		// }
	],

}