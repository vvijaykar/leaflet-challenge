var earthquakeLink = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson";

d3.json(earthquakeLink, function(data) {
    console.log(earthquakeLink)
    // Stores response into earthquakeData
    let earthquakeData = data;

function CreateMaps(earthquakes){

    var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.light",
    accessToken: API_KEY
  });

  var baseMaps = {
    "Light Map": lightMap
  };

  var overlayMaps = {
    "Earthquakes": earthquakes
  };

  var map = L.map("map-id", {
    center: [39.8283, -98.5785],
    zoom: 12,
    layers: [lightmap, earthquakes]
  });

  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(map);
}


}