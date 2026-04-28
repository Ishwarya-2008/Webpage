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

const todayDate = new Date().getDate();
const calCells = document.querySelectorAll('.cal-grid tbody td');
calCells.forEach(td => {
    const div = td.querySelector('div');
    const text = div ? div.textContent.trim() : td.textContent.trim();
    if (text === String(todayDate)) {
        td.classList.add('today');
        if (!div) {
            const newDiv = document.createElement('div');
            newDiv.textContent = todayDate;
            td.textContent = '';
            td.appendChild(newDiv);
        }
    }
});