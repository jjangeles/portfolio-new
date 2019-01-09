$(document).ready(function() {

	function pad(n, width, z) {
		z = z || '0';
		n = n + '';
		return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
	}

	function animateScript() {
		$(".explode").each(function() {
			current = $(this).css("backgroundPosition").split(" ")[0].replace("%", "");
			if (current == "-240px") {
				$(this).remove();
				return;
			}
			current = parseInt(current) - 48;
			$(this).css("backgroundPosition", + current + "px 0px");
		});

	// document.getElementById("image").style.backgroundPosition = 
	// `-256px 0px`;
	}

	$(".nav .nav-link").on("click", function(){
	    $(".nav").find(".active").removeClass("active");
	    $(this).addClass("active");
	});

	$("#destroyBtn").on("click", function(e) {

		e.stopPropagation();
		$("#message").removeClass("d-none");
		$("#my-pic").addClass("bounceOutUp");
		$(this).addClass("d-none");
		let score = 0;
		let game;

		function gameStart(){

			$(".bullet").each(function() {
				if ($(this).offset().top > 0) {
					$(this).css("top", $(this).offset().top - 50);
				} else {
					$(this).remove()
				}
			});
			$(".char").each(function() {
				let rect = this.getBoundingClientRect();
				let x = rect.left;
				let y = rect.top;
				let positionX = $(this).offset().left;
				let positionY = $(this).offset().top;
				let topElt = document.elementFromPoint(x,y);
				if(!this.isSameNode(topElt)) {
					if (topElt.classList.contains("bullet")) {
						// console.log($(this))
						score += 5;
						$("#score").text(pad(score, 5));
						$("#about").append("<p class='explode'></p>");
						$(".explode").last().css("left", positionX - 144);
						$(".explode").last().css("top", positionY - 96);
						$(".explode").last().css("transform", "rotate(55deg)");
					}
					$(this).addClass("hidden");
					$(this).removeClass("char");
				}
			});
			$(".bullet").each(function() {
				let rect = this.getBoundingClientRect();
				let x = rect.left;
				let y = rect.top;
				let positionX = $(this).offset().left;
				let positionY = $(this).offset().top;
				let topElt = document.elementFromPoint(x,y);
				if(!this.isSameNode(topElt)) {
					if (topElt.classList.contains("bullet")) {
						score += 5;
						$("#score").text(pad(score, 5));
						$("#about").append("<p class='explode'></p>");
						$(".explode").last().css("left", positionX - 144);
						$(".explode").last().css("top", positionY - 96);
						$(".explode").last().css("transform", "rotate(55deg)");
					} else if (topElt.classList.contains("darth")) {
						topElt.classList.contains("darth")
						score += 20;
						health = $("#health").attr("aria-valuenow");
						health -= 10;

						if (health <= 0) {
							$("#about").off("click");
							$("#dv").addClass("bounceOutUp");
							setTimeout(function() {
								$("#my-pic").removeClass("bounceOutUp").addClass("bounceInDown");
								$("#message").attr("src", "assets/images/message2.png");
								$("#message").removeClass("d-none");
								$("#message").css("width", "300px");
								clearInterval(game);
							}, 2000);
						}	

						if (health <= 50 && health > 20) {
							$("#health").removeClass("bg-success").addClass("bg-warning");
						} else if (health <= 20) {
							$("#health").removeClass("bg-warning").addClass("bg-danger");
						}
						$("#health").attr("aria-valuenow", health).css("width", health + "%");
						$("#score").text(pad(score, 5));
						$("#about").append("<p class='explode'></p>");
						$(".explode").last().css("left", positionX - 144);
						$(".explode").last().css("top", positionY - 50);
						$(".explode").last().css("transform", "rotate(55deg)");
					}

					$(this).addClass("d-none");
				}
			});

			/*let darth = document.getElementById("dv");
			let rect = darth.getBoundingClientRect();
			let x = rect.left;
			let y = rect.top;
			let positionX = $("#dv").offset().left;
			let positionY = $("#dv").offset().top;
			let topElt = document.elementFromPoint(x,y);
			if (!darth.isSameNode(topElt)) {

				if (topElt.classList.contains("bullet")) {
					console.log(topElt);
					console.log("test");
				}
			}*/
			animateScript();
		}

		setTimeout(function() {

			$("#message").addClass("d-none");
			$("#dv").addClass("bounceInDown");
			$("#dv").removeClass("d-none");
			$("#game-nav").removeClass("d-none");
			$("#about").addClass("gameOn");
			$("#player").removeClass("d-none");

			var x;
			$("#about").on("mousemove", function(e) {
				x = e.pageX - $("#about").offset().left;
				$("#player").css("left", x);
				$("#player").css("transform", "translateX(-50%)");
			}).on("click", function() {
				$(this).append("<img class='bullet1 bullet' src='assets/images/bullet.png'>");
				$(this).append("<img class='bullet2 bullet' src='assets/images/bullet.png'>");
				$(".bullet1").last().css("left", x + ($("#player").width()/2));
				$(".bullet2").last().css("left", x - ($("#player").width()/2));
			});

			game = setInterval(gameStart, 50)

		}, 2000)
	});
});