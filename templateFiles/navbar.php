<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
	<a class="navbar-brand" href="#">Town Generator</a>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
	<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
		<ul class="navbar-nav mr-auto mt-2 mt-lg-0">
			<li class="nav-item">
				<a class="nav-link disabled" href="#">Character Sheet (Coming Soon)</a>
			</li>
			<li class="nav-item mt-1 mt-md-0 ml-0 ml-md-1">
				<button class="btn btn-info w-100" ng-click="saveFile()">Save <i class="fas fa-download"></i></button>
			</li>
			<li class="nav-item mt-1 mt-md-0 ml-0 ml-md-1">
				<label class="btn btn-info mb-0 w-100">
					Load <i class="fas fa-upload"></i></i>
					<input type="file" class="d-none" onchange="loadFile()" id="fileUpload">
					<input type="checkbox" class="d-none" id="triggerLoadFileCheckbox" ng-change="loadFile()" ng-model="triggerLoadFile">
				</label>
			</li>
			<li class="nav-item mt-1 mt-md-0 ml-0 ml-md-1">
				<button class="btn btn-info w-100" ng-click="toggleEdit()">Edit Town<i class="fas fa-edit px-2"></i></button>
			</li>
			<li class="nav-item mt-1 mt-md-0 ml-0 ml-md-1">
				<button class="btn btn-info w-100" onclick="location.reload()">New Town<i class="fas fa-sync px-2"></i></button>
			</li>
		</ul>
		<!-- 		<form class="form-inline my-2 my-lg-0">
			<input class="form-control mr-sm-2" type="search" placeholder="Search">
			<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
		</form> -->
	</div>
</nav>
<br>