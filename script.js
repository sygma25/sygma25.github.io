function toggleMenu() {
  const menu = document.getElementById('menu');
  const menuBar = document.getElementById('menuBar');


  menu.classList.toggle('active');

 
  if (menu.classList.contains('active')) {
    menuBar.textContent = '✖'; 
  } else {
    menuBar.textContent = '☰'; 
  }
}


document.addEventListener('click', (event) => {
  const menu = document.getElementById('menu');
  const menuBar = document.getElementById('menuBar');
  if (!menu.contains(event.target) && !menuBar.contains(event.target)) {
    menu.classList.remove('active');
    menuBar.textContent = '☰'; 
  }
});