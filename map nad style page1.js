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


// change inner text for sign up-in at  responsive 460px
const signUp = document.querySelector('.sign-up')
innerWidth <= 460 ? signUp.innerText = 'حساب کاربری' : signUp.innerText = 'ورود / نام نویسی' ;