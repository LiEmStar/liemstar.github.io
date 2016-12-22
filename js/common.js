$(document).ready(function() {


	$(".main-mnu a").mPageScroll2id({
			highlightSelector:".main-mnu a"
	});
				

						//Waypoints section 4
						
	$(".section-content .info-item").equalHeights();
	$(".s1-bottom .info-item").equalHeights();

	$(".section_4").waypoint(function() {

		$(".section_4 .wrapper_s4_content").each(function(tualet) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("wrapper_s4_content-off").addClass("wrapper_s4_content-on");
			}, 200*tualet);
		});
		
	}, {
		offset : "20%"
	});



					//Waypoints section 5

var waypointsvg = new Waypoint({

	element: (".section_5"),
	handler: function(vorona) {

		if (vorona === "down") {

		$(".section_5 .tc-content").each(function(tualet) {
			var ths = $(this);
			setTimeout(function() {
				var MyAnimation = new DrawFillSVG({
					elementId: "tc-svg-" + tualet
				});
			}, 200*tualet);
		});
	};
	this.destroy();
	},
		offset : "50%"
});

	$(".section_6").waypoint(function() {

		$(".section_6 .team").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("team-off").addClass("team-on");
			}, 200*index);
		});
		
	}, {
		offset : "20%"
	});

				//Toogle-mnu

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});

	$(".main-footer .toggle-mnu").click(function() {
  	$("html, body").animate({ scrollTop: $(document).height() }, 1000);
  	return false;
	});

	//OwlCarousel
	$(".slider").owlCarousel({
		items : 1,
		nav : true,
		navText : "",
		loop : true,
		autoplay : true,
		smartSpeed : 600,
		fluidSpeed : 600,
		autoplaySpeed : 600,
		navSpeed : 600,
		dotsSpeed : 600,
		dragEndSpeed : 600
	});

				// Scroll for page

	$(".arrow-bottom").click(function() {
  	$("html, body").animate({ scrollTop: $(".main-head").height()+170 }, 1000);
	});

			// Scroll for bottom-top

	$(".bottom-top").click(function() {
  	$("html, body").animate({ scrollTop: 0 }, 1000);
	});


			// Animation for page
	$(".sect-head h2, .sect-head p").animated("zoomInDown");
	$(".info-item-wrap").animated("rollIn");
	$(".section_8 .forms").animated("fadeInRight");

$(".section_2").waypoint(function() {
	$(".s2-item-wrap").each(function(tualet) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 200*tualet);
		});
		
	}, {
		offset : "20%"
	});

$(".section_8").waypoint(function() {
	$(".card").each(function(tualet) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 200*tualet);
		});
		
	}, {
		offset : "20%"
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

			// Magnific popup

$('.homesect .section-bottom .buttons').click(function() {
	$("#callback h4").html($(this).text());
	$("#callback input[name=formname]").val($(this).text());
}).magnificPopup({
  type: "inline",
  mainClass: 'mfp-forms'
});

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".forms").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за заявку. В скором времени мы вам перезвоним!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});




});
