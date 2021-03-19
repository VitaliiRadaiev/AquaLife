{


	let isMap = document.getElementById("map-1");
	if(isMap) {
		var map1;

        var map2;
        var globalMarkers;
        
		var center1 = {
			lat: 51.2375147549956,
			lng: 17.860102898232235,
		}
		var center2 = {
			lat: 26.977582962023323,
			lng: 17.717931632127538,
		}

		var markerPosition1 = {
            lat: 51.2375147549956,
			lng: 17.860102898232235,
		}

		
        var markers = [];



		function initMap() {
            globalMarkers = [
                    new google.maps.LatLng(51.2375147549956, 17.860102898232235),
                    new google.maps.LatLng(49.4102183495809, 32.053993300771204),
                    new google.maps.LatLng(57.77750842208651, -101.65709307870438),
                    new google.maps.LatLng(-25.037054343294088, 134.42196995479162),
            ];
		
			map1 = new google.maps.Map(document.getElementById('map-1'), {

				center: {lat: center1.lat, lng: center1.lng},
		
				panControl: false,
				mapTypeControl: false,
				zoom: 4,
				//styles: 
			});

			map2 = new google.maps.Map(document.getElementById('map-2'), {

				center: {lat: center2.lat, lng: center2.lng},
		
				panControl: false,
				mapTypeControl: false,
				zoom: 2,


				//styles: 
			});

            drop();

			var marker1 = new google.maps.Marker({

			
			    position: {lat: markerPosition1.lat, lng: markerPosition1.lng},

		
			    map: map1,

			
			    title: '',
			    label: '',

		
			    icon: {
                    url: 'img/icons/droplet.svg',
                    scaledSize: new google.maps.Size(20, 20),
                } 
			});

		}

        function drop() {
			for (let i = 0; i < globalMarkers.length; i++) 
			 {
			   markers.push(new google.maps.Marker({
			   position: globalMarkers[i],
			   map: map2,
               icon: {
                url: 'img/icons/droplet.svg',
                scaledSize: new google.maps.Size(20, 20),
                } 
			   }));
			 }

		}
	}
}
