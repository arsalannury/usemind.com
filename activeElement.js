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



// :::::::::::::::::::::::
// show or hide set and input  password 
// :::::::::::::::::::::::
const parentForm = document.querySelector('#up-form');

const showPassword = {

    setPasswordF : document.querySelector('#passF') ,
    setPasswordT : document.querySelector('#passT') ,
    lockClose : document.createElement('i') ,
    lockOpen : document.createElement('i') ,
    // ::::::::::::::::::::::
   // create element for replice child
  // ::::::::::::::::::::::::
    setPassInput :  document.createElement('input') ,
    setPassInputVerify : document.createElement('input') ,
    attributeLocks(){
      let close = [
        this.lockClose.innerHTML = '<i class="fas fa-lock"></i>',
        this.lockClose.id = 'lockClose',
        parentForm.appendChild(this.lockClose),
      ];
      let open = [
        this.lockOpen.innerHTML = '<i class="fas fa-lock-open"></i>',
        this.lockOpen.id = 'lockOpen',
        parentForm.appendChild(this.lockOpen),
      ];
    } ,
    attributes(){
        this.setPassInput.setAttribute('type','text');
        this.setPassInput.id = 'replaceElement';
        this.setPassInputVerify.setAttribute('type','text');
        this.setPassInputVerify.id = 'replaceElementVerify';
     } ,
     styles(){
         this.lockOpen.style.display = 'none' ;
     } ,
    chnageDisplayPassword(){
        // ::::::::::
        // click event change childs
        // :::::::::
        this.lockClose.addEventListener('click', () => {
            parentForm.replaceChild(this.setPassInput,this.setPasswordF);
            parentForm.replaceChild(this.setPassInputVerify,this.setPasswordT);
            this.lockClose.style.display = 'none';
            this.lockOpen.style.display = 'inherit';
        })
        // ::::::::::
        // dblclick event change innerHTML and childs
        // ::::::::::
        this.lockOpen.addEventListener('click',() => {
            parentForm.replaceChild(this.setPasswordF,this.setPassInput);
            parentForm.replaceChild(this.setPasswordT,this.setPassInputVerify);
            this.lockOpen.style.display = 'none' ;
            this.lockClose.style.display = 'inherit';
        })
    }

}
showPassword.attributeLocks();
showPassword.attributes();
showPassword.styles();
showPassword.chnageDisplayPassword();
