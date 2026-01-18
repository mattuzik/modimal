import './styles/main.css'

import { createHeader } from './components/header/header.js';
import { createHero } from './components/hero/hero.js';
import { createSellers } from './components/bestSellers/sellers.js';
import { createCardsInSectionSellers } from './components/productCard/productCard.js';
import { createCollection } from './components/Collection/collection.js';
import { createFollowSection } from './components/follow/follow.js';
import { createFooter } from './components/footer/footer.js'; 

import Header from './components/header/HeaderOverlay.js';
import AccordionCollection from './components/header/Accordion.js';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.querySelector('#header').innerHTML = createHeader();
document.querySelector('#hero').innerHTML = createHero();
document.querySelector('#sellers').innerHTML = createSellers();
document.querySelector('#collection').innerHTML = createCollection();
document.querySelector('#follow').innerHTML = createFollowSection();
document.querySelector('#footer').innerHTML = createFooter();

document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    spaceBetween: 30,

    loop: false,

    breakpoints: {
      768: {
        slidesPerView: 3,
      },
  },

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
});

createCardsInSectionSellers()

new Header()
new AccordionCollection()