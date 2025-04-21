const price = document.querySelector('.price');
const buttonOne = price.querySelector('.price__button-month--one');
const buttonSix = price.querySelector('.price__button-month--six');
const buttonTwelve = price.querySelector('.price__button-month--twelve');
const values = price.querySelectorAll('.price__value');
const valuesOne = price.querySelectorAll('.price__value--one');
const valuesSix = price.querySelectorAll('.price__value--six');
const valuesTwelve = price.querySelectorAll('.price__value--twelve');
const priceItemOne = price.querySelector('.price__filter-item--one');
const priceItemSix = price.querySelector('.price__filter-item--six');
const priceItemTwelve = price.querySelector('.price__filter-item--twelve');


const tabsPriceOne = () => {
  values.forEach((element) => {
    element.classList.remove('price__value-active');
  });
  valuesOne.forEach((element) => {
    element.classList.remove('price__value-none');
  });
  valuesTwelve.forEach((element) => {
    element.classList.add('price__value-none');
  });
  valuesSix.forEach((element) => {
    element.classList.add('price__value-none');
  });
  buttonOne.classList.add('price__button-month--current');
  priceItemOne.classList.add('price__filter-item--current');
  buttonSix.classList.remove('price__button-month--current');
  buttonTwelve.classList.remove('price__button-month--current');
  priceItemTwelve.classList.remove('price__filter-item--current');
  priceItemSix.classList.remove('price__filter-item--current');
};

const tabsPriceSix = () => {
  values.forEach((element) => {
    element.classList.remove('price__value-active');
  });
  valuesOne.forEach((element) => {
    element.classList.add('price__value-none');
  });
  valuesTwelve.forEach((element) => {
    element.classList.add('price__value-none');
  });
  valuesSix.forEach((element) => {
    element.classList.remove('price__value-none');
  });
  valuesSix.forEach((element) => {
    element.classList.add('price__value-active');
  });
  buttonOne.classList.remove('price__button-month--current');
  priceItemSix.classList.add('price__filter-item--current');
  buttonTwelve.classList.remove('price__button-month--current');
  buttonSix.classList.add('price__button-month--current');

  priceItemTwelve.classList.remove('price__filter-item--current');
  priceItemOne.classList.remove('price__filter-item--current');

};

const tabsPriceTwelve = () => {
  values.forEach((element) => {
    element.classList.remove('price__value-active');
  });
  valuesOne.forEach((element) => {
    element.classList.add('price__value-none');
  });
  valuesSix.forEach((element) => {
    element.classList.add('price__value-none');
  });
  valuesTwelve.forEach((element) => {
    element.classList.remove('price__value-none');
  });
  valuesTwelve.forEach((element) => {
    element.classList.add('price__value-active');
  });
  buttonOne.classList.remove('price__button-month--current');
  buttonSix.classList.remove('price__button-month--current');
  buttonTwelve.classList.add('price__button-month--current');
  priceItemTwelve.classList.add('price__filter-item--current');
  priceItemOne.classList.remove('price__filter-item--current');
  priceItemSix.classList.remove('price__filter-item--current');
};

buttonOne.addEventListener('click', () => {
  tabsPriceOne();
});

buttonSix.addEventListener('click', () => {
  tabsPriceSix();
});

buttonTwelve.addEventListener('click', () => {
  tabsPriceTwelve();
});

export {buttonOne, buttonSix, buttonTwelve};
