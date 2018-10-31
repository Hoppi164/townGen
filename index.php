<!-- NOTE TO SELF: HAVE USER DOWNLOAD JSON FILE OF SCOPE -->
<!-- This is how they 'save' and 'load' their towndata -->
<html ng-app="townApp">
	<?php include 'templateFiles/head.php';?>
	<style>
		.attributeBox{
			position: relative;
			display: block;
			padding: 0.75rem 1.25rem;
			margin-bottom: -1px;
			background-color: #fff;
			border: 1px solid rgba(0, 0, 0, 0.125);
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
							<input type="file" id="selectFiles" value="Import" /><br />
							<button class="btn btn-info" ng-click="loadFile()">Load <i class="fas fa-upload"></i></i></button>
							<button class="btn btn-info">Edit<i class="fas fa-edit px-2"></i></button>
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
							<h3 class="text-center">
							{{townData.name}}
							</h3>
						</div>
						<div class="card-body p-0">
							<div class="row mx-0">
								<img class="col-12 col-md-6 p-0" src="images/town.jpg" alt="Image of City">
								<img class="col-12 col-md-6 p-0" src="images/town-map.png" alt="Map of City">
							</div>
						</div>
						<div class="card-footer">
							<p>{{townData.description}}</p>
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
										<td>{{building.type}}</td>
										<td>{{building.name}}</td>
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
										<td>{{person.name}}</td>
										<td>{{person.job}}</td>
										<td class="d-none d-md-table-cell">{{person.race}}</td>
										<td class="d-none d-md-table-cell">{{person.age}}</td>
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
						<h5 class="modal-title">{{townData.people[currentPerson].name}}</h5>
						<button type="button" class="close" data-dismiss="modal"> <span>&times;</span> </button>
					</div>
					<div class="modal-body">
						<div class="row">
							<div class="col-12 d-md-none">
								<img class="img-fluid" src="images/human-woman.jpg">
							</div>
							<div class="col-12 col-md-6">
								<div class="row pl-md-3">
									<li class="attributeBox col-6">Race: {{townData.people[currentPerson].race}}</li>
									<li class="attributeBox col-6">Age: {{townData.people[currentPerson].age}}</li>
									<li class="attributeBox col-6"><i class="fas fa-hammer"></i> Job: {{townData.people[currentPerson].job}}</li>
									<li class="attributeBox col-6"><i class="fas fa-comment"></i> Lng: {{townData.people[currentPerson].lng}}</li>
									<li class="attributeBox col-4"><i class="fas fa-shield-alt"></i> AC: {{townData.people[currentPerson].AC}}</li>
									<li class="attributeBox col-4"><i class="fas fa-heart"></i> HP: {{townData.people[currentPerson].HP}}</li>
									<li class="attributeBox col-4"><i class="fas fa-shoe-prints"></i> SP: {{townData.people[currentPerson].SP}}</li>
									<hr class="col-12">
									<li class="attributeBox col-4"><i class="fas fa-fist-raised"></i> STR: {{townData.people[currentPerson].STR}}</li>
									<li class="attributeBox col-4"><i class="fas fa-running"></i> DEX: {{townData.people[currentPerson].DEX}}</li>
									<li class="attributeBox col-4"><i class="fas fa-paw"></i> CON: {{townData.people[currentPerson].CON}}</li>
									<li class="attributeBox col-4"><i class="fas fa-book"></i> INT: {{townData.people[currentPerson].INT}}</li>
									<li class="attributeBox col-4"><i class="fas fa-tree"></i> WIS: {{townData.people[currentPerson].WIS}}</li>
									<li class="attributeBox col-4"><i class="fas fa-comments"></i> CHA: {{townData.people[currentPerson].CHA}}</li>
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