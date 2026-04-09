import { initLetterNav } from "./nav/letter-nav.js";
const pageWrapper = document.querySelector('.page-wrapper')
function initMain(){
    initLetterNav({
        pageWrapper
    });
    
    const mdvipImgLink = document.querySelector('#mdvipImgLink')
    if(mdvipImgLink){
        mdvipImgLink.addEventListener('keydown', e => {
            const a = e.target.closest('#mdvipImgLink')
            a.click()
        })
    }
}


initMain()