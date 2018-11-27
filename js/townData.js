var townApp = angular.module('townApp', []);
townApp.filter('floor', function() {
	return function(input) {
		return Math.floor(input);
	};
});

townApp.controller('townController', function($scope) {
	$scope.townData = {
		name: 'Create a town by clicking the "New Town" button',
		// description: 'Esphille is a quaint village on the side of a slauntering river',
		people: [{
			index: 0,
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
			index: 1,
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
		buildings: []
	};
	$scope.editmode = false;
	$scope.currentPerson = 0;
	$scope.showFullScreenImage = false;
	$scope.fullscreenSource = '';
	$scope.toggleFullscreenImage = function(url) {
		$scope.fullscreenSource = url;
		$scope.showFullScreenImage = !$scope.showFullScreenImage;
	};

	$scope.viewPerson = function(arrayIndex) {
		$scope.currentPerson = arrayIndex;
	};
	$scope.currentBuilding = 0;
	$scope.viewBuilding = function(arrayIndex) {
		$scope.currentBuilding = arrayIndex;
	};
	$scope.peopleSearchInput = "";
	$scope.buildingSearchInput = "";
	$scope.townDataDownload = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify($scope.townData));
	$scope.triggerLoadFile = false;
	$scope.saveFile = function() {
		var exportName = $scope.townData.name;
		var exportObj = $scope.townData;
		var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
		var downloadAnchorNode = document.createElement('a');
		downloadAnchorNode.setAttribute("href", dataStr);
		downloadAnchorNode.setAttribute("download", exportName + ".json");
		document.body.appendChild(downloadAnchorNode); // required for firefox
		downloadAnchorNode.click();
		downloadAnchorNode.remove();
	};
	$scope.loadFile = function() {
		var files = document.getElementById('fileUpload').files;
		if (files.length <= 0) {
			return false;
		}

		var fr = new FileReader();

		fr.onload = function(e) {
			var result = JSON.parse(e.target.result);
			$scope.townData = result;
			$scope.$apply();
		}

		fr.readAsText(files.item(0));
	}

	$scope.toggleEdit = function() {
		$scope.editmode = !$scope.editmode;
	}

	$scope.newTown = function() {
		$scope.townData.name = getRandomTownName();
		$scope.townData.description = $scope.townData.name + ' is ' + getTownShortDesc() + ' ' + getTownLocation();

		$scope.townData.buildings = [];
		var numbuildings = Math.floor(Math.random() * 30) + 10;
		$scope.townData.buildings = getTownBuildings(numbuildings);
	}
	$scope.relevanceSort = function(item) {
		return !item.type.toLowerCase().includes($scope.buildingSearchInput.toLowerCase());
	};
});


function loadFile() {
	var checkbox = document.getElementById('triggerLoadFileCheckbox');
	checkbox.click();
}