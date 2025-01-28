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