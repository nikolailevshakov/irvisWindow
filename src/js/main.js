import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
console.log(2);
window.addEventListener('DOMContentLoaded', ()=> {
    modals();
    tabs('.glazing_slider', '.glazing_block','.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
});