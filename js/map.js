			var thisVillage = '';
			var villageName = '';
			var villageClass = '';
			var villageType = '';
			var villageDesc = '';
			var villageHouses = '';
			var possibleTownData = {
				classes: ['lowerClass', 'middleClass', 'upperClass'],
				lowerClass: {
					class: "Lower Class",
					typeOfVillage: ['Hamlet', 'Village', 'Village', 'slum', 'town', 'Settlement', 'Community', 'Camp'],
					descriptionOfVillage: ['small', 'Starving', 'dirty', 'quiet', 'Abandoned', 'Farming', 'Bustling', 'Sprawling', 'Religious', 'Trading', 'Hunting', 'lawless', 'fishing', 'mining'],
					possibleHouses: ['shack', 'farm', 'cabin', 'shelter', 'house', 'Homestead', 'lodge', 'hostel', 'hut', 'shanty', 'abode'],
					possibleBuildings: ['Blacksmith', 'Woodcutter', 'Grain Mill', 'Lumber Mill', 'Charcoal Maker', 'Fishery', 'Bake House', 'Brewery', 'Furrier', 'Carpenter', 'Tailor', 'Cobbler', 'Barber', 'Mason', 'Butcher', 'General Store', 'Armory', 'Church', 'Monastery', 'Well', 'Barn', 'Granary', 'Cattle Barn', 'Stables', 'Warehouse', 'Market', 'Tavern', 'Inn', 'Almshouse', 'Town Hall', 'Guard Tower', 'Brothel', 'Theater', 'School', 'University', 'Watch House', 'Doctors Office', 'Prison', 'Potions Merchant', 'Sweets Vendor', 'Town Square', 'Post Office', 'Alchemist'],
					possibleLand: ['Grain Field', 'Vegetable Patch', 'Orchard', 'Vineyard', 'Meadow', 'Pasture', 'Woodland', 'Forest', 'Marsh', 'Field', 'River', 'Pond', 'Dam']
				},
				middleClass: {
					class: "Middle Class",
					typeOfVillage: ['Hamlet', 'Village', 'Cathedral', 'city', 'town', 'Settlement', 'Community', 'Camp'],
					descriptionOfVillage: ['small', 'Large', 'quiet', 'Bustling', 'Sprawling', 'Religious', 'Trading', 'Quaint'],
					possibleHouses: ['Cottage', 'farm', 'cabin', 'hall', 'house', 'Homestead', 'lodge', 'hostel', 'villa', 'Bungalow', 'abode'],
					possibleBuildings: ['Blacksmith', 'Woodcutter', 'Grain Mill', 'Lumber Mill', 'Charcoal Maker', 'Fishery', 'Bake House', 'Brewery', 'Furrier', 'Carpenter', 'Tailor', 'Cobbler', 'Barber', 'Mason', 'Butcher', 'General Store', 'Armory', 'Church', 'Monastery', 'Well', 'Barn', 'Granary', 'Cattle Barn', 'Stables', 'Warehouse', 'Market', 'Tavern', 'Inn', 'Almshouse', 'Town Hall', 'Guard Tower', 'Brothel', 'Theater', 'School', 'University', 'Watch House', 'Doctors Office', 'Prison', 'Potions Merchant', 'Sweets Vendor', 'Town Square', 'Post Office', 'Alchemist'],
					possibleLand: ['Grain Field', 'Vegetable Patch', 'Orchard', 'Vineyard', 'Meadow', 'Pasture', 'Woodland', 'Forest', 'Marsh', 'Field', 'River', 'Pond', 'Dam'],
				},
				upperClass: {
					class: "Upper Class",
					typeOfVillage: ['Village', 'Cathedral', 'Castle', 'City', 'Community'],
					descriptionOfVillage: ['Large', 'Thriving', 'Bustling', 'Sprawling', 'Economic', 'Religious', 'Trading'],
					possibleHouses: ['Cottage', 'Manor', 'Hall', 'house', 'Homestead', 'lodge', 'villa', 'Bungalow', 'abode'],
					possibleBuildings: ['Blacksmith', 'Woodcutter', 'Grain Mill', 'Lumber Mill', 'Charcoal Maker', 'Fishery', 'Bake House', 'Brewery', 'Furrier', 'Carpenter', 'Tailor', 'Cobbler', 'Barber', 'Mason', 'Butcher', 'General Store', 'Armory', 'Church', 'Monastery', 'Well', 'Barn', 'Granary', 'Cattle Barn', 'Stables', 'Warehouse', 'Market', 'Tavern', 'Inn', 'Almshouse', 'Town Hall', 'Guard Tower', 'Brothel', 'Theater', 'School', 'University', 'Watch House', 'Doctors Office', 'Prison', 'Potions Merchant', 'Sweets Vendor', 'Town Square', 'Post Office', 'Alchemist'],
					possibleLand: ['Grain Field', 'Vegetable Patch', 'Orchard', 'Vineyard', 'Meadow', 'Pasture', 'Woodland', 'Forest', 'Marsh', 'Field', 'River', 'Pond', 'Dam'],
				}
			}

			function randomBetween(lower = 0, higher = 100) {
				return Math.floor(Math.random() * higher + lower)
			}

			function updateMap(numHouses = 15) {
				villageClass = possibleTownData.classes[randomBetween(0, possibleTownData.classes.length)];
				thisVillage = eval('possibleTownData.' + villageClass);
				villageDesc = thisVillage.descriptionOfVillage[randomBetween(0, thisVillage.descriptionOfVillage.length)];
				villageName = townNames[randomBetween(0, townNames.length)];
				villageType = thisVillage.typeOfVillage[randomBetween(0, thisVillage.typeOfVillage.length)];
				document.getElementById('Village-Name').innerHTML = villageName;
				document.getElementById('Village-Class').innerHTML = thisVillage.class;
				document.getElementById('Village-Desc').innerHTML = villageDesc;
				document.getElementById('Village-Type').innerHTML = villageType;
				generateMap(numHouses);
			}

			function drawHouses(numHouses) {
				for (var i = 0; i < numHouses; i++) {
					var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'polyline'); //new polyline
					x = randomBetween(10, 80); //houses are in the center of screen
					y = randomBetween(10, 80);
					newElement.setAttribute("points", +x + " " + y + " " + (x + randomBetween(0, 6)) + " " + (y + randomBetween(0, 6))); //create house
					newElement.setAttribute("fill", "none"); //do not color
					newElement.setAttribute("stroke", "#4D281B");
					newElement.setAttribute("stroke-width", "3px");
					map.appendChild(newElement); //add house to svg image
				}
			}

			function drawRoads() {
				var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'polyline'); //Create road
				roadStart = [randomBetween(-5, 105), randomBetween(-5, 105)] //road starts at edge
				roadEnd = [randomBetween(-5, 105), randomBetween(-5, 105)] //road ends at edge
				middleOfMap = '50 50'; //road intersects with middle of town
				outermostpoint = roadStart[randomBetween(0, 2)] = randomBetween(0, 2) == 0 ? -5 : 105; //ensure line starts on edge of screen
				roadEnd[randomBetween(0, 2)] = randomBetween(0, 2) == 0 ? -5 : 105; //ensure line ends on edge of screen
				startCorners = [];
				endCorners = [];
				newElement.setAttribute("points", roadStart + " " + startCorners + " " + middleOfMap + " " + endCorners + " " + roadEnd); //create main road
				newElement.setAttribute("fill", "none");
				newElement.setAttribute("stroke", "#5D360E");
				newElement.setAttribute("stroke-width", "3px");
				map.appendChild(newElement); //add road to svg
				newElement = document.createElementNS("http://www.w3.org/2000/svg", 'polyline'); //Create road
				newElement.setAttribute("points", roadStart + " " + startCorners + " " + middleOfMap + " " + endCorners + " " + roadEnd); //create main road
				newElement.setAttribute("fill", "none");
				newElement.setAttribute("stroke", "#B45D07");
				newElement.setAttribute("stroke-width", "2px");
				map.appendChild(newElement); //add road to svg
				for (var i = 0; i < 4; i++) { //create a random number of minor roads
					if (randomBetween(0, 2) == 0) {
						var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'polyline');
						roadStart = [randomBetween(25, 75), randomBetween(25, 75)]
						middleOfMap = '50 50';
						newElement.setAttribute("points", roadStart + " " + middleOfMap); //Set create minor road
						newElement.setAttribute("fill", "none");
						newElement.setAttribute("stroke", "#B4891C");
						newElement.setAttribute("stroke-width", "1px");
						map.appendChild(newElement);
					}
				}
			}

			function drawTownCenter() {
				var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'circle'); //Create circle at path intersection
				newElement.setAttribute("cx", "50"); //place circle in middle of screen
				newElement.setAttribute("cy", "50"); //
				newElement.setAttribute("r", randomBetween(1, 6)); //radius random number between 1 and 6
				newElement.setAttribute("stroke", "#B45D07"); //black circle
				newElement.setAttribute("stroke-width", "1"); //
				newElement.setAttribute("fill", "#B4891C"); //
				map.appendChild(newElement);
			}

			function generateMap(numHouses) {
				var map = document.getElementById('map'); //Get svg element
				while (map.firstChild) { //clear current map
					map.removeChild(map.firstChild);
				}
				drawHouses(numHouses);
				drawRoads();
				drawTownCenter();
			}