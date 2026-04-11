// images.js
export function initImageHandling(){
    const sections = document.querySelectorAll('.section')
    sections.forEach(el => {
        el.addEventListener('click',handleImgColors);
        el.addEventListener('mouseout', (e) => {
            
        });
    })
    function greyOut(){
        sections.forEach(el => {
            if(el.classList.contains('colored') ){
                el.classList.remove('colored')
            }
        })    
    }
    function handleImgColors(e){
        if(e.type == 'click'){
            const section = e.target.closest('.section')
            const img = section.querySelector('img')
            
            toggleColor(section)


        }
        

    }
    function toggleColor(el){
        console.log(el)
        greyOut()
        el.classList.toggle('colored')
    }
}
