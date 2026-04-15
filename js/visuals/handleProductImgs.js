// images.js
export function initProdImgHandle(){
    const sections = document.querySelectorAll('.project')
    const sectionTitles = document.querySelectorAll('.project-title')
    const sectionImgs = document.querySelectorAll('.project > img-wrapper > img')
    sections.forEach(el => {
        el.removeEventListener('click',handleImgColors);
        el.addEventListener('click',handleImgColors);
    })
    sectionTitles.forEach(el => {
        el.addEventListener('focus', greyOutSectionImgs)
    })
    function greyOutSectionImgs(){
        sections.forEach(el => {
            if(el.classList.contains('colored') ){
                el.classList.remove('colored')
            }
        })    
    }
    function handleImgColors(e){
        const section = e.target.closest('.section')
        const img = section.querySelector('img')
        if(e.target.classList.contains('section')){
            greyOutSectionImgs()
            return
        }
        if(e.type == 'click'){
            e.stopPropagation()
            toggleColor(section)
            console.log(section)
            return
        }
        if(e.type == 'mouseover') {
            greyOutSectionImgs()
            // toggleColor(section)
            console.log('over')
            return
        }
        if(e.type == 'mousein') {
            console.log('mouse')
            greyOutSectionImgs()
            // toggleColor(section)
            return
        }
    }
    function toggleColor(el){
        greyOutSectionImgs()
        el.classList.toggle('colored')
    }
}
