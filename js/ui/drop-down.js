// drop-down.js
export function initDropDown(){
    const dropDowns = document.querySelectorAll('.drop-down')
    dropDowns.forEach(el => {
        el.addEventListener('click', toggleContent)
        el.addEventListener('keydown', toggleContent)
    })

    function toggleContent(e){
        const section = e.target.closest('.section')
        console.log(e.target)
        const content = section.querySelector('.content')
        if(e.type == 'click'){
            // content.classList.toggle('hide')
            console.log(e.target)
            
        }
        if(e.type == 'keydown'){
            const key = e.key.toLowerCase()
            if(key === 'enter'){
                content.classList.toggle('hide')
            }
        }
        

    }
}