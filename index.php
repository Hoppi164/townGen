<html>
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
						<div class="card-body p-0">
							<div class="row mx-0">
								<img class="col-12 col-md-6 p-0" src="images/town.jpg" alt="Image of City">
								<img class="col-12 col-md-6 p-0" src="images/town-map.png" alt="Map of City">
							</div>
						</div>
						<div class="card-footer">
							<p>Brief Description of city</p>
						</div>
					</div>
					<br>
					<div class="card">
						<div class="card-header">
							<h5 class="text-center">Buildings</h5>
							
						</div>
						<div class="card-body">
							
							<ul class="list-group">
								<li class="list-group-item">Large Bank</li>
								<li class="list-group-item">Haunted Bridge</li>
								<li class="list-group-item">Hunters Lodge</li>
							</ul>
						</div>
					</div>
					<br>
					<div class="card">
						<div class="card-header">
							<h5 class="text-center">People:</h5>
							
						</div>
						<div class="card-body">
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
										<td>
											<button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#personViewModal">View </button>
										</td>
										<td>George Macdonald</td>
										<td>Blacksmith</td>
										<td class="d-none d-md-table-cell">Human</td>
										<td class="d-none d-md-table-cell">54</td>
									</tr>
									<tr>
										<td>
											<button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#personViewModal">View </button>
										</td>
										<td>Tom Bloggs</td>
										<td>innkeeper</td>
										<td class="d-none d-md-table-cell">Human</td>
										<td class="d-none d-md-table-cell">23</td>
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
						<h5 class="modal-title">Person's Name</h5>
						<button type="button" class="close" data-dismiss="modal"> <span>&times;</span> </button>
					</div>
					<div class="modal-body">
						<div class="row">
							<div class="col-12 d-md-none">
								<img class="img-fluid" src="images/human-woman.jpg">
							</div>
							<div class="col-12 col-md-6">
								<div class="row pl-md-3">
									<li class="attributeBox col-6">Race: Human</li>
									<li class="attributeBox col-6">Age: 28</li>
									<li class="attributeBox col-6"><i class="fas fa-hammer"></i> Job: Merchant</li>
									<li class="attributeBox col-6"><i class="fas fa-comment"></i> Lan: Common</li>
									<li class="attributeBox col-4"><i class="fas fa-shield-alt"></i> AC: 10</li>
									<li class="attributeBox col-4"><i class="fas fa-heart"></i> HP: 4</li>
									<li class="attributeBox col-4"><i class="fas fa-shoe-prints"></i> SP: 30</li>
									<hr class="col-12">
									<li class="attributeBox col-4"><i class="fas fa-fist-raised"></i> STR: 10</li>
									<li class="attributeBox col-4"><i class="fas fa-running"></i> DEX: 10</li>
									<li class="attributeBox col-4"><i class="fas fa-paw"></i> CON: 10</li>
									<li class="attributeBox col-4"><i class="fas fa-book"></i> INT: 10</li>
									<li class="attributeBox col-4"><i class="fas fa-tree"></i> WIS: 10</li>
									<li class="attributeBox col-4"><i class="fas fa-comments"></i> CHA: 10</li>
								</div>
							</div>
							<div class="col-6 d-none d-md-inline">
								<img class="img-fluid" src="images/human-woman.jpg">
							</div>
							<hr class="col-12">
							<div class="col-12">
								<h6 class="text-center"><i class="fas fa-box-open"></i> Inventory:</h6>
								<table class="table">
									<tr>
										<td class="text-center">
											<span class="fa-stack fa-1x">
												<i class="fas fa-circle fa-stack-2x"></i>
												<i class="fas fa-dollar-sign fa-stack-1x fa-inverse"></i>
											</span> 10 Copper
										</td>
										<td class="text-center">test</td>
										<td class="text-center">test</td>
									</tr>
									<tr>
										<td class="text-center">test</td>
										<td class="text-center">test</td>
										<td class="text-center">test</td>
									</tr>
									<tr>
										<td class="text-center">test</td>
										<td class="text-center">test</td>
										<td class="text-center">test</td>
									</tr>
								</table>
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
	</body>
</html>