var townApp = angular.module('townApp', []);

townApp.controller('townController', function($scope) {
	$scope.townData = {
		name: 'Esphille Village',
		description: 'Esphille is a quaint village on the side of a slauntering river',
		people: [{
			name: 'Tom Timmy Bloggs',
			race: 'Human',
			age: '25',
			job: 'Hunter',
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
		}, {
			name: 'JIM JEFFREYS',
			race: 'Dwarf',
			age: '222',
			job: 'Miner',
			lng: 'Dwarven',
			AC: 11,
			HP: 11,
			SP: 11,
			STR: 11,
			DEX: 11,
			CON: 11,
			INT: 11,
			WIS: 11,
			CHA: 11,
			inventory: [{
				type: 'money',
				value: '10 Copper'
			}, {
				type: 'armor',
				value: 'Leather Armor'
			}, {
				type: 'key',
				value: 'Brass Key'
			}]
		}],
		buildings: ['Bakery', 'Hunting Lodge', 'Chapel', 'Bank']
	};
	$scope.viewPerson = function(arrayIndex) {
		$scope.currentPerson = arrayIndex;
	};
	$scope.currentPerson = 0;
	$scope.searchInput = "";

});