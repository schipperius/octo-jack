var jekyllMapping = (function () {
    return {
			function initialize() {

// Creating a latitude and longitude for the center of the map
var latLong = new google.maps.LatLng(25.95, 32.416667);

// Creating an object literal that contains the properties we want to pass to the map.
var mapOptions = {
  center: latLong,
  zoom: 4,
  mapTypeId: google.maps.MapTypeId.TERRAIN
};

// Creating the map.
var map = new google.maps.Map(document.getElementById("map_canvas"),
      mapOptions);

// Adding a marker to the map.
LatLong = new google.maps.LatLng(25.95, 32.416667);
var marker = new google.maps.Marker({
  position: LatLong,
  map: map,
  title: "Wadi el-Hol"
});

// Adding a click event to the marker
google.maps.event.addListener(marker, "click", function() {
  infoPopup.open(map,marker);
});

// Adding a description to the map.
var Description = 
	"<h4>Wadi el-Hol</h4>" +
	"<p>I'm standing here, along an ancient road at the Wadi el-Hol (Valley of Terror) , just west of the Nile, and north of Luxor, where soldiers, and caravans of traders and mercenaries once traveled between the ancient cities of Thebes and Abydos.</p>";
var infoPopup = new google.maps.InfoWindow({
  content: Description
});

}

window.onload = function() { jekyllMapping.loadScript(); };
