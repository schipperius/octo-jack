var jekyllMapping = (function () {
  return {
    mappingInitialize: function () {
      var maps = document.getElementsByClassName("jekyll-mapping");
      for ( var i = 0; i < maps.length; i++ ) {
        var zoom      = maps[i].getAttribute("data-zoom"),
            lat       = maps[i].getAttribute("data-latitude"),
            lon       = maps[i].getAttribute("data-longitude"),
            layers    = maps[i].getAttribute("data-layers"),
            title     = maps[i].getAttribute("data-title"),
            options   = {
            zoom: parseFloat(zoom),
            mapTypeId: google.maps.MapTypeId.ROADMAP
            }, mainMarker;

        if (lat  && lon) {
            options.center = new google.maps.LatLng(lat, lon);
            map = new google.maps.Map(maps[i], options);
            mainMarker = new google.maps.Marker({
                position: options.center,
                map: map,
                title: title
            });
        } else {
            options.center = new google.maps.LatLng(0, 0);
            map = new google.maps.Map(maps[i], options);
        }

// Creating a latitude and longitude for the center of the map
var latLong = new google.maps.LatLng(25.95, 32.416667);

// Creating an object literal that contains the properties we want to pass to the map.
var mapOptions = {
  center: latLong,
  zoom: 4,
  mapTypeId: google.maps.MapTypeId.TERRAIN
};

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

if (layers) {
    layers = layers.split(' ');
    var mapLayers = [];
    while (layers.length > 0){
        var m = new google.maps.KmlLayer(layers.pop());
        mapLayers.push(m);
        m.setMap(map);
      }
    }
  }
},
loadScript: function () {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://maps.googleapis.com/maps/api/js?key=" +
        jekyllMappingAPIKey +
        "&sensor=false&callback=jekyllMapping.mappingInitialize";
    document.body.appendChild(script);
    }
  };
}());

window.onload = function() { jekyllMapping.loadScript(); };
