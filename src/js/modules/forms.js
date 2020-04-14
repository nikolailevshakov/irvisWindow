import checkNumbInputs from './checkNumbInputs';

const forms = (state) => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');

    checkNumbInputs('input[name="user_phone"]');
    
    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро с вами свяжутся',
        failure: 'Что-то пошло не так...'
    };
// добавили async/await, поэтому скрипт ждет ответ от сервера и let Не будет Undefined
    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        // fetch api
        let res = await fetch(url, {
            method: "POST",
            body: data
        });
// Тоже подождет получение ответа от сервера
        return await res.text();
    };
// очистка инпутов после использования
    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    }

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);
// Для запроса
            const formData = new FormData(item);
            if (item.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }
// вернется промис с сервера
            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(()=> {
                    statusMessage.textContent = message.failure;
                })
                .finally(()=>{
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });
        });
    });
};

export default forms;