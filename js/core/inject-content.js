const mainLandingPage = document.querySelector('.main-landing-page')

const DEFAULT_PAGE =
    "pages/medical-spa-services/medical-spa-services.html";
const pageCache = new Map()

function initInjectContentListeners(){
    const mobileHeaderNav = document.querySelector('.mobile-header-nav')
    mobileHeaderNav.addEventListener('keydown', e => {
        const key = e.key.toLowerCase()
        
    })
}