function initMap() {
	// add your code here
	L.mapquest.key = '2JGikhvmYumHCiebDJg3lKZwjKAQkFU6';

	var map = L.mapquest.map('map', {
		center: [32.87854871709551, -117.23582485557856],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.88, -117.236]).addTo(map);
}