function HSLtoRGB(H,S,L) {
	var C = (1 - Math.abs(2*L - 1))*S;
	var HP = H/60;
	var X = C*(1 - Math.abs(HP%2 - 1));

	if(0 <= HP && HP < 1) {
		var RGBp = {R:C, G:X, B:0};
	}
	else if(1 <= HP && HP < 2) {
		var RGBp = {R:X, G:C, B:0};
	}
	else if(2 <= HP && HP < 3) {
		var RGBp = {R:0, G:C, B:X};
	}
	else if(3 <= HP && HP < 4) {
		var RGBp = {R:0, G:X, B:C};
	}
	else if(4 <= HP && HP < 5) {
		var RGBp = {R:X, G:0, B:C};
	}
	else if(5 <= HP && HP < 6) {
		var RGBp = {R:C, G:0, B:X};
	}
	else {
		var RGBp = {R:0, G:0, B:0};
	}

	var m = L - 0.5*C;

	var RGB = {
		R: Math.floor((RGBp.R + m)*255),
		G: Math.floor((RGBp.G + m)*255),
		B: Math.floor((RGBp.B + m)*255)
	};

	return RGB;
}