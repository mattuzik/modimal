import data from '../../data/cards.json'

export function createCardsInSectionSellers() {
  data.forEach(card => {
    const cardsWrapper = document.querySelector('#cards')
    const info = {
      id: card.id,
      img: card.image,
      title: card.title,
      description: card.description,
      price: card.price,
      colors: card.colors,
    }

    cardsWrapper.insertAdjacentHTML('beforeend', `
    <div class="swiper-slide">
      <article class="card" id="${card.id}" data-js-favourite-card>
        <div class="card__button-favourite">
          <button class="card__favourite" data-js-favourite-button>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="heart-icon" d="M16.5 3.825C19.0277 3.825 21 5.79729 21 8.325C21 9.88653 20.3066 11.3817 18.8818 13.1248C17.4459 14.8815 15.3736 16.7653 12.7793 19.1229L12.002 19.824L11.2236 19.115L11.2217 19.1141C8.62662 16.7609 6.55418 14.8785 5.11816 13.1229C3.69361 11.3812 3 9.88652 3 8.325C3 5.79729 4.97228 3.825 7.5 3.825C8.93712 3.825 10.3319 4.499 11.2383 5.56328L12 6.45781L12.7617 5.56328C13.6681 4.499 15.0629 3.825 16.5 3.825Z" fill="white" stroke="#202020" stroke-width="2" />
            </svg>
          </button>
        </div>

        <div class="card__picture">
          <img src="../../../public/images/card-images/best-${info.img}.jpg" alt="tailored stretch" class="card__image" data-js-favourite-card-image>
        </div>

        <div class="card__body">
          <h3 class="card__title h4"><a href="#!" data-js-favourite-card-title>${info.title}</a></h3>
          <div class="card__columns">
            <div class="card__description" data-js-favourite-card-description>${info.description}</div>
            <h4 class="card__price" data-js-favourite-card-price>${info.price}$</h4>
          </div> 
          <div class="card__colors">
            <div class="card__color color color-${info.colors[0]}"></div>
            <div class="card__color color color-${info.colors[1]}"></div>
            <div class="card__color color color-${info.colors[2]}"></div>
          </div> 
        </div>
      </article>
    </div>`)
  });
}