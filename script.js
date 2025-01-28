function toggleMenu() {
  const menu = document.getElementById('menu');
  const menuIcon = document.querySelector('.menu-bar-icon');
  menu.classList.toggle('active');
  menuIcon.classList.toggle('change');
}


document.addEventListener('click', (event) => {
  const menu = document.getElementById('menu');
  const menuIcon = document.querySelector('.menu-bar-icon');
  if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
    menu.classList.remove('active');
    menuIcon.classList.remove('change');
  }
});