// Sélectionner l'élément du diaporama
const diaporama = document.querySelector('.diaporama');

// Sélectionner toutes les boîtes de services
const servicesBoxes = document.querySelectorAll('.services-box');

// Fonction pour mettre en pause l'animation
function pauseAnimation() {
  diaporama.classList.add('paused');
}

// Fonction pour reprendre l'animation
function resumeAnimation() {
  diaporama.classList.remove('paused');
}

// Ajouter un événement 'mouseenter' pour chaque boîte de service
servicesBoxes.forEach(serviceBox => {
  serviceBox.addEventListener('mouseenter', pauseAnimation); // Met l'animation en pause lorsque la souris entre
  serviceBox.addEventListener('mouseleave', resumeAnimation); // Reprend l'animation lorsque la souris quitte
});

// Ajouter un événement 'mouseleave' sur le diaporama pour gérer le cas où la souris quitte le diaporama complet
diaporama.addEventListener('mouseleave', resumeAnimation); // Reprendre l'animation lorsque la souris quitte l'élément diaporama
