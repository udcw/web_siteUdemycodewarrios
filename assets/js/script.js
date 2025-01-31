<<<<<<< HEAD
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }

  let currentIndex = 0;

function moveSlide(direction) {
    const images = document.querySelector('.carousel-images');
    const totalImages = document.querySelectorAll('.carousel-images img').length;

    // Mettre à jour l'indice de l'image actuelle
    currentIndex += direction;

    // Si on est à la fin ou au début de la liste, on boucle
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    }
    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }

    // Déplacer le carrousel
    const offset = -currentIndex * (images.querySelector('img').width + 10); // 10px d'écart entre les images
    images.style.transform = `translateX(${offset}px)`;
}
=======
let body = document.body;
let profile = document.querySelector(".header .flex .profile");

document.querySelector("#user-btn").onclick = () => {
  profile.classList.toggle("active");
  searchForm.classList.remove("active");
};
let searchForm = document.querySelector(".header .flex .search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  profile.classList.remove("active");
};

let sideBar = document.querySelector(".side-bar");

document.querySelector("#menu-btn").onclick = () => {
  sideBar.classList.toggle("active");
  body.classList.toggle("active");
};
document.querySelector(".side-bar .close-side-bar").onclick = () => {
  sideBar.classList.toggle("active");
  body.classList.remove("active");
};

window.onscroll = () => {
  profile.classList.remove("active");
  searchForm.classList.remove("active");

  if (window.innerWidth < 1200) {
    sideBar.classList.toggle("active");
    body.classList.remove("active");
  }
};


let toggleBtn = document.querySelector('#toggle-btn');
// let body = document.body;

let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () => {
  toggleBtn.classList.replace('fa-sun', 'fa-moon');
  body.classList.add('dark');
  localStorage.setItem('dark-mode', 'enabled');
};

const disableDarkMode = () => {
  toggleBtn.classList.replace('fa-moon', 'fa-sun');
  body.classList.remove('dark');
  localStorage.setItem('dark-mode', 'disabled');
};

// Vérifier l'état du dark mode au chargement de la page
if (darkMode === 'enabled') {
  enableDarkMode();
}

toggleBtn.onclick = () => {
  let darkMode = localStorage.getItem('dark-mode');
  if (darkMode === 'enabled') {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
};

>>>>>>> bc58d1b (modification du fichier et ajustement de contenu de la page home)
