const rootSelector = '[data-js-accordion]'

class Accordion {
  selectors = {
    root: rootSelector,
    openButton: '[data-js-accordion-open-button]',
  }

  stateClasses = {
    isOpen: 'is-open',
  }

  constructor(rootElement) {
    this.rootElement = rootElement
    this.openButtonElement = this.rootElement.querySelector(this.selectors.openButton)
    this.bindEvents()
  }

  toggleAccordionStatus = () => {
    this.rootElement.classList.toggle(this.stateClasses.isOpen)
  }

  bindEvents() {
    this.openButtonElement.addEventListener('click', this.toggleAccordionStatus)
  }
}

export default class AccordionCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new Accordion(element)
    })
  }
}