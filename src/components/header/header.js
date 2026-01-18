export const createHeader = () => `
<div class="header__promo">
  <div class="header__promo-content container">
    <h1 class="header__promo-title h6">Enjoy Free Shipping On All Orders</h1>
  </div>
</div>
<div class="header__body container">
  <ul class="header__actions visible-tablet">
    <li class="header__action">
      <button class="header__action-link burger-button" title="open menu" data-js-header-burger-button>
        <span class="burger-button__line"></span>
        <span class="burger-button__line"></span>
        <span class="burger-button__line"></span>
      </button>
    </li>

    <li class="header__action">
      <a href="#!" class="header__action-link">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#0C0C0C" />
        </svg>
      </a>
    </li>
  </ul>

  <a class="header__logo" href="#!">
    <img src="./public/icons/logo.svg" alt="logotype" class="header__logo-image">
  </a>


  <nav class="header__navigation hidden-tablet">
    <ul class="header__navigation-list">
      <li class="header__navigation-item"><a href="#!" class="header__navigation-link">Collection</a></li>
      <li class="header__navigation-item"><a href="#!" class="header__navigation-link">Modiweek</a></li>
      <li class="header__navigation-item"><a href="#!" class="header__navigation-link">Plus Size</a></li>
      <li class="header__navigation-item"><a href="#!" class="header__navigation-link">Sustainability</a></li>
    </ul>
  </nav>


  <ul class="header__actions hidden-tablet">
    <li class="header__action">
      <a href="#!" class="header__action-link">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#0C0C0C" />
          </svg>
      </a>
    </li>

    <li class="header__action">
      <a href="#!" class="header__action-link">
        <svg width="17" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.39 11.56C12.71 10.7 10.53 10 8 10C5.47 10 3.29 10.7 1.61 11.56C0.61 12.07 0 13.1 0 14.22V17H16V14.22C16 13.1 15.39 12.07 14.39 11.56ZM14 15H2V14.22C2 13.84 2.2 13.5 2.52 13.34C3.71 12.73 5.63 12 8 12C10.37 12 12.29 12.73 13.48 13.34C13.8 13.5 14 13.84 14 14.22V15Z" fill="#202020" />
          <path d="M8 9C10.21 9 12 7.21 12 5C12 3.63 12 1.5 12 1.5C12 0.67 11.33 0 10.5 0C9.98 0 9.52 0.27 9.25 0.67C8.98 0.27 8.52 0 8 0C7.48 0 7.02 0.27 6.75 0.67C6.48 0.27 6.02 0 5.5 0C4.67 0 4 0.67 4 1.5C4 1.5 4 3.62 4 5C4 7.21 5.79 9 8 9ZM6 2.5H10V5C10 6.1 9.1 7 8 7C6.9 7 6 6.1 6 5V2.5Z" fill="#202020" />
        </svg>
      </a>
    </li>

    <li class="header__action">
      <a href="#!" class="header__action-link" data-js-header-open-fav>
        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="heart-icon" d="M14.5 1C17.0277 1 19 2.97228 19 5.5C19 7.06153 18.3066 8.5567 16.8818 10.2998C15.4459 12.0565 13.3736 13.9403 10.7793 16.2979L10.002 16.999L9.22363 16.29L9.22168 16.2891C6.62662 13.9359 4.55418 12.0535 3.11816 10.2979C1.69361 8.5562 1 7.06152 1 5.5C1 2.97228 2.97228 1 5.5 1C6.93712 1 8.33187 1.674 9.23828 2.73828L10 3.63281L10.7617 2.73828C11.6681 1.674 13.0629 1 14.5 1Z" fill="white" stroke="#0C0C0C" stroke-width="2" />
        </svg>
      </a>
    </li>

    <li class="header__action">
      <a href="#!" class="header__action-link">
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 4H12C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4H2C0.9 4 0 4.9 0 6V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V6C16 4.9 15.1 4 14 4ZM8 2C9.1 2 10 2.9 10 4H6C6 2.9 6.9 2 8 2ZM14 18H2V6H4V8C4 8.55 4.45 9 5 9C5.55 9 6 8.55 6 8V6H10V8C10 8.55 10.45 9 11 9C11.55 9 12 8.55 12 8V6H14V18Z" fill="#202020" />
        </svg>
      </a>
    </li>
  </ul>

  <ul class="header__actions visible-tablet">
    <li class="header__action">
      <a href="#!" class="header__action-link" data-js-header-open-fav>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="heart-icon" d="M16.5 3.825C19.0277 3.825 21 5.79729 21 8.325C21 9.88653 20.3066 11.3817 18.8818 13.1248C17.4459 14.8815 15.3736 16.7653 12.7793 19.1229L12.002 19.824L11.2236 19.115L11.2217 19.1141C8.62662 16.7609 6.55418 14.8785 5.11816 13.1229C3.69361 11.3812 3 9.88652 3 8.325C3 5.79729 4.97228 3.825 7.5 3.825C8.93712 3.825 10.3319 4.499 11.2383 5.56328L12 6.45781L12.7617 5.56328C13.6681 4.499 15.0629 3.825 16.5 3.825Z" fill="white" stroke="#0C0C0C" stroke-width="2" />
        </svg>
      </a>
    </li>

    <li class="header__action">
      <a href="#!" class="header__action-link">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM18 20H6V8H8V10C8 10.55 8.45 11 9 11C9.55 11 10 10.55 10 10V8H14V10C14 10.55 14.45 11 15 11C15.55 11 16 10.55 16 10V8H18V20Z" fill="#202020" />
        </svg>
      </a>
    </li>
  </ul>
</div>

<div class="header__overlay container" data-js-header-overlay>
  <div class="header__overlay-content">

    <ul class="header__overlay-links">
      <li class="header__overlay-accordion accordion" data-js-accordion>
        <div class="accordion__top" data-js-accordion-open-button>
          <p class="accordion__title">Collection</p>
          <img src="./public/icons/keyboard_arrow_down.svg" class="accordion__arrow">
        </div>
        <ul class="accordion__body" data-js-accordion-body>
          <li class="accordion__body-link"><a class="accordion__link" href="#!">Tops</a></li>
          <li class="accordion__body-link"><a class="accordion__link" href="#!">Jeans</a></li>
          <li class="accordion__body-link"><a class="accordion__link" href="#!">Boots</a></li>
        </ul>
      </li>

      <li class="header__overlay-accordion accordion" data-js-accordion>
        <div class="accordion__top" data-js-accordion-open-button>
          <p class="accordion__title">New In</p>
          <img src="./public/icons/keyboard_arrow_down.svg" class="accordion__arrow">
        </div>
        <ul class="accordion__body" data-js-accordion-body>
          <li class="accordion__body-link"><a class="accordion__link" href="#!">Shop All</a></li>
          <li class="accordion__body-link"><a class="accordion__link" href="#!">Tops & Blouses</a></li>
          <li class="accordion__body-link"><a class="accordion__link" href="#!">Tees</a></li>
          <li class="accordion__body-link"><a class="accordion__link" href="#!">Pants</a></li>
          <li class="accordion__body-link"><a class="accordion__link" href="#!">Jackets & Outwears</a></li>
          <li class="accordion__body-link"><a class="accordion__link" href="#!">Pullovers</a></li>
          <li class="accordion__body-link"><a class="accordion__link" href="#!">dresses & jumpsuits</a></li>
          <li class="accordion__body-link"><a class="accordion__link" href="#!">Short & Skirts</a></li>
        </ul>
      </li>

      <li class="header__overlay-accordion accordion" data-js-accordion>
        <div class="accordion__top" data-js-accordion-open-button>
          <p class="accordion__title">Modiweek</p>
          <img src="./public/icons/keyboard_arrow_down.svg" class="accordion__arrow">
        </div>
        <ul class="accordion__body" data-js-accordion-body>
          <li class="accordion__body-link"><a class="accordion__link" href="#!">Balenciaga</a></li>
          <li class="accordion__body-link"><a class="accordion__link" href="#!">Rick Owens</a></li>
          <li class="accordion__body-link"><a class="accordion__link" href="#!">Maison Margela</a></li>
          <li class="accordion__body-link"><a class="accordion__link" href="#!">Gucci</a></li>
          <li class="accordion__body-link"><a class="accordion__link" href="#!">Chanel</a></li>
          <li class="accordion__body-link"><a class="accordion__link" href="#!">Louis Vuitton</a></li>
        </ul>
      </li>    
      
      <li class="header__overlay-accordion accordion" data-js-accordion>
        <div class="accordion__top" data-js-accordion-open-button>
          <p class="accordion__title">Plus Size</p>
          <img src="./public/icons/keyboard_arrow_down.svg" class="accordion__arrow">
        </div>
        <ul class="accordion__body" data-js-accordion-body>
          <li class="accordion__body-link"><a class="accordion__link" href="#!">L</a></li>
          <li class="accordion__body-link"><a class="accordion__link" href="#!">XL</a></li>
          <li class="accordion__body-link"><a class="accordion__link" href="#!">XXL</a></li>
        </ul>
      </li>     
      
      <li class="header__overlay-accordion accordion" data-js-accordion>
        <div class="accordion__top" data-js-accordion-open-button>
          <p class="accordion__title">Sustainability </p>
          <img src="./public/icons/keyboard_arrow_down.svg" class="accordion__arrow">
        </div>
        <ul class="accordion__body" data-js-accordion-body>
          <li class="accordion__body-link"><a class="accordion__link" href="#!">Mission</a></li>
          <li class="accordion__body-link"><a class="accordion__link" href="#!">Processing</a></li>
          <li class="accordion__body-link"><a class="accordion__link" href="#!">Materials</a></li>
          <li class="accordion__body-link"><a class="accordion__link" href="#!">Packaging</a></li>
          <li class="accordion__body-link"><a class="accordion__link" href="#!">Product Care</a></li>
          <li class="accordion__body-link"><a class="accordion__link" href="#!">Our Suppliers</a></li>
        </ul>
      </li>          
    </ul>

    <div class="header__overlay-buttons">
      <a href="#!" class="header__overlay-button profile-icon green-outline-button">
        <img src="./public/icons/profile.svg"/>
        <span>Log In</span>
      </a>
      <a href="#!" class="header__overlay-button green-outline-button">Create Account</a>
    </div>
  </div>
</div>
`;

