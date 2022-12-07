/* Dato un array di oggetti letterali con:
-url dell’immagine
-titolo
-descrizione

Creare un carosello.
Milestone 0:
Popoliamo dinamicamente il contenuto del carosello con i dati forniti dall'array di oggetti,
dal js (dentro al nostro 'carousel-item', per capirci).

Milestone 1:
Al click dell'utente sulle frecce verso l'alto o verso il basso, l'immagine attiva diventerà visibile.
Milestone 2:
Aggiungiamo alla visualizzazione delle immagini anche titolo e testo relative alla singola immagine.

Bonus 1:
Aggiungere il ciclo infinito del carosello. Ovvero se l'immagine attiva è la prima e l'utente clicca la freccia verso l'alto,
l'immagine che deve attivarsi sarà l'ultima e viceversa per l'ultima immagine se l'utente clicca la freccia verso il basso.

Bonus 2:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.

Bonus 3:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva
dovrà cambiare alla successiva.
 */


const images = [
        {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
        },
        {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
        },
        {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        },
        {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
        },
        {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
        }
    ];

    const carouselDiv = document.querySelector("div.carousel-image");

    
    let activeIndex = 0;

    images.forEach((slide) => {


    carouselDiv.innerHTML += `
        <div class="my_carousel-item">
            <img src="${slide.image}" alt="${slide.title}'s image" >
            <h3>${slide.title}</h3>
            <p>${slide.text}</p>
        </div>`;
    });

    // set default class .active
    document.getElementsByClassName('my_carousel-item')[activeIndex].classList.add('active');

    

    const prevButton = document.querySelector('div.button.previous');

    prevButton.addEventListener(('click'), function(){
    
    activeIndex = (activeIndex <= 0) ? images.length - 1 : activeIndex - 1;
    console.log(activeIndex);
    changeSlide(activeIndex);
    });

    
    const nextButton = document.querySelector('div.button.next');
    
    nextButton.addEventListener(('click'), function(){
    activeIndex = (activeIndex >=  images.length - 1) ? 0 : activeIndex + 1;
    changeSlide(activeIndex);
    });


    function changeSlide(elementToShow){
        
        document.querySelector('div.my_carousel-item.active').classList.remove('active');
        document.getElementsByClassName('my_carousel-item')[elementToShow].classList.add('active');
        
        return elementToShow;
    }