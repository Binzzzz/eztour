// <script src="http://code.jquery.com/jquery-1.10.1.min.js">
//</script>
//    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
//    <script>
function initialize() {
 

 //------the map avove that data below -----
 var yql_url = 'https://query.yahooapis.com/v1/public/yql';
var url = 'https://api.foursquare.com/v2/venues/search?near=Cochin,Cochin&client_id=LMCYG1RGM32B2BS4RCNWRFTHLBMZI3LJZJQXGTXRXYTNIU2X&client_secret=BE1W53X3I0G4KC0ULFCJPEI11UIOA5D3DYU3MNA5KDZFSGJW&v=20130815&ll=9.93,76.25&query=cochin&intent=browse&radius=9500';
$.ajax({
 'url': yql_url,
 'data': {
   'q': 'SELECT * FROM json WHERE url="'+url+'"',
   'format': 'json',
   'jsonCompat': 'new',
 },
 'dataType': 'jsonp',
 'success': function(response) {
 //  var rev = response.query.results.json.json;
   
   
var rev =$.getJSON('https://api.foursquare.com/v2/venues/search?near=Cochin,Cochin&client_id=LMCYG1RGM32B2BS4RCNWRFTHLBMZI3LJZJQXGTXRXYTNIU2X&client_secret=BE1W53X3I0G4KC0ULFCJPEI11UIOA5D3DYU3MNA5KDZFSGJW&v=20130815&ll=9.93,76.25&query=cochin&intent=browse&radius=9500',function(result)
  {
   // console.log(result.response.venues[0].location);
    loadmap(result.response); 
  });



 
 },
});
}
function loadmap(rev)
{

var myLatlng = new google.maps.LatLng(9.939248000000000000,76.259625000000030000);
 var mapOptions = {
   zoom: 12,
   center: myLatlng
 }
 var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

 var marker = new google.maps.Marker({
     position: myLatlng,
     map: map,
     title: 'Hello World!'
 });

 //-------
 var markers = [];
 for (var i=0;i<1000;i++)
 {
    console.log(rev.venues[i].location);
  var latlng = new google.maps.LatLng(rev.venues[i].location.lat, rev.venues[i].location.lng);

 
   var marker2 = new google.maps.Marker({
                               
                               position: latlng,
                               map: map
                           
                           });

   markers.push(marker2);

 }

   

 
 var mcOptions = { gridSize: 50 };
          // var markerCluster = new MarkerClusterer(map, markers, mcOptions);

}
google.maps.event.addDomListener(window, 'load', initialize);

//    </script>
