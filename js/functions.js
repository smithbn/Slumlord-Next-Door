$(window).load(function() {
	$("#page1.tabInfo").addClass("show");
	$("#about").addClass("hide");
	$("#data").addClass("hide");
	$("#top8Nav").addClass("hide");
});

$(document).ready(function() {
	
	//$(".map-title-loaded").mouseover(moveToolTip());
	
	$("#page1.tabInfo").addClass("show");
	$("#about").addClass("hide");
	$("#data").addClass("hide");
	$("#top8Nav").addClass("hide");
	
	// *** 2) jQuery click function ***
	$('#nav a').click(function (e) {
		e.preventDefault();
		layer = this.id;
		$('#nav a').removeClass('active');
		$(this).addClass('active');
		$('#top8Nav').removeClass("show");
		//$('.wax-legend').css("display","block");
		refreshMap();
	});
	
	$('.slumlord a').click(function (e) {
		e.preventDefault();
		layer = this.id;
		$('.slumlord a').removeClass('active');
		$(this).addClass('active');
		refreshMap();
	});
	
	$('.tabNav a').click(function (e) {
		$('.tabNav a').removeClass('active');
		$('.tabInfo').addClass('show');
		$(this).addClass('active');
		pageNum = $(this).prop('id'); 
		showPage(pageNum);
	});
	
	//$("#TOP8MAPIDGOESHERE").click(function(e) {
	$(".top8link").click(function(e) {
		$('#top8Nav').addClass('show');
	});
	
	$('#aboutButton').click(function (e) {
		$('#about').addClass('show');
	});
	
	$('#browseButton').click(function (e) {
		$('#mymap').css('max-height', '400px');
		$('#data').addClass('show');
		$('#top8Nav').removeClass('show');
		drawVisualization();
		
		var position = $("#data").offset();
		window.scrollTo(data.left, data.top - 10);
	});
	
	$('#lessButton').click(function (e) {
		$('#mymap').css('max-height', '100%');
		$('#data').removeClass('show');
	});
	
	$('.closeButton').click(function (e) {
		$('#about').removeClass('show');
	});
	
	
});

// *** 3) Function to refresh the map ***
function refreshMap() {
	url = urlBase + layer + '.jsonp';
	wax.tilejson(url, function(tilejson) {
		map.setLayerAt(0, new wax.mm.connector(tilejson));
		interaction.tilejson(tilejson);
	});
}

function showPage(pageNum) {
	var name = "#page" + pageNum;
	$(".tabBox").find(".tabInfo").each(function () {
		$(".tabInfo").removeClass("show");
		$(name).addClass("show");
	});
}
