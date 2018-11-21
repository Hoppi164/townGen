// Using leaflet.js to pan and zoom a big image.
// See also: http://kempe.net/blog/2014/06/14/leaflet-pan-zoom-image.html
// create the slippy map
var zoomableImages = document.getElementsByClassName('zoomableImage');
for (var i = 0; i < zoomableImages.length; i++) {
	zImage = zoomableImages[i];
	var mapurl = zImage.getAttribute('value');
	var map = L.map(zImage, {
		minZoom: -1,
		maxZoom: 10,
		center: [0, 0],
		zoom: 1,
		zoomControl: true,
		attributionControl: false,
		crs: L.CRS.Simple
	});
	// dimensions of the image
	var w = 320000,
		h = 150000,
		url = mapurl;
	// calculate the edges of the image, in coordinate space
	var southWest = map.unproject([0, h], map.getMaxZoom() - 1);
	var northEast = map.unproject([w, 0], map.getMaxZoom() - 1);
	var bounds = new L.LatLngBounds(southWest, northEast);
	// add the image overlay,
	// so that it covers the entire map
	L.imageOverlay(url, bounds).addTo(map);
	// tell leaflet that the map is exactly as big as the image
	map.setMaxBounds(bounds);
}