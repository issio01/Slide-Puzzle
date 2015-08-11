blank_position = 9;

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

function moveDirection(tile) {

}

function slideOntoBlank(position) {
	$(document).ready(function() {
		var tile = $(".position_" + position)

		if (position == blank_position + 1 && position != 4 && blank_position != 7) {
			$(document).ready(function() {
				tile.slideRight("slow", function() {
					swapBlankFor(position)
				})
			})
		}
		else if	(position == blank_position - 1 && position != 3 && position != 6) {
			return 'left';
		}
		else if (position == blank_position + 3) {
			return 'down';
		}
		else if (position == blank_position - 3) {
			return 'up';
		}
}

function swapBlankFor(position) {
	$(document).ready(function(){
		$(".position_" + position).attr("class", "tile position_" + blank_position);
	})
	blank_position = position;
}

function move(div) {
	var class_name = div.className;
	var tile_position = parseInt(class_name.substring(14));
	if (adjacent(tile_position, blank_position)) {
		swapBlankFor(tile_position);
	}
	else if (twoTilesAway(tile_position, blank_position)) {
		var middle_position = tileBetween(tile_position, blank_position);
		swapBlankFor(middle_position);
		swapBlankFor(tile_position);
	}
}

function getRandomIntegerBetween(min, max) {
	return Math.floor(Math.random() * (max - min +1)) + min;
}

function randomize(n) {
	for (var i = 0; i < n; i++) {
		random_number = getRandomIntegerBetween(1, 9);
		if (adjacent(random_number, blank_position)) {
			swapBlankFor(random_number);
		}
	}
}

function inRange(position) {
	if (position >= 1 && position <= 9) {
		return true;
	}
}












