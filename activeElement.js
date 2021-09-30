// ::::::::::::::
// in diffrent innerWidth show message
// ::::::::::::::
const activeElement = document.createElement('span');

activeElement.style.position = 'absolute';
activeElement.style.top = '117px';
activeElement.style.left = '5px';
activeElement.style.fontWeight = 'bold';
activeElement.style.filter = 'blur(.5px)';

function showH1(){
    if(innerWidth <= 1280 && innerWidth >= 1026){
        activeElement.innerText = ' با کامپیوتر اومدی شیطون ؟'
    document.querySelector('.loginform').appendChild(activeElement);
    }else if(innerWidth <= 1025 && innerWidth >= 426){
        activeElement.innerText = 'با تبلت انلاین شدی';
        document.querySelector('.loginform').appendChild(activeElement);
    }else if(innerWidth <= 425 && innerWidth >= 230){
        activeElement.innerText = 'آره باو با موبایل انلاین شو';
        document.querySelector('.loginform').appendChild(activeElement);
    }
}
showH1();

// ::::::::::::::::::::::
// create element for replice child
// ::::::::::::::::::::::
const parentForm = document.querySelector('#up-form');

const setPassInput = document.createElement('input');
setPassInput.setAttribute('type','text');
setPassInput.id = 'replaceElement';

const setPassInputVerify = setPassInput.cloneNode(true);
setPassInputVerify.id = 'replaceElementVerify';
// :::::::::::::::::::::::
// show or hide set and input  password 
// :::::::::::::::::::::::

const showPassword = {
    setPasswordF : document.querySelector('#passF') ,
    setPasswordT : document.querySelector('#passT') ,
    lockClose : document.createElement('i') ,
    attributeLockClose(){
        this.lockClose.innerHTML = '<i class="fas fa-lock"></i>';
        this.lockClose.id = 'lockClose';
        parentForm.appendChild(this.lockClose);
    } ,
    chnageDisplayPassword(){
        // ::::::::::
        // click event change childs
        // :::::::::
        this.lockClose.addEventListener('click', () => {
            parentForm.replaceChild(setPassInput,this.setPasswordF);
            parentForm.replaceChild(setPassInputVerify,this.setPasswordT);
            this.lockClose.innerHTML = '<i class="fas fa-lock-open"></i>' ;
        })
        // ::::::::::
        // dblclick event change innerHTML and childs
        // ::::::::::
        this.lockClose.addEventListener('dblclick',() => {
            parentForm.replaceChild(this.setPasswordF,setPassInput);
            parentForm.replaceChild(this.setPasswordT,setPassInputVerify);
            this.lockClose.innerHTML = '<i class="fas fa-lock"></i>'
        })
    }
}
showPassword.attributeLockClose();
showPassword.chnageDisplayPassword();