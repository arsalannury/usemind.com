if(innerWidth >= 900){
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
}else{
    console.log('map is false')
};


// change inner text for sign up-in at  responsive 460px
const signUp = document.querySelector('.sign-up')
innerWidth <= 460 ? signUp.innerText = 'حساب کاربری' : signUp.innerText = 'ورود / نام نویسی' ;



// create elements for navbar menu in min-width 0 and max-width 460px 
//container
const containerDiv = document.createElement('div');
containerDiv.id = 'containerDiv';
containerDiv.classList.toggle('containerDiv');

// function for attribute elements
function attrinute(elementt,cont,aaId,aaClass,appendChild){
    elementt.id = aaId;
    elementt.className = aaClass;
    cont.appendChild(appendChild);
}
function setAttributeForSpan(tag,idd,clas,text){
    tag.id = idd;
    tag.className = clas;
    tag.innerText = text;
}

//childs elements
// first
const firstItem = document.createElement('div');
attrinute(firstItem,containerDiv,'firstItem','firstItem',firstItem);

const childFirstItem = document.createElement('span');
setAttributeForSpan(childFirstItem,'childFirstItem','childFirstItem','درباره ما');
firstItem.appendChild(childFirstItem);

//second
const secondItem = document.createElement('div');
attrinute(secondItem,containerDiv,'secondItem','secondItem',secondItem);

const childSecondItem = document.createElement('span');
setAttributeForSpan(childSecondItem,'childSecondItem','childSecondItem','دسته بندی');
secondItem.appendChild(childSecondItem);

//third
const thirdItem = document.createElement('div');
attrinute(thirdItem,containerDiv,'thirdItem','thirdItem',thirdItem);

const childThirdItem = document.createElement('span');
setAttributeForSpan(childThirdItem,'childThirdItem','childThirdItem','جست و جو');
thirdItem.appendChild(childThirdItem);


// run code function
const body = document.body;
innerWidth <= 768 ? document.body.appendChild(containerDiv) : console.log('false') ;



