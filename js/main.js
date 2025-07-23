const profileChanges = document.querySelector('.profile');

// Réseaux sociaux
const socials = {
    iconContainer: document.getElementById('icon'),
    svgIcon: document.querySelector('.share-content .icon #share path'), //Je remonte jusqu'à la balise path car c'est elle qui contient la couleur de l'icone
    invisibleSocials: document.getElementById('socials'),
    invisibleIcon: document.getElementById('caret-icon'),
};


// Profil (invisible sur mobile)
const invisibleOnMobile = {
    invisibleFigure: document.querySelector('.profile-infos #invisible-figure-mobile'),
    invisibleProfile: document.querySelector('.profile .profile-infos #invisible-text'),
};

console.log(invisibleOnMobile.invisibleProfile);



// Event listener
share.addEventListener('click', function () {

    // J'affiche le menu avec les icônes
    socials.invisibleIcon.classList.remove('d-none');
    socials.invisibleIcon.style.color = 'hsl(217, 19%, 35%)';
    socials.invisibleSocials.classList.remove('d-none');

    // window screen
    if (window.screen.width < 375) {

        // Socials
        socials.invisibleSocials.style.justifyContent = 'flex-start'; //Je place les réseaux sociaux au début de leur conteneur
        socials.iconContainer.style.backgroundColor = 'hsl(214, 17%, 51%)'; //Je change le background color de l'icone
        socials.svgIcon.setAttribute('fill', 'hsl(210, 46%, 95%)'); //Ainsi que sa couleur (fill est un attribut, donc je modifie la couleur avec setAttribute)


        // Profile
        profileChanges.style.marginBottom = '0'; //Je retire la marge du profil initialement donnée
        profileChanges.style.backgroundColor = 'hsl(217, 19%, 35%)'; //Je change la couleur de fond de l'élément profil


        // Je donne la classe d-none aux éléments du profil pour les rendre invisibles
        invisibleOnMobile.invisibleFigure.classList.add('d-none');
        invisibleOnMobile.invisibleProfile.classList.add('d-none');
    }
});