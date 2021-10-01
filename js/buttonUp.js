// :::::::::
// arrow button fot go to up 
// :::::::::
const arrow = document.querySelector('#up');
arrow.addEventListener('click',(e) => {
 document.documentElement.scrollTop = 0;
});

if(innerWidth > 768){
 arrow.style.display = 'none'
}else{}