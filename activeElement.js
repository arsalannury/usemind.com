const activeElement = document.createElement('span');

activeElement.style.position = 'absolute';
activeElement.style.top = '50%';
activeElement.style.left = '36%';
activeElement.style.fontWeight = 'bold';
activeElement.style.filter = 'blur(.5px)';

function showH1(){
    if(innerWidth <= 1280 && innerWidth >= 1026){
        activeElement.innerText = ' با کامپیوتر اومدی شیطون ؟'
    document.querySelector('.loginform').appendChild(activeElement);
    }else if(innerWidth <= 1025 && innerWidth >= 600){
        activeElement.innerText = 'با تبلت انلاین شدی';
        document.querySelector('.loginform').appendChild(activeElement);
    }else if(innerWidth <= 599 && innerWidth >= 230){
        activeElement.innerText = 'آره باو با موبایل انلاین شو';
        document.querySelector('.loginform').appendChild(activeElement);
    }
}
showH1();

