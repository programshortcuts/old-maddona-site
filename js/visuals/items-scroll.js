let cleanupItemsScroll = null;

export function initItemsScroll() {
    const itemsContainer = document.querySelector('.items-container');
    const items = document.querySelectorAll('.item');

    if (!itemsContainer) return;

    // 🔥 cleanup old listeners (important for inject system)
    if (cleanupItemsScroll) cleanupItemsScroll();

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const offset = 40;

    // =========================
    // 🎯 CENTER ITEM FUNCTION (CORE APPLE BEHAVIOR)
    // =========================
    const scrollToItem = (el) => {
        const targetScroll =
            el.offsetLeft - offset - itemsContainer.offsetLeft;

        itemsContainer.scrollTo({
            left: targetScroll,
            behavior: "smooth"
        });
    };

    // =========================
    // 🖱 MOUSE DRAG
    // =========================
    const mouseDown = (e) => {
        isDown = true;
        itemsContainer.classList.add('active');

        startX = e.pageX - itemsContainer.offsetLeft;
        scrollLeft = itemsContainer.scrollLeft;
    };

    const mouseLeave = () => {
        isDown = false;
    };

    const mouseUp = () => {
        isDown = false;
    };

    const mouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();

        const x = e.pageX - itemsContainer.offsetLeft;
        const walk = (x - startX) * 2.2;

        itemsContainer.scrollLeft = scrollLeft - walk;
    };

    // =========================
    // 👆 TOUCH DRAG
    // =========================
    let startTouchX = 0;

    const touchStart = (e) => {
        startTouchX = e.touches[0].pageX;
        scrollLeft = itemsContainer.scrollLeft;
    };

    const touchMove = (e) => {
        const x = e.touches[0].pageX;
        const walk = (x - startTouchX) * 1.5;

        itemsContainer.scrollLeft = scrollLeft - walk;
    };

    // =========================
    // 🎯 ITEM INTERACTION (CLICK + FOCUS)
    // =========================
    const itemClick = (e) => {
        scrollToItem(e.currentTarget);
        removeAllClickedItems()
        e.target.classList.toggle('clicked-item')
    };
    const itemKeydown = (e) => {
        const key = e.key.toLowerCase()
        if(key === 'enter'){
            e.target.classList.toggle('clicked-item')
        }
        scrollToItem(e.currentTarget);
    };
    items.forEach(item => {
        item.addEventListener('keydown', itemKeydown);
        item.addEventListener('click', itemClick);
        item.addEventListener('focus', focusHandler);
        item.addEventListener('focusout', removeAllClickedItems);
    });
    function removeAllClickedItems(){
        items.forEach(el => el.classList.remove('clicked-item'))
    }
    function focusHandler(e) {
        console.log('focus')
        removeAllClickedItems()
        scrollToItem(e.target);
    };

    // =========================
    // BIND EVENTS
    // =========================
    itemsContainer.addEventListener('mousedown', mouseDown);
    itemsContainer.addEventListener('mouseleave', mouseLeave);
    itemsContainer.addEventListener('mouseup', mouseUp);
    itemsContainer.addEventListener('mousemove', mouseMove);

    itemsContainer.addEventListener('touchstart', touchStart, { passive: true });
    itemsContainer.addEventListener('touchmove', touchMove, { passive: true });

    

    // =========================
    // CLEANUP (IMPORTANT FOR INJECT SYSTEM)
    // =========================
    cleanupItemsScroll = () => {
        itemsContainer.removeEventListener('mousedown', mouseDown);
        itemsContainer.removeEventListener('mouseleave', mouseLeave);
        itemsContainer.removeEventListener('mouseup', mouseUp);
        itemsContainer.removeEventListener('mousemove', mouseMove);

        itemsContainer.removeEventListener('touchstart', touchStart);
        itemsContainer.removeEventListener('touchmove', touchMove);

        items.forEach(item => {
            item.removeEventListener('click', itemClick);
            item.removeEventListener('focus', focusHandler);
        });
    };
}