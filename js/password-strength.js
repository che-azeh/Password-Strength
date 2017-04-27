/*
	Password Strength Checker by Cedric Che-Azeh @che_azeh
*/
function scorePassword(pass) {
	var score = 0;
	if (!pass)
		return score;

	/* 
	- Certain characters types score higher than others: lowercase
		alphabets score lowest, special characters score highest
	- Two characters of the same type appearing consecutively score
		lower than two characters of different types
	*/

	var prevChar = ""; // Previous character
	for (var i=0; i<pass.length; i++) {
		if ( /\d/.test( pass[i] ) )
			score += /\d/.test(prevChar) ? 2 : 4;
		else if ( /[a-z]/.test( pass[i] ) )
			score += /[a-z]/.test( prevChar ) ? .5 : 2;
		else if ( /[A-Z]/.test( pass[i] ) )
			score += /[A-Z]/.test( prevChar ) ? 1 : 4;
		else if ( /\W/.test( pass[i] ) )
			score += /\W/.test( prevChar ) ? 2 : 5;
		prevChar = pass[i];

	}
	return score * 2;
}