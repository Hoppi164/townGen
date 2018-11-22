var items = [

	copper: {
		name: 'copper',
		cost: 1,
		desc: 'A dull bronze coin; used for trading',
		category: 'money'
	}
	silver: {
		name: 'silver',
		cost: 10,
		desc: 'A shiny triangular coin; used for trading',
		category: 'money'
	}
	gold: {
		name: 'gold',
		cost: 100,
		desc: 'An anvil shaped gold coin, embossed with intricate engravings of animals; used for trading',
		category: 'money'
	}
	platinum: {
		name: 'platinum',
		cost: 1000,
		desc: 'A rare coin made from rare metal; used for trading',
		category: 'money'
	},
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

	}
	leatherArmor: {
		name: 'Leather Armor',
		cost: 1000,
		desc: 'The Breastplate and shoulder protectors of this armor are made of leather that has been stiffened by being boiled in oil. The rest of the armor is made of softer and more flexible materials.',
		ac: '11 + dex mod',
		type: 'Light Armor',
		rarity: 'Standard',
		weight: '10 lbs',
		,
		category: 'armor'

	}
	studdedLeatherArmor: {
		name: 'Studded Leather Armor',
		cost: 4500,
		desc: 'Made from tough but flexible leather, studded leather is reinforced with close-set rivets or spikes.',
		ac: '12 + dex mod',
		type: 'Light Armor',
		rarity: 'Standard',
		weight: '13 lbs',
		category: 'armor'

	}
	hideArmor: {
		name: 'Hide Armor',
		cost: 1000,
		desc: 'This crude armor consists of thick furs and pelts.',
		ac: '12 + dex mod (max +2)',
		type: 'Medium Armor',
		rarity: 'Standard',
		weight: '12 lbs',
		category: 'armor'
	}
	chainShirt: {
		name: 'Chain Shirt',
		cost: 5000,
		desc: "Made of interlocking metal rings, a chain shirt is worn between layers of clothing or leather. This armor offers modest Protection to the wearer's upper body and allows the sound of the rings rubbing against one another to be muffled by outer layers.",
		ac: '13 + dex mod (max +2)',
		type: 'Medium Armor',
		rarity: 'Standard',
		weight: '20 lbs',
		category: 'armor'
	}
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
	}
	breastplate: {
		name: 'Breastplate',
		cost: 40000,
		desc: "This armor consists of a fitted metal chest piece worn with supple leather. Although it leaves the legs and arms relatively unprotected, this armor provides good Protection for the wearer's vital organs while leaving the wearer relatively unencumbered.",
		ac: '14 + dex mod (max +2)',
		weight: '20 lbs',
		rarity: 'Standard',
		type: 'Medium Armor'
		category: 'armor'
	}
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
	}
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
	}
	chainMail: {
		name: 'Chain Mail',
		cost: 7500,
		desc: 'Made of interlocking metal rings, chain mail includes a layer of quilted fabric worn underneath the mail to prevent chafing and to cushion the impact of blows. The suit includes gauntlets.',
		ac: '16',
		str: '13',
		stealth: 'Disadvantage',
		weight: '55 lbs',
		type: 'Heavy Armor',
		rarity: 'Standard'
		category: 'armor'
	}
	splintArmor: {
		name: 'Splint Armor:',
		cost: 20000,
		desc: 'This armor is made of narrow vertical strips of metal riveted to a backing of leather that is worn over cloth padding. Flexible Chain Mail protects the joints.',
		ac: '17',
		str: '15',
		stealth: 'Disadvantage',
		weight: '60 lbs'
		type: 'Heavy Armor',
		rarity: 'Standard',
		category: 'armor'
	}
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
	}
	shield: {
		name: 'Shield',
		cost: 1000,
		desc: 'A shield is made from wood or metal and is carried in one hand. Wielding a shield increases your Armor Class by 2. You can benefit from only one shield at a time.',
		ac: '+ 2',
		weight: '6 lbs',
		rarity: 'Standard',
		category: 'shield'
	}

]