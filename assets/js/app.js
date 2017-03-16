var startLat;
var startLon;

window.onload = function() {

	var startPos;
 	var geoSuccess = function(position) {
    startPos = position;
    startLat = startPos.coords.latitude;
    startLon = startPos.coords.longitude;
    console.log("Lat: " + startLat);
    console.log("Lon: " + startLon);
  };

  navigator.geolocation.getCurrentPosition(geoSuccess); 
};

function getResults() {

	var userInput = $('#user-input').val().trim();
	var map;
	var service;
	var infowindow;

	initialize();

	function initialize() {
	  var userLocation = new google.maps.LatLng(startLat,startLon);

	  map = new google.maps.Map(document.getElementById('map'), {
	      center: userLocation,
	      zoom: 15
	    });

	  var request = {
	    location: userLocation,
	    radius: '50',
	    query: userInput
	  };

	  service = new google.maps.places.PlacesService(map);
	  service.textSearch(request, callback);
	}

	function callback(results, status) {
	  if (status == google.maps.places.PlacesServiceStatus.OK) {
	    for (var i = 0; i < results.length; i++) {
	      var place = results[i];
	      console.log(place);
	    }
	  }
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function displayMap() {
// 	var key = 'AIzaSyAftx3wdXh4yGewNPNh3wXMtIj-yoLj7bM'; //google maps api key
// 	var userInput = $("#user-input").val().trim();
// 	var source = 'https://www.google.com/maps/embed/v1/search?key=' + key + '&q=' + userInput;
// 	var maps = $('<iframe>');
// 	maps.attr('src', source);
// 	$("#map").append(maps);

// 	getResults();
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var queryURL = 'https://maps.googleapis.com/maps/api/place/textsearch/xml?query=' + userInput + '&key=' + key;
// console.log(queryURL);

// $.ajax({
// 	url: queryURL,
// 	method: 'GET'
// }).done(function(response){
// 	console.log(response.results);
// });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var source = 'https://www.google.com/maps/embed/v1/place?key=' + key + '&q=Space+Needle,Seattle+WA';
// record+stores+in+Seattle

// https://maps.googleapis.com/maps/api/place/textsearch/xml?query=gas%2078726&key=AIzaSyDoWJgdorZrPzcBPAAb75fAA6h-XhDy56E
//get gas near zip code - shows results

//https://developers.google.com/places/web-service/details