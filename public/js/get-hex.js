function getHEX(DEC) {
	if(DEC > 255) { DEC = 255; }

	var HEX = DEC.toString(16);
	if(HEX.length == 1) { HEX = '0' + HEX; }

	return HEX;
}