const toggleBtn = document.querySelector('.index_bar');
const menu = document.querySelector('.index_menu');

toggleBtn.addEventListener('click', () => {
   menu.classList.toggle('active');
});


