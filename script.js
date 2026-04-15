const toggleBtn = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.left-container');
const rightContainer = document.querySelector('.right-container');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
    rightContainer.classList.toggle('full-width');
});