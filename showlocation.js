navigator.geolocation.getCurrentPosition(showLocation)
function showLocation(param){
mapboxgl.accessToken = 'pk.eyJ1IjoiYXJzYWxhbm5uIiwiYSI6ImNrdDRkbXJlbDAxNngydXF5N205b2g5cHMifQ.i7qbyAgmxXijaYVlTlgx2Q';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11' ,
center : [param.coords.longitude , param.coords.latitude] ,
zoom : 10
});
}
