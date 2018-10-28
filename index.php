<html>
	<?php include 'templateFiles/head.php';?>
	<body>
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
							<button class="btn btn-info">Save<i class="far fa-save px-2"></i></button>
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
							<h3 class="text-center">Town-Name</h3>
						</div>
						<div class="card-body pt-0">
							<div class="row">
								<img class="col-12 col-md-6 p-0" src="images/city.png" alt="Image of City">
								<img class="col-12 col-md-6 p-0" src="images/map.png" alt="Map of City">
							</div>
							<hr>
							<div>
								<p>Brief Description of city</p>
							</div>
							<hr>
							<div>
								<label>Notable Buildings</label>
								<ul class="list-group">
									<li class="list-group-item">Large Bank</li>
									<li class="list-group-item">Haunted Bridge</li>
									<li class="list-group-item">Hunters Lodge</li>
								</ul>
							</div>
							<hr>
							<div>
								<label>People:</label>
								<table class="table">
									<thead>
										<tr>
											<th>#</th>
											<th>Name</th>
											<th>Occupation</th>
											<th class="d-none d-md-table-cell">Race</th>
											<th class="d-none d-md-table-cell">Age</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><button class="btn btn-secondary">View</button></td>
											<td>George Macdonald</td>
											<td>Blacksmith</td>
											<td class="d-none d-md-table-cell">Human</td>
											<td class="d-none d-md-table-cell">54</td>
										</tr>
										<tr>
											<td><button class="btn btn-secondary">View</button></td>
											<td>Tom Bloggs</td>
											<td>innkeeper</td>
											<td class="d-none d-md-table-cell">Human</td>
											<td class="d-none d-md-table-cell">23</td>
										</tr>
									</tbody>
								</table>
							</div>
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
			<br>
		</div>
	</body>
</html>