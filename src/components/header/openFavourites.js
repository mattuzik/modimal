export function openFavourites() { 
  const openFavButtonElements = document.querySelectorAll('[data-js-header-open-fav]')
  openFavButtonElements.forEach(openFavButtonElement => {
    openFavButtonElement.addEventListener('click', () => {
      document.querySelector('main').classList.add('visually-hidden')
      document.querySelector('favourite').classList.remove('visually-hidden')
    })
  })
}

export function closeFavourites() { 
  const closeFavButtonElement = document.querySelector('.header__logo')
  closeFavButtonElement.addEventListener('click', () => {
    document.querySelector('main').classList.remove('visually-hidden')
    document.querySelector('favourite').classList.add('visually-hidden')
  })
}