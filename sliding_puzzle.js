blank_position = 9;

$(document).ready(function() {
	$(".tile").click(function() {
		move(this);
	})
})

$(document).ready(function() {
	$("#randomizer").click(function() {
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
		tile_position = blank_position - 1;
	}
	else if (key == 68) {
		tile_position = blank_position + 1;
	}
	tile = getTile(tile_position);
	move(tile);
})

function adjacent(position1, position2) {
	if ((position1 == position2 + 1 && position1 != 4 && position1 != 7)
		|| (position1 == position2 - 1 && position1 != 3 && position1 != 6)
		|| position1 == position2 + 3
		|| position1 == position2 - 3) {
		return true;
	}
}

 function twoTilesAway(position1, position2) {
	if (position1 == position2 + 6
		|| position1 == position2 - 6
		|| position1 == position2 + 2 && (position1 == 3 || position1 == 6 || position1 == 9)
		|| position1 == position2 - 2 && (position1 == 1 || position1 == 4 || position1 == 7)) {
		return true;
	}
}

function tileBetween(position1, position2) {
	for (var i = 1; i <= 9; i++) {	
		if (adjacent(position1, i) && adjacent(position2, i)) {
			return i;
		}
	}	
}

function getTilePosition(tile) {
	return parseInt($(tile).attr("class").substring(14));
}

function getTile(position) {
	return $(".position_" + position);
}

function swapBlankFor(position) {
	var tile = getTile(position);
	tile.attr("class", "tile position_" + blank_position);
	blank_position = position;
}

function slideTileToBlank(position) {
	var tile = getTile(position)
	if (position == blank_position + 1 && position != 4 && position != 7) {
		tile.animate({left:"-=169px"}, "fast");
	}
	else if	(position == blank_position - 1 && position != 3 && position != 6) {
		tile.animate({left:"+=169px"}, "fast");
	}
	else if (position == blank_position + 3) {
		tile.animate({top:"-=169px"}, "fast");
	}
	else if (position == blank_position - 3) {
		tile.animate({top:"+=169px"}, "fast");
	}
}

function move(div) {
	var tile_position = getTilePosition(div);
	if (adjacent(tile_position, blank_position)) {
		slideTileToBlank(tile_position);
		swapBlankFor(tile_position);
	}
	else if (twoTilesAway(tile_position, blank_position)) {
		var middle_position = tileBetween(tile_position, blank_position);
		slideTileToBlank(middle_position);
		swapBlankFor(middle_position);
		slideTileToBlank(tile_position)
		swapBlankFor(tile_position);
	}
}

// Returns a Random Integer Between the min and max values (Both Inclusive)
function getRandomIntegerBetween(min, max) {
	return Math.floor(Math.random() * (max - min +1)) + min;
}

// Randomizes the Tiles; ~30% chance that it will move a tile per each random number/iteration
function randomize(n) {
	for (var i = 0; i < n; i++) {
		random_number = getRandomIntegerBetween(1, 9);
		if (adjacent(random_number, blank_position)) {
			swapBlankFor(random_number);
		}
	}
}

// Checks to see if a position is within the tile positions 1 to 9
function inRange(position) {
	if (position >= 1 && position <= 9) {
		return true;
	}
}





