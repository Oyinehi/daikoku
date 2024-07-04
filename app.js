const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransitions(){
    //Button click active class
    for(let i=0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click',function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
            this.className += ' active-btn';
        })
    }

    //sections Active class
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;//i.e any id i click becomes the const id
        if(id){
            //remove selected(active class) from the other btns
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')//remove active forEach element in'controlls'
            })
            e.target.classList.add('active')//add active to clicked or selected element
            sectBtn.forEach((btn) =>{
                btn.classList.remove('active')//remove active forEach element in'controlls'
            })
            e.target.classList.add('active')//add active to clicked or selected element

            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);//i.e get element by const id above
            element.classList.add('active');
        }
    })
}

PageTransitions();