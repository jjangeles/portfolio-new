<?php
	function spanify($text) {
		$array = str_split($text);
		foreach ($array as $char) {
			echo "<span class='char'>$char</span>";
		}
	}
?>

<!DOCTYPE html>
<html>
<head>
	<?php require_once('partials/head.php'); ?>
</head>
<body id="portfolio" data-spy="scroll" data-target="#navbar" data-offset="200">

	<nav id="navbar" class="navbar navbar-dark fixed-top">
		<a class="navbar-brand" href="index.php"><img src="assets/images/logo.png"></a>
		<ul class="nav nav-pills">
			<li class="nav-item">
				<a class="nav-link active text-light" href="#portfolio">About</a>
			</li>
			<!-- <li class="nav-item">
				<a class="nav-link text-light" href="#projects">Projects</a>
			</li> -->
			<li class="nav-item">
				<a class="nav-link text-light" href="#contact-row">Contact</a>
			</li>
		</ul>
	</nav>

	<div class="container-fluid">
		<div id="about-row" class="row">
			<div id="about" class="col-md-10 offset-md-1">
				<div id="game-nav" class="d-none">
					<div class="scoreBox">
						<p>Score: <span id="score" class="">00000</span></p>
					</div>
					<div class="progress timer">
						<div id="health" class="progress-bar bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
					</div>
					<span id="vader-name">Darth Vader:</span>
				</div>
				<img id="my-pic" src="assets/images/mypic.jpg" class="animated slower">
				<img id="message" src="assets/images/message.png" class="d-none">
				<img id="dv" src="assets/images/dv.png" class="animated slower d-none darth">
				<div class="description">
					<h2 class="text-center text-light"><?php spanify("Hello! My name is John Jerome Angeles."); ?></h2>
					<p class="lead"><?php spanify("I am a full-stack web developer based in Manila, Philippines. I am very passionate about every project I create. I'm currently working as a backend developer for 'lookingfour.com', a 'recommerce' web platform for buying and selling new and used products. I specialize in Laravel framework with Elasticsearch as a search index. I also help out in the frontend development whenever they need an extra hand which gave me exposure to ReactJS. ") ?></p>
				</div>
				<button id="destroyBtn" type="button" class="btn btn-danger text-light font-weight-bold lead py-2 px-5">Play!</button>
				<img id="player" src="assets/images/x-wing.png" class="d-none">
			</div>
		</div>
		<!-- TODO: UPDATE OLD PROJECTS -->
		<!-- <div id="projects-row" class="row">
			<div id="projects" class="col-md-10 offset-md-1 mt-3 pb-5">
				<h1 class="font-weight-bold text-light mt-5">Projects</h1>

				<div class="project">
					<div class="project-description">
						<p class=""><span class="lead">TideHunter</span> - a website created for surfing enthusiasts in the Philippines. It is built with basic HTML and CSS.</p>
						<p class="m-0 small">Link: <a class="text-light" href="https://jjangeles.github.io/capstone1/" target="_blank">https://jjangeles.github.io/capstone1/</a></p>
					</div>
					<div id="tidehunter" class="project-image">
						<a class="text-light" href="https://jjangeles.github.io/capstone1/" target="_blank">
							<img src="assets/images/th.png">
						</a>
					</div>
				</div>

				<div class="project">
					<div id="tidehunter" class="project-image-left">
						<a class="text-light" href="https://sneaker-seeker.000webhostapp.com/app/views/index.php" target="_blank">
							<img src="assets/images/ss.png">
						</a>
					</div>
					<div class="project-description-left">
						<p class=""><span class="lead">SneakerSeeker</span> - a fully functional online sneaker store with admin accounts for inventory and user management. It also allows users to log-in using facebook.</p>
						<p class="m-0 small">Link: <a class="text-light" href="https://sneaker-seeker.000webhostapp.com/app/views/index.php" target="_blank">https://sneaker-seeker.000webhostapp.com/app/views/index.php</a></p>
					</div>
				</div>

				<div class="project">
					<div class="project-description">
						<p class=""><span class="lead">Coming Soon</span> - another awesome website yet to be hosted.</p>
						<p class="m-0 small">Link: </p>
					</div>
					<div id="tidehunter" class="project-image">
						<img src="assets/images/cs.png">
					</div>
				</div>

			</div>
		</div> -->
		<div id="contact-row" class="row text-center">
			<div id="contact" class="col-md-10 offset-md-1 mt-3 pb-5 d-flex align-items-center justify-content-center">
				<div>
					<h1 class='mb-5'>Contact Information</h1>
					<h3>Mobile Number: <b>+63-947-730-5745</b></h3>
					<h3>E-mail: <b>johnjeromeangeles@gmail.com</b></h3>
					<h3>LinkedIn: <b><a href="https://www.linkedin.com/in/john-jerome-angeles/">John Jerome Angeles</a></b></h3>
				</div>
			</div>
		</div>
	</div>

	<?php require_once('partials/footer.php'); ?>
</body>
</html>