var townApp = angular.module('townApp', []);
townApp.filter('floor', function() {
	return function(input) {
		return Math.floor(input);
	};
});

townApp.controller('townController', function($scope) {
	$scope.townData = {
		name: 'Create a town by clicking the "New Town" button',
		description: '',
		people: [],
		buildings: [],
	};




	$scope.maxShownBuildings = 10;
	$scope.toggleShowAllBuildings = function() {
		$scope.maxShownBuildings = ($scope.maxShownBuildings == 10 ? $scope.townData.buildings.length : 10);
	}
	$scope.maxShownPeople = 10;
	$scope.toggleShowAllPeople = function() {
		$scope.maxShownPeople = ($scope.maxShownPeople == 10 ? $scope.townData.people.length : 10);
	}
	$scope.items = getAllItems();
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
		$scope.townData.people = populateTown();
		console.log($scope.townData.people);

	}
	$scope.relevanceSort = function(item) {
		return !item.type.toLowerCase().includes($scope.buildingSearchInput.toLowerCase());
	};

});


function loadFile() {
	var checkbox = document.getElementById('triggerLoadFileCheckbox');
	checkbox.click();
}