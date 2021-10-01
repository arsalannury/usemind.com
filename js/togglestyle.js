// ::::::::::::::
// body background change to Dark
// ::::::::::::::
const backgroundColor ={
    toggle : document.querySelector('.tool') ,
    body : document.body ,
    replaceToggle : document.createElement('span') ,
    contToggle : document.querySelector('.toggle') ,
    atrributeChild(){
        this.replaceToggle.classList.toggle('tool2');
        this.replaceToggle.style.display = 'none';
    } ,
    eventAdd(){
        this.toggle.addEventListener('click', () => {
        document.body.style.backgroundColor = '#232323';
        this.contToggle.replaceChild(this.replaceToggle,this.toggle)
        this.replaceToggle.style.display = 'inline';
        this.replaceToggle.style.right = '15px';
        document.querySelector('.activeElement').style.color = '#eee';
        document.querySelector('.activeElement').style.filter = 'none'
        })

        this.replaceToggle.addEventListener('click', () => {
            document.body.style.backgroundColor = '#cfd2cd';
            this.contToggle.replaceChild(this.toggle,this.replaceToggle)
            this.replaceToggle.style.display = 'none';
            this.replaceToggle.style.left = '15px';
            document.querySelector('.activeElement').style.color = '#333533';
            document.querySelector('.activeElement').style.filter = 'blur(.5px)'
            })
    }
}
backgroundColor.atrributeChild();
backgroundColor.eventAdd();

