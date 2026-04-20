// toggle-nav.js

export function initToggleNav() {
    const sideNavBtn = document.querySelector('#sideNavBtn')
    const imgSmoke = document.querySelector('#madonnaShilouetteLogo')
    const pageWrapper = document.querySelector('.page-wrapper')
    sideNavBtn.addEventListener('keydown', (e) => {
        const key = e.key.toLowerCase()
        if(key == 'enter'){
            // const mobileHeaderNavUl = document.querySelector('.mobile-header-nav > ul') 
            pageWrapper.classList.toggle('expand')
            // imgSmoke.classList.toggle('smoke-img')
        }
    });
    sideNavBtn.addEventListener('click', (e) => {
        const mobileHeaderNavUl = document.querySelector('.mobile-header-nav > ul') 
        mobileHeaderNavUl.classList.toggle('expand')
    });
}