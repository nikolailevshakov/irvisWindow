const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', (e)=> {
                if (e.target) {
                    e.preventDefault();
                }
    
                modal.style.display = 'block';
                // при скролле страницы, скролится будет только модальное окно, не вся страница
                // document.body.style.overflow = 'hidden';
                // используем классы bootstrap для того же 
                document.body.classList.add('modal-open');
            });
        });

        close.addEventListener('click', ()=> {
            modal.style.display = 'none';
            // document.body.style.overflow = '';
            // используем классы bootstrap для того же 
            document.body.classList.remove('modal-open');
        });
        // закратие окна после клика вне его 
        modal.addEventListener('click', (e)=> {
        // e.target при нажатии вне окна это и есть modal, а при нажании внутри это элементы modal окна
            if (e.target === modal) {
                modal.style.display = 'none';
                // document.body.style.overflow = '';
                // используем классы bootstrap для того же 
                document.body.classList.remove('modal-open');
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
        showMobalByTime('.popup', 3000);
};

export default modals;