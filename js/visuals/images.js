// images.js
export function initImageHandling(){
    const sections = document.querySelectorAll('.section')
    sections.forEach(el => {
        el.addEventListener('click', (e) => {
            const section = e.target.closest('.section')
            const img = section.querySelector('img')
            if(img){
                section.classList.toggle('checked')
            }
        });
        el.addEventListener('mouseout', (e) => {
            const section = e.target.closest('.section')
            const img = section.querySelector('img')
            if(img){
                if(section.classList.contains('checked')){}
            }
        });
    })
    function removeAllChecks(sections){
        sections.forEach(el => {
            if(el ){
                
            }
        })    
    }
}