// fetch("https://gh-pinned-repos-tsj7ta5xfhep.deno.dev/?username=Naimdevweb")
// .then(rep => rep.json())
// .then(donnees => ajouterDonnees(donnees))
// function ajouterDonnees(donnees){

//   const services = document.querySelector(".services-container")
  
//   donnees.forEach((donnee) => {
//     services.innerHTML += 

//     `
//     <div class="services-box">
//         <div class="services-info">
//           <div class="image-cropper">
//             <a href="${donnee.link}">
//               <div class="image" style="background-image: url('${donnee.image}');"></div>
//             </a>
            
//           </div>
         
//         </div>
//       </div>
//     `
    
//   })

// }

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





let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');

            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}




// const image = document.querySelector('.home-img')
// image.addEventListener('mouseenter', Handleimageborder);
// image.addEventListener('mouseleave', Handleimageborder);
//  function Handleimageborder(event){
//   const imageEvent = event.target
//   imageEvent.classList.toggle('border-red')
//  }


 
//  const image2 = document.querySelector('#img')
// image2.addEventListener('mouseenter', Handleimagebordergreen);
// image2.addEventListener('mouseleave', Handleimagebordergreen);
//  function Handleimagebordergreen(event){
//   const imageEvent = event.target
//   imageEvent.classList.toggle('border-green')
//  }
