{


	let isMap = document.getElementById("map-1");
	if(isMap) {
		var map1;

        var map2;
        
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

			map1 = new google.maps.Map(document.getElementById('map-1'), {

				center: {lat: globalMarkers['1'][0], lng: globalMarkers['1'][1]},
		
				panControl: false,
				mapTypeControl: false,
				zoom: 4,
				//styles: 
			});

			map2 = new google.maps.Map(document.getElementById('map-2'), {

				center: {lat: globalMarkers['2'][0], lng: globalMarkers['2'][1]},
		
				panControl: false,
				mapTypeControl: false,
				zoom: 4,


				//styles: 
			});

           // drop();

			var marker1 = new google.maps.Marker({

			
			    position: {lat: markerPosition1.lat, lng: markerPosition1.lng},

		
			    map: map1,

			
			    title: '',
			    label: '',

		
			    icon: {
                    url: document.getElementById('map-1').dataset.src,
                    scaledSize: new google.maps.Size(20, 20),
                } 
			});

			var marker2 = new google.maps.Marker({

			
			    position: {lat: markerPosition1.lat, lng: markerPosition1.lng},

		
			    map: map2,

			
			    title: '',
			    label: '',

		
			    icon: {
                    url: document.getElementById('map-2').dataset.src,
                    scaledSize: new google.maps.Size(20, 20),
                } 
			});


			map10 = new google.maps.Map(document.getElementById('map-10'), {

				center: {lat: 38.664121683223065, lng: 35.517221421873195},
				panControl: false,
				mapTypeControl: false,
				zoom: 2,


				//styles: 
			});
            drop();


		}

        function drop() {
			const createAray = () => {
				let arr = [];
	
				if(globalMarkers2) {
					for(let item in globalMarkers2) {
						arr.push(globalMarkers2[item]);
					}
				}
	
				return arr.map(obj => {
					return new google.maps.LatLng(obj[0], obj[1])
				})
				
			}

			var markersArr = createAray();

			for (let i = 0; i < markersArr.length; i++) 
			 {
			   markers.push(new google.maps.Marker({
			   position: markersArr[i],
			   map: map10,
               icon: {
                url: document.getElementById('map-10').dataset.src,
                scaledSize: new google.maps.Size(20, 20),
                } 
			   }));
			 }

		}
	}
}
