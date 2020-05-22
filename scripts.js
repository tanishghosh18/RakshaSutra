// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAv1kwF8TdBfvvxipHEAl1zW8sAd3876iw&callback=initMap';
script.defer = true;
script.async = true;

// Attach your callback function to the `window` object
function initMap(){
    var map, infoWindow;
      // map = new google.maps.Map(document.getElementById('map'), {
      //   center: {lat: -34.397, lng: 150.644},
      //   zoom: 7,
      // });
      infoWindow = new google.maps.InfoWindow;

      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function(position) {
          var pos = {
            lat: +position.coords.latitude,
            lng: +position.coords.longitude
          };

        map = new google.maps.Map(document.getElementById('map'), {
            center: pos,
            zoom: 15,
          });

          var marker = new google.maps.Marker({
            position: pos,
            map: map,
            title: 'My Location'
          });
          marker.setMap(map);

          // infoWindow.setPosition(pos);
          // infoWindow.setContent('My Location');
          // infoWindow.open(map);
          // map.setCenter(pos);

        }, function() {
          handleLocationError(true, infoWindow, map.getCenter());
        });
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
      }  
    }

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      alert('Error: The Geolocation service failed. Error: Your browser doesn\'t support geolocation.');
    }
document.head.appendChild(script);
