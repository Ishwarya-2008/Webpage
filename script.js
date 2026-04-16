const toggleBtn = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.left-container');
const rightContainer = document.querySelector('.right-container');
const sidebarToggle1 = document.querySelector('.sidebar-toggle-1');
let isSidebarHidden = false;

toggleBtn.addEventListener('click', () => {
    toggleBtn.style.display = 'none';
    sidebar.classList.toggle('hidden');
    rightContainer.classList.toggle('full-width');
    sidebarToggle1.style.display = 'block';
    isSidebarHidden = true;
});

sidebarToggle1.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
    rightContainer.classList.toggle('full-width');
    toggleBtn.style.display = 'block';
    sidebarToggle1.style.display = 'none';
    isSidebarHidden = false;
});