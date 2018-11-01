<!-- NOTE TO SELF: HAVE USER DOWNLOAD JSON FILE OF SCOPE -->
<!-- This is how they 'save' and 'load' their towndata -->
<html ng-app="townApp">
	<?php include 'templateFiles/head.php';?>
	<style>
		.attributeBox{
			position: relative;
			display: block;
			padding-top: 0.8rem;
			padding-bottom: 0.8rem;
			padding-left: 0.5rem;
			padding-right: 0.5rem;
			margin-bottom: -1px;
			background-color: #fff;
			border: 1px solid rgba(0, 0, 0, 0.125);
			font-size: 0.8rem;
		}
		.townData{
			resize: none;
			width: 100% !important;
			border-radius: 0.25rem !important;
			border: 0;
			background-color: transparent !important;
			max-height: 100%;
			height: 0px;
			min-height: 30px;
		}
		.editable{
			border: 2px solid #17a2b8 !important;
		}
	</style>
	<body ng-controller="townController">
		<?php include 'templateFiles/navbar.php';?>
		<div class="container-fluid">
			<div class="row">
				<div class="col-2 d-none d-md-block">
					<div class="card">
						<div class="card-body">
							ADVERTISEMENT PC
						</div>
					</div>
				</div>
				<div class="col-12 col-md-8">
					<div class="card">
						<div class="card-body">
							<button class="btn btn-info" ng-click="saveFile()">Save <i class="fas fa-download"></i></button>
							<label class="btn btn-info mb-0">
								Load <i class="fas fa-upload"></i></i>
								<input type="file" class="d-none" onchange="loadFile()" id="fileUpload">
								<input type="checkbox" class="d-none" id="triggerLoadFileCheckbox" ng-change="loadFile()" ng-model="triggerLoadFile">
							</label>
							<button class="btn btn-info" ng-click="toggleEdit()">Edit<i class="fas fa-edit px-2"></i></button>
							<button class="btn btn-info">New Town<i class="fas fa-sync px-2"></i></button>
						</div>
					</div>
					<br>
					<div class="card d-md-none">
						<div class="card-body">
							ADVERTISEMENT MOBILE
						</div>
					</div>
					<br class="d-md-none">
					<div class="card">
						<div class="card-header">
							<h3 class="text-center m-0">
							<textarea ng-model="townData.name" class="townData text-center" readonly='true'></textarea>
							</h3>
						</div>
						<div class="card-body p-0">
							<div class="row mx-0">
								<img class="col-12 col-md-6 p-0" src="images/town.jpg" alt="Image of City">
								<img class="col-12 col-md-6 p-0" src="images/town-map.png" alt="Map of City">
							</div>
						</div>
						<div class="card-footer">
							<textarea ng-model="townData.description" class="townData text-center" readonly='true'></textarea>
						</div>
					</div>
					<br>
					<div class="card">
						<div class="card-header">
							<h5 class="text-center">Buildings</h5>
						</div>
						<div class="card-body">
							<input type="search" class="form-control" placeholder="Search for building" ng-model="buildingSearchInput">
							<br>
							<table class="table">
								<thead>
									<tr>
										<td><b>#</b></td>
										<td><b>Building</b></td>
										<td><b>Name</b></td>
									</tr>
								</thead>
								<tbody>
									<tr ng-repeat="building in townData.buildings | filter:buildingSearchInput" >
										<td>
											<button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#buildingViewModal" ng-click="viewBuilding($index)">View</button>
										</td>
										<td><textarea ng-model="building.type" class="townData" readonly='true'></textarea></td>
										<td><textarea ng-model="building.name" class="townData" readonly='true'></textarea></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<br>
					<div class="card">
						<div class="card-header">
							<h5 class="text-center">People:</h5>
						</div>
						<div class="card-body">
							<input type="search" class="form-control" placeholder="Search for person" ng-model="peopleSearchInput">
							<br>
							<table class="table">
								<thead>
									<tr>
										<th><b>#</b></th>
										<th><b>Name</b></th>
										<th><b>Occupation</b></th>
										<th class="d-none d-md-table-cell"><b>Race</b></th>
										<th class="d-none d-md-table-cell"><b>Age</b></th>
									</tr>
								</thead>
								<tbody>
									<tr ng-repeat="person in townData.people | filter:peopleSearchInput" >
										<td>
											<button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#personViewModal" ng-click="viewPerson($index)">View</button>
										</td>
										<td><textarea ng-model="person.name" class="townData" readonly='true'></textarea></td>
										<td><textarea ng-model="person.job" class="townData" readonly='true'></textarea></td>
										<td class="d-none d-md-table-cell"><textarea ng-model="person.race" class="townData" readonly='true'></textarea></td>
										<td class="d-none d-md-table-cell"><textarea ng-model="person.age" class="townData" readonly='true'></textarea></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<br class="d-md-none">
					<div class="card d-md-none">
						<div class="card-body">
							ADVERTISEMENT MOBILE
						</div>
					</div>
				</div>
				<div class="col-2 d-none d-md-block">
					<div class="card">
						<div class="card-body">
							ADVERTISEMENT PC
						</div>
					</div>
				</div>
			</div>
			<br><br><br>
		</div>
		<!-- PEOPLE Modal -->
		<div class="modal fade" id="personViewModal" tabindex="-1" role="dialog">
			<div class="modal-dialog modal-lg" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">
						<textarea ng-model="townData.people[currentPerson].name" class="townData" readonly='true'></textarea>
						</h5>
						<button type="button" class="close" data-dismiss="modal"> <span>&times;</span> </button>
					</div>
					<div class="modal-body">
						<div class="row">
							<div class="col-12 d-md-none">
								<img class="img-fluid" src="images/human-woman.jpg">
							</div>
							<div class="col-12 col-md-6">
								<div class="row pl-md-3">


									<div class="attributeBox col-6">
										<div class="row">
											<div class="col-6">Race: </div>
											<div class="col-6">
												<textarea ng-model="townData.people[currentPerson].race" class="townData" readonly='true'></textarea>
											</div>
										</div>
									</div>


									<div class="attributeBox col-6">
										<div class="row">
											<div class="col-6">Age: </div>
											<div class="col-6">
												<textarea ng-model="townData.people[currentPerson].age" class="townData" readonly='true'></textarea>
											</div>
										</div>
									</div>


									<div class="attributeBox col-6">
										<div class="row">
											<div class="col-6"><i class="fas fa-hammer"></i> Job: </div>
											<div class="col-6">
												<textarea ng-model="townData.people[currentPerson].job" class="townData" readonly='true'></textarea>
											</div>
										</div>
									</div>


									<div class="attributeBox col-6">
										<div class="row">
											<div class="col-6"><i class="fas fa-comment"></i> Lng: </div>
											<div class="col-6">
												<textarea ng-model="townData.people[currentPerson].lng" class="townData" readonly='true'></textarea>
											</div>
										</div>
									</div>


									<div class="attributeBox col-4">
										<div class="row">
											<div class="col-6 pl-2 pr-2"><i class="fas fa-shield-alt"></i> AC: </div>
											<div class="col-6 pl-2 pr-2">
												<textarea ng-model="townData.people[currentPerson].AC" class="townData" readonly='true'></textarea>
											</div>
										</div>
									</div>


									<div class="attributeBox col-4">
										<div class="row">
											<div class="col-6 pl-2 pr-2"><i class="fas fa-heart"></i> HP: </div>
											<div class="col-6 pl-2 pr-2">
												<textarea ng-model="townData.people[currentPerson].HP" class="townData" readonly='true'></textarea>
											</div>
										</div>
									</div>


									<div class="attributeBox col-4">
										<div class="row">
											<div class="col-6 pl-2 pr-2"><i class="fas fa-shoe-prints"></i> SP: </div>
											<div class="col-6 pl-2 pr-2">
												<textarea ng-model="townData.people[currentPerson].SP" class="townData" readonly='true'></textarea>
											</div>
										</div>
									</div>


									<div class="attributeBox col-4">
										<div class="row">
											<div class="col-6 pl-2 pr-2"><i class="fas fa-fist-raised"></i> STR: </div>
											<div class="col-6 pl-2 pr-2">
												<textarea ng-model="townData.people[currentPerson].STR" class="townData" readonly='true'></textarea>
											</div>
										</div>
									</div>


									<div class="attributeBox col-4">
										<div class="row">
											<div class="col-6 pl-2 pr-2"><i class="fas fa-running"></i> DEX: </div>
											<div class="col-6 pl-2 pr-2">
												<textarea ng-model="townData.people[currentPerson].DEX" class="townData" readonly='true'></textarea>
											</div>
										</div>
									</div>


									<div class="attributeBox col-4">
										<div class="row">
											<div class="col-6 pl-2 pr-2"><i class="fas fa-paw"></i> CON: </div>
											<div class="col-6 pl-2 pr-2">
												<textarea ng-model="townData.people[currentPerson].CON" class="townData" readonly='true'></textarea>
											</div>
										</div>
									</div>


									<div class="attributeBox col-4">
										<div class="row">
											<div class="col-6 pl-2 pr-2"><i class="fas fa-book"></i> INT: </div>
											<div class="col-6 pl-2 pr-2">
												<textarea ng-model="townData.people[currentPerson].INT" class="townData" readonly='true'></textarea>
											</div>
										</div>
									</div>


									<div class="attributeBox col-4">
										<div class="row">
											<div class="col-6 pl-2 pr-2"><i class="fas fa-tree"></i> WIS: </div>
											<div class="col-6 pl-2 pr-2">
												<textarea ng-model="townData.people[currentPerson].WIS" class="townData" readonly='true'></textarea>
											</div>
										</div>
									</div>


									<div class="attributeBox col-4">
										<div class="row">
											<div class="col-6 pl-2 pr-2"><i class="fas fa-comments"></i> CHA: </div>
											<div class="col-6 pl-2 pr-2">
												<textarea ng-model="townData.people[currentPerson].CHA" class="townData" readonly='true'></textarea>
											</div>
										</div>
									</div>



								</div>
							</div>
							<div class="col-6 d-none d-md-inline">
								<img class="img-fluid" src="images/human-woman.jpg">
							</div>
							<hr class="col-12">
							<div class="col-12">
								<div class="card">
									<div class="card-header"><h6 class="text-center"><i class="fas fa-box-open"></i> Inventory:</h6></div>
									<div class="card-body p-0">
										<div class="row mx-0">
											<div class="col-6 col-md-3 attributeBox" ng-repeat="item in townData.people[currentPerson].inventory">
												<i ng-if="item.type == 'money'" class="fas fa-dollar-sign"></i>
												<i ng-if="item.type == 'armor'" class="fas fa-tshirt"></i>
												{{item.value}}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
						<button type="button" class="btn btn-primary">Save changes</button>
					</div>
				</div>
			</div>
		</div>
		<!-- BUILDING Modal -->
		<div class="modal fade" id="buildingViewModal" tabindex="-1" role="dialog">
			<div class="modal-dialog modal-lg" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">{{townData.buildings[currentBuilding].type}}
						<span ng-if="townData.buildings[currentBuilding].name"> -- {{townData.buildings[currentBuilding].name}}</span></h5>
						<button type="button" class="close" data-dismiss="modal"> <span>&times;</span> </button>
					</div>
					<div class="modal-body">
						<div class="row">
							<div class="col-12">
								<img class="img-fluid" src="images/tavern.jpg">
							</div>
							<div class="col-12" ng-if="townData.buildings[currentBuilding].description">
								<div class="text-center bg-light rounded p-2">
									<i>{{townData.buildings[currentBuilding].description}}</i>
								</div>
							</div>
							<hr class="col-12">
							<div class="col-12">
								<div class="card">
									<div class="card-header"><h6 class="text-center"><i class="fas fa-box-open"></i> Inventory:</h6></div>
									<div class="card-body p-0">
										<div class="row mx-0">
											<div class="col-6 col-md-3 attributeBox" ng-repeat="item in townData.buildings[currentBuilding].inventory">
												<i ng-if="item.type == 'money'" class="fas fa-dollar-sign"></i>
												<i ng-if="item.type == 'armor'" class="fas fa-tshirt"></i>
												{{item.value}}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
						<button type="button" class="btn btn-primary">Save changes</button>
					</div>
				</div>
			</div>
		</div>
		<script src="js/townData.js"></script>
	</body>
</html>