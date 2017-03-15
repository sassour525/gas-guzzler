function displayMap() {
	var key = 'AIzaSyDoWJgdorZrPzcBPAAb75fAA6h-XhDy56E'; //google maps api key
	var userInput = $("#user-input").val().trim();
	var source = 'https://www.google.com/maps/embed/v1/search?key=' + key + '&q=' + userInput;
	var map = $('<iframe>');
	map.attr('src', source);
	$("#map").append(map);
	getRatings(key, userInput);
}

function getRatings(key, userInput) {
	var queryURL = 'https://maps.googleapis.com/maps/api/place/textsearch/xml?query=' + userInput + '&key=' + key;
	console.log(queryURL);

	$.ajax({
		url: queryURL,
		method: 'GET'
	}).done(function(response){
		console.log(response.results);
	});
}


// var source = 'https://www.google.com/maps/embed/v1/place?key=' + key + '&q=Space+Needle,Seattle+WA';
// record+stores+in+Seattle

// https://maps.googleapis.com/maps/api/place/textsearch/xml?query=gas%2078726&key=AIzaSyDoWJgdorZrPzcBPAAb75fAA6h-XhDy56E
//get gas near zip code - shows results

//https://developers.google.com/places/web-service/details