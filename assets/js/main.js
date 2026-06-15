/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show menu */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Hide menu */ 
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link, .nav__contact')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== HOME TEXT CIRCULAR ===============*/
const homeText = document.getElementById('home-text'),
   letters = homeText.textContent.trim().split(''), //converts text into array of characters
   angleStep= 360 / letters.length //angle for each character, length for the nb of chars

homeText.textContent = ''

letters.forEach((char, i) =>{
   const span = document.createElement('span')
   span.textContent = char
   span.style.transform = `rotate(${i * angleStep}deg)` //rotation of each letter
   homeText.appendChild(span)
})


/*=============== HOME TYPED JS ===============*/
let typedHome

/*=============== CHANGE HEADER STYLES ===============*/
const scrollHeader = () => {
  const header = document.getElementById('header')
  window.scrollY >= 50
    ? header.classList.add('scroll-header')
    : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*=============== SWIPER WORK ===============*/ 
const swiperWork = new Swiper('.work__swiper', {
   loop: true,
   spaceBetween: 24,
   slidesPerView: 'auto',
   grabCursor: true,
   speed: 600,
   pagination: {
      el: '.work__swiper .swiper-pagination',
      clickable: true,
   },
   autoplay: {
      delay: 2000,
      disableOnInteraction: false,
   }
})

/*=============== SERVICES ACCORDION ===============*/

const servicesCards = document.querySelectorAll('.services__card'),
   servicesButtons = document.querySelectorAll('.services__button')

servicesButtons.forEach(button => {
   button.addEventListener('click', () => {
      const currentCard = button.closest('.services__card'),
      isOpen = currentCard.classList.contains('services-open')

      servicesCards.forEach(card => {
         card.classList.replace('services-open', 'services-close')
      })

      if(!isOpen){
         currentCard.classList.replace('services-close','services-open')
      }
   })
})   
/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/ 


/*=============== CONTACT EMAIL JS ===============*/ 
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = async (e) => {
   e.preventDefault() //no reloading of the page

   try{
      await emailjs.sendForm('service_5lg0tbl','template_b4j18un','#contact-form','JlGK0uhBznCwMXNXf')
      //show sent message
      contactMessage.textContent = 'Message sent successfully!'
      //clear all fields for inputs
      contactForm.reset()
   }catch (error){
      //show error message
      contactMessage.textContent = 'Service error: message not sent :('
   }
   //idk what this does
   // finally{
   //    setTimeout(() => contactMessage.textContent = '', 5000)
   // }
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*============== CUSTOM CURSOR ===============*/
const cursor = document.querySelector('.cursor')
let mouseX = 0, mouseY = 0 //storing itinial mouse pos

const cursorMove = () => {
   cursor.style.left = `${mouseX}px`  //horizental position (x-axis)
   cursor.style.top = `${mouseY}px`   //vertical position (Y axis)
   cursor.style.transform = 'translate(-50%,-50%)' //center the element at the pointer

   // Repeats the function with each mouvement
   requestAnimationFrame(cursorMove)
}
//detects mouvement and updates position  
document.addEventListener('mousemove', (e) =>{
   mouseX = e.clientX //Save position X
   mouseY = e.clientY //save positon Y
})

cursorMove()
//hide the cursor on all links
const a = document.querySelectorAll('a','button') //ITS ALL bc of forEach

a.forEach(item => {
   //mouse enters a link and still hides the cursor
   item.addEventListener('mouseover', () => {
      cursor.classList.add('hide-cursor')
   })

   //mouse exits the link and now shows cursor
   item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hide-cursor')
   })
})
/*=============== SCROLLREVEAL ANIMATION ===============*/

const sr = ScrollReveal({
   origin: 'bottom',
   distance: '60px',
   duration: 1200,
   delay:150,
   easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)', //values of where the transition is at so 1.56 means overdue and then we get back to 1
})

sr.reveal(`.home__subtitle`)
sr.reveal(`.home__title`,{delay:600})
sr.reveal(`.home__description`, {delay:900})
sr.reveal(`.home__box-1`, {delay:1200, rotate:{z:-20}})
sr.reveal(`.home__box-2`, {delay:1200, rotate:{z:-30}})
sr.reveal(`.home__box-3`, {delay:1200, rotate:{z:-40}})
sr.reveal(`.home__img`, {delay:1700, distance:'-60px'})
sr.reveal(`.home__circle`, {delay:2000, distance:'-100px'})

sr.reveal(`.about__title`)
sr.reveal(`.about__description`, {delay:600})
sr.reveal(`.about__button`, {delay:900})

sr.reveal(`.work__swiper`)

sr.reveal(`.services__card:nth-child(odd)`,{interval:200, origin: 'left', distance: '100px'})

sr.reveal(`.about__title`)
sr.reveal(`.about__description`, {delay:600})
sr.reveal(`.about__button`, {delay:900})

sr.reveal(`.work__swiper`)

sr.reveal(`.services__card:nth-child(odd)`,{interval: 200, origin:`left`, distance: `100px`})
sr.reveal(`.services__card:nth-child(even)`,{interval: 200, origin:`right`, distance: `100px`})

sr.reveal(`.skills__description`)
sr.reveal(`skills__card`, {delay:600, interval: 200})
sr.reveal(`.skills__profession`, {delay:900})
sr.reveal(`skills__list`,{dleay:1200, interval:200})

sr.reveal(`.contact__form`)
sr.reveal(`.contact__link`, {delay:600, interval:200})

sr.reveal(`.footer__container`)
//TODO: put inside JSON
const homeCircle = document.getElementById('home-circle')
const translations = {
en: {
   homeTitle: 'Computer Science Student &<br><span id="home-typed"></span>',
   homeTypedStrings: ['Web Developer', 'Graphic Designer','Software designer','Video Editor'],
   homeText: 'CHANGE - FRENCH - ',
   subtitle: "Hi! I'm Clark",
   description: 'I currently create websites and games. <br>While studying computer science at Paris Saclay University.',
   aboutTitle: 'Second year French & English speaking<span> bachelor student</span>, freelancing in <br> website design & video editing <span> and open to work! </span><br>',
   aboutDescription: "Let's talk!",
   contactBtn: 'Contact me',
   servicesTitle: '<span>My</span> Skills',
   skillsTitle: '<span>Apps </span> & <span> Languages</span>',
   skillsDescription: 'I learned graphic design by working on diverse small personal projects. My time in university was spent more on computer architecture, algorithm optimization and compiler theory.',
   service1Name: 'Graph theory applied to optimization methods',
   service1Description: 'This was mostly done through classes which used graph theory and binary trees to articulate how algorithms can be optimized by analyzing time complexities and proving the validity of these programs.',
   service2Name: 'Object-oriented',
   service2Description: 'Learned how to write clean, documented code for large swaths of data without compromising performance. Object oriented programming layed my foundations on how to properly write code and how to efficiently use different methods such as dynamic dispatching, late binding and polymorphism.',
   service3Name: 'Graphic pipelines',
   service3Description: 'The transformation of written code to 3D graphics that interact with the rest of the scene in real time has always fascinated me, thanks to my 3D computer graphics classes I have been able to dive deeper into how dynamic lighting, Phong Shading, voxelisation, how to handle clipping and so much more! This knowledge helped me in building a racing game by using the Processing app.',
   service4Name: 'Formal Language Theory',
   service4Description: 'I have been able to dive deeper inside automaton theory, syntax trees and context free grammar thanks to my courses which has given me a better understanding in turn of diverse automata. Overall formal language theory has helped me understanding how lexical analyzers work and how to create a compiler generator, a skill that has been useful for reinforcing my understanding of language pipelines.',
   contactMessageL: 'ad',
   contactTitle: 'Contact <span>Me</span>',
   nameLabel: 'Name',
   emailLabel: 'Email',
   messageLabel: 'Message',
   sendBtn: 'Send Message',
   emailTitle: 'Email',
   phoneTitle: 'Phone number',
   locationTitle: 'Location'
},
fr: {
   homeTitle: 'Etudiant en informatique &<br><span id="home-typed"></span>',
   homeTypedStrings: ['Développeur Web', 'Designer Graphique', 'Concepteur Logiciel', 'Monteur Vidéo'],
   homeText: 'BACK - ENGLISH - ',
   subtitle: "Salut! Je m'appelle Clark",
   description: "Je crée actuellement des sites web et des jeux. <br>Tout en étudiant l'informatique à l'Université Paris Saclay.",
   aboutTitle: 'Étudiant bilingue franco-anglais en <span> deuxième année de licence </span>, travaillant indépendamment dans le développement web et le montage vidéo <span> et disponible pour travailler! </span><br>',
   aboutDescription: '',
   contactBtn: 'Contactez-moi',
   servicesTitle: '<span>Mes</span> Compétences',
   skillsTitle: '<span>Applications </span> & <span> Langages</span>',
   skillsDescription: "Mes connaissances en conception graphique et design ont été acquises en travaillant sur divers petits projets personnels. Mon temps à l'université s'est concentré davantage sur l'architecture des ordinateurs, les méthodes d'optimisation d'algorithmes et le langage formel.",
   service1Name: "La théorie des graphes appliquée aux méthodes d'optimisation",
   service1Description: "Le fonctionnement et l'emploi de la théorie des graphes/arbres binaires m'a permis de faire le lien entre l'optimisation d'algorithmes récursifs (souvent pour le trier des bases de données) et le langage algébrique. Cela m'a également permis de prouver la validité du code que j'écrivais.",
   service2Name: 'Programmation objet',
   service2Description: "J'ai pu apprendre à écrire du code clair et bien documenté, fait pour gérer de grandes bases de données, tout en m'assurant de toujours pouvoir quantifier et suivre les objets encapsulés en mémoire sans compromis de performance. La programmation objet a posé mes bases fondamentales en écriture de code. Cela m'a permis d'adapter mes méthodes de travail en fonction des scénarios auxquels je fais face, tout en m'enseignant plus en détail les concepts de dispatching dynamique, les modèles de mémoire (ex: malloc) et le polymorphisme.",
   service3Name: 'Pipelines graphiques',
   service3Description: "La transformation du code écrit en graphiques 3D interagissant avec le reste de la scène en temps réel m'a toujours intrigué. Grâce à mes cours d'infographie 3D, j'ai pu approfondir mes connaissances sur l'éclairage dynamique, le Phong Shading, la voxelisation, la gestion du clipping et bien plus encore! Ces connaissances m'ont aidé à construire un jeu de course en utilisant l'application Processing.",
   service4Name: 'Langage formel',
   service4Description: "J'ai pu approfondir mes connaissances en théorie des automates, en arbres syntaxiques et en grammaires hors-contexte grâce à mes cours, ce qui m'a donné une meilleure compréhension des différents automates. Globalement, la théorie du langage formel m'a aidé à comprendre le fonctionnement des analyseurs lexicaux et la création d'un générateur de compilateur, une compétence qui a été utile pour renforcer ma compréhension des pipelines de langage.",
   contactMessageL: 'a',
   contactTitle: 'Contactez-<span>moi</span>',
   nameLabel: 'Nom',
   emailLabel: 'E-mail',
   messageLabel: 'Message',
   sendBtn: 'Envoyer le message',
   emailTitle: 'E-mail',
   phoneTitle: 'Numéro de téléphone',
   locationTitle: 'Localisation'
}
}

//apply immeditalty
const applyTranslations = (lang) => {
   const t = translations[lang]

   const newLetters = t.homeText.trim().split('')
   const newAngleStep = 360 / newLetters.length
   homeText.innerHTML = ''
   newLetters.forEach((char, i) => {
      const span = document.createElement('span')
      span.textContent = char
      span.style.transform = `rotate(${i * newAngleStep}deg)`
      homeText.appendChild(span)
   })
   document.querySelector('.home__title').innerHTML = t.homeTitle
   if (typedHome) typedHome.destroy()
   typedHome = new Typed('#home-typed', {
   strings: t.homeTypedStrings,
   typeSpeed: 60,
   backSpeed: 60,
   backDelay: 2000,
   loop: true,
})

   document.querySelector('.home__subtitle').innerHTML = t.subtitle
   document.querySelector('.home__description').innerHTML = t.description
   document.querySelector('.about__title').innerHTML = t.aboutTitle
   document.querySelector('.about__description').innerHTML = t.aboutDescription
   document.querySelector('.about__button span').textContent = t.contactBtn
   document.querySelector('#service .section__title').innerHTML = t.servicesTitle
   document.querySelector('#skills .section__title').innerHTML = t.skillsTitle
   document.querySelector('.skills__description').innerHTML = t.skillsDescription
   document.getElementById('service1-name').innerHTML = t.service1Name
   document.getElementById('service1-desc').innerHTML = t.service1Description
   document.getElementById('service2-name').innerHTML = t.service2Name
   document.getElementById('service2-desc').innerHTML = t.service2Description
   document.getElementById('service3-name').innerHTML = t.service3Name
   document.getElementById('service3-desc').innerHTML = t.service3Description
   document.getElementById('service4-name').innerHTML = t.service4Name
   document.getElementById('service4-desc').innerHTML = t.service4Description

   document.getElementById('contact-message-label').innerHTML = t.contactMessageL
   // document.getElementById('contact-title').innerHTML = t.contactTitle
   document.getElementById('name-label').innerHTML = t.nameLabel
   document.getElementById('email-label').innerHTML = t.emailLabel
   document.getElementById('contact-message-label').innerHTML = t.messageLabel
   // document.getElementById('send-btn-text').innerHTML = t.sendBtn
   document.getElementById('email-title').innerHTML = t.emailTitle
   document.getElementById('phone-title').innerHTML = t.phoneTitle
   document.getElementById('location-title').innerHTML = t.locationTitle
}

let currentLang = 'en'
applyTranslations(currentLang)

homeCircle.addEventListener('click', (e) => {
   e.preventDefault()
   currentLang = currentLang === 'en' ? 'fr' : 'en'
   applyTranslations(currentLang)
   cycleColor()

// Language change
})


const hues = [110, 220, 358] // GBR
let hueIndex = 0

const cycleColor = () => {
   hueIndex = (hueIndex + 1) % hues.length
   document.documentElement.style.setProperty('--hue', hues[hueIndex])
}
