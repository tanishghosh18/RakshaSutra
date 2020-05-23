// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAv1kwF8TdBfvvxipHEAl1zW8sAd3876iw&callback=initMap';
script.defer = true;
script.async = true;

// Attach your callback function to the `window` object
function initMap() {
    var map, infoWindow;
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: +position.coords.latitude,
                lng: +position.coords.longitude
            };

            map = new google.maps.Map(document.getElementById('map'), {
                center: pos,
                zoom: 15,
            });

            console.log(pos);
            var marker = new google.maps.Marker({
                position: pos,
                map: map,
                title: 'My Location'
            });
            marker.setMap(map);

            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length],
                });
            });


            var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });


            // var markerCluster = new MarkerClusterer(map, markers, clusterStyles);


            // infoWindow.setPosition(pos);
            // infoWindow.setContent('My Location');
            // infoWindow.open(map);
            // map.setCenter(pos);

        }, function() {
            handleLocationError(true, map.getCenter());
        }, { timeout: 10000 });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, pos) {
    alert('Error: The Geolocation service failed. Error: Your browser doesn\'t support geolocation.');
}
document.head.appendChild(script);

var locations = [
    { lat: 26.1437697, lng: 91.5617644 },
    { lat: 26.15195, lng: 91.7671822 },
    { lat: 26.15236, lng: 91.7682792 },
    { lat: 26.15236, lng: 91.7682792 },
    { lat: 26.15236, lng: 91.7682792 },
    { lat: 26.15236, lng: 91.7682792 },
    { lat: 26.15236, lng: 91.7682792 },
    { lat: 26.15236, lng: 91.7682792 },
    { lat: 26.15236, lng: 91.7682792 },
    { lat: 26.15236, lng: 91.7682792 },
    { lat: 26.15236, lng: 91.7682792 },
    { lat: 26.15236, lng: 91.7682792 },
    { lat: 26.1653026, lng: 91.7575289 },
    { lat: 26.170796, lng: 91.767090 },
    { lat: 26.1705957, lng: 91.7662831 },
]

var clusterStyles = {
    styles: [{
            textColor: 'white',
            height: 50,
            url: 'm1.png',
            width: 50
        },
        {
            textColor: 'white',
            height: 50,
            url: 'm4.png',
            width: 50
        },
        {
            textColor: 'white',
            height: 35,
            url: 'images/m3.png',
            width: 35
        }
    ]
};