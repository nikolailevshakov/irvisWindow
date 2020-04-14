const checkNumbInputs = (selector) => {
    const numbInputs = document.querySelectorAll(selector);

    numbInputs.forEach(item => {
        item.addEventListener('input', ()=> {
            item.value = item.value.replace(/\D/, '');
        });
    });
};

export default checkNumbInputs;