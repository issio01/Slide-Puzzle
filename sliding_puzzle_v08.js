blank_position = 9;

 document.addEventListener("keydown", keyboardMove, false);

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

function swapBlankFor(position) {
	document.getElementsByClassName("position_" + position)[0].className = "tile position_" + blank_position;
	blank_position = position;
}

function move(div) {
	var class_name = div.className;
	var tile_position = parseInt(class_name.substring(14));

	if (adjacent(tile_position, blank_position) == true) {
		swapBlankFor(tile_position);
	}
	else if (twoTilesAway(tile_position, blank_position) == true) {
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
		if (adjacent(random_number, blank_position) == true) {
			swapBlankFor(random_number);
		}
	}
}

function inRange(position) {
	if (position >= 1 && position <= 9) {
		return true;
	}
}

function keyboardMove(event) {
	var key = event.keyCode;
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
	if(adjacent(tile_position, blank_position) == true) {
		swapBlankFor(tile_position);
	}
}

function changeTilePicture(div) {
	// document.getElementById("background").src = div.src;
	document.getElementById("top_left").src = div.src;
	document.getElementById("top_center").src = div.src;
	document.getElementById("top_right").src = div.src;
	document.getElementById("middle_left").src = div.src;
	document.getElementById("middle_center").src = div.src;
	document.getElementById("middle_right").src = div.src;
	document.getElementById("bottom_left").src = div.src;
	document.getElementById("bottom_center").src = div.src;
	document.getElementById("bottom_right").src = div.src;
}













