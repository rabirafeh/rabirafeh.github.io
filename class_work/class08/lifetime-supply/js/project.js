var result = document.getElementById('click-me').onclick = lifeTimeCups;

function lifeTimeCups() {
	var age = document.getElementById('age').value;
	var maxAge = document.getElementById('max-age').value;
	var item =  document.getElementById('item').value;
	var numPerDay = document.getElementById('num-per-day').value;

	var cupResult = (maxAge - age) * (numPerDay * 365); 

	console.log(age, maxAge, item, numPerDay, cupResult);

	document.getElementById('solution').innerHTML = cupResult; 
	document.getElementById('drink').innerHTML = item; 
}

// console.log('testing is this file is working');