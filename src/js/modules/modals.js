const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector),
        windows = document.querySelectorAll('[data-modal]');

        trigger.forEach(item => {
            item.addEventListener('click', (e)=> {
                if (e.target) {
                    e.preventDefault();
                }
                windows.forEach(item=> {
                    item.style.display = 'none';
                });
                modal.style.display = 'block';
                // при скролле страницы, скролится будет только модальное окно, не вся страница
                // document.body.style.overflow = 'hidden';
                // используем классы bootstrap для того же 
                document.body.classList.add('modal-open');
            });
        });

        close.addEventListener('click', ()=> {
            modal.style.display = 'none';
            document.body.style.overflow = 'initial';
            windows.forEach(item=> {
                item.style.display = 'none';
            });
        });
        // закратие окна после клика вне его 
        modal.addEventListener('click', (e)=> {
        // e.target при нажатии вне окна это и есть modal, а при нажании внутри это элементы modal окна
            if (e.target === modal && closeClickOverlay) {
                modal.style.display = 'none';
                document.body.style.overflow = 'initial';
                // используем классы bootstrap для того же 
                // document.body.classList.remove('modal-open');

                windows.forEach(item=> {
                    item.style.display = 'none';
                });
            }
        });
    }
// модальное окно появляется через 60 секунд
    function showMobalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }

        bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
        bindModal('.phone_link', '.popup', '.popup .popup_close');
        bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
        bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
        bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
        showMobalByTime('.popup', 60000);
};

export default modals;