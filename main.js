//mapboxgl.accessToken = 'pk.eyJ1IjoibWFhcnRqZWgiLCJhIjoiY2pwbzM3YzJpMDNvdzQybnFwenowZ254cCJ9.d5Crf3GgA4z8ZymF58Queg';

// Make a GEOJSON
var wurjson = {
    "type": "FeatureCollection",
    "name": "15yrMGI",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "fid": 0, "height": 60 }, "geometry": { "type": "Point", "coordinates": [5.66647, 51.98514] } },
        { "type": "Feature", "properties": { "fid": 1, "height": 45 }, "geometry": { "type": "Point", "coordinates": [5.66801, 51.9864] } },
        { "type": "Feature", "properties": { "fid": 2, "height": 100 }, "geometry": { "type": "Point", "coordinates": [5.66361, 51.98531] } },
        { "type": "Feature", "properties": { "fid": 3, "height": 30 }, "geometry": { "type": "Polygon", "coordinates": [[[5.66554, 51.98675], [5.66832, 51.9875], [5.66778, 51.98825], [5.66602, 51.98779], [5.66591, 51.98784], [5.66501, 51.98758], [5.66498, 51.98753], [5.66554, 51.98675]]] } }
    ]
};

var myStyle = {
	"version":8,
	"name": "Maartjes fancy stijl",
	//"sprite": "url", 
	//"glyphs": "url/{fontstack}/{range}.pbf",
    "sources": {
		"pdok":{
			"type": "vector",
			"tiles":  ["https://geodata.nationaalgeoregister.nl/beta/topotiles/{z}/{x}/{y}.pbf"]
		}
	},
    "layers":[ 
        { 
            "id":  "background",
            "type": "background",
            "paint": {
                "background-color":"#FFFFFF"
                }
        },
        {
            "id": "admin",
            "type": "fill",
            "source": "pdok",
            "source-layer": "admin",
            "maxzoom": 22,
            "minzoom": 0,
            "filter": ["==", "lod1", "province"],
            "paint": {
                "fill-color" :"#563650",
                "fill-outline-color": "#000000"
            }
        },
        {
            "id": "highway",
            "type": "fill",
            "source": "pdok",
            "source-layer": "infra",
            "maxzoom": 22,
            "minzoom": 0,
            "filter": ["==", "lod2", "highway"],
            "paint": {
                "fill-color" :"#ec0ec1"
            }
        },
        {
            "id": "arterial",
            "type": "fill",
            "source": "pdok",
            "source-layer": "infra",
            "maxzoom": 22,
            "minzoom": 0,
            "filter": ["==", "lod2", "arterial"],
            "paint": {
                "fill-color" :"#f64ed6"
            }
        },
        {
            "id": "local",
            "type": "fill",
            "source": "pdok",
            "source-layer": "infra",
            "maxzoom": 22,
            "minzoom": 0,
            "filter": ["==", "lod2", "local"],
            "paint": {
                "fill-color" :"#ffabef"
            }
        },		
        {
            "id": "water",
            "type": "fill",
            "source": "pdok",
            "source-layer": "water",
            "maxzoom": 22,
            "minzoom": 0,
            //"filter": ["==", "lod1", "water_surface"],
            "paint": {
                "fill-color" :"#bd6fff"
            }
        },		
        {
            "id": "water2",
            "type": "fill",
            "source": "pdok",
            "source-layer": "water-line",
            "maxzoom": 22,
            "minzoom": 0,
            //"filter": ["==", "lod1", "water_surface"],
            "paint": {
                "fill-color" :"#bd6fff"
            }
        },	
        {
            "id": "buildings",
            "type": "fill",
            "source": "pdok",
            "source-layer": "urban",
            "maxzoom": 22,
            "minzoom": 0,
            "filter": ["==", "lod1", "buildings"],
            "paint": {
                "fill-color" :"#d537ff"
            }
        },		
        {
            "id": "railways",
            "type": "fill",
            "source": "pdok",
            "source-layer": "infra",
            "maxzoom": 22,
            "minzoom": 0,
            "filter": ["==", "lod1", "railway"],
            "paint": {
                "fill-color" :"#ffe3fe"
            }
        }
    ]
}

var map = new mapboxgl.Map({
    container: 'map',
    style: myStyle,
    hash: true,
    zoom: 15,
    pitch: 60,
    bearing: 0,
    center: [ 6.09349, 52.50976]
});

// On Load add GeoJSON SOURCE and LAYER
// map.on('load', function (e) {
    // // ADD GEOJSON SOURCE
    // map.addSource('punten', {
        // 'type': 'geojson',
        // 'data': wurjson
    // });
    // // ADD an extra layer
    // map.addLayer({
        // 'id': 'geojson-points',
        // 'type': 'circle',
        // 'source': 'punten',
        // 'layout': {},
        // 'paint': {
            // 'circle-color': '#000fff',
            // 'circle-radius': 10
        // }
    // });
// });
