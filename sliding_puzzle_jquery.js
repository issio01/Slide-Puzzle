$(document).ready(function() {
	$(".tile").click(function() {
		move(this);
	})
})

$(document).ready(function() {
	$("#randomizer").click(function(){
		randomize(500);
	})
})

$(document).ready(function() {
	$(".thumbnail").click(function(){
		$("#top_left").attr("src", $(this).attr("src"));
		$("#top_center").attr("src", $(this).attr("src"));
		$("#top_right").attr("src", $(this).attr("src"));
		$("#middle_left").attr("src", $(this).attr("src"));
		$("#middle_center").attr("src", $(this).attr("src"));
		$("#middle_right").attr("src", $(this).attr("src"));
		$("#bottom_left").attr("src", $(this).attr("src"));
		$("#bottom_center").attr("src", $(this).attr("src"));
		$("#bottom_right").attr("src", $(this).attr("src"));
	})
})

$(document).keydown(function(event) {
	var key = event.which;
	var tile_position;
	if (key == 87) {
		tile_position = blank_position - 3;
	}
	else if (key == 83) {
		tile_position = blank_position + 3;
	}
	else if (key == 65) {
		tile_position= blank_position - 1;
	}
	else if (key == 68) {
		tile_position= blank_position + 1;
	}
	if(adjacent(tile_position, blank_position) && inRange(tile_position)) {
		swapBlankFor(tile_position);
	}
})


