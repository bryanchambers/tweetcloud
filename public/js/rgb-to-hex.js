function RGBtoHEX(RGB) {
	var HEX = getHEX(RGB.R) + getHEX(RGB.G) + getHEX(RGB.B);
	HEX = '#' + HEX;
	
	return HEX;
}