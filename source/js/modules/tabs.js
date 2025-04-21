const valueSix = document.querySelectorAll('.price__value--six');

const valueTwelve = document.querySelectorAll('.price__value--twelve');
const buttonOne = document.querySelector('.price__button-month--one');
const buttonSix = document.querySelector('.price__button-month--six');
const buttonTwelve = document.querySelector('.price__button-month--twelve');
const value = document.querySelector('.price__value');
const valueOne = document.querySelectorAll('.price__value--one');
const priceItemOne = document.querySelectorAll('.price__filter-item--one');
const priceItemSix = document.querySelectorAll('.price__filter-item--six');


const tabsPriceSix = () => {
  value.classList.remove('price__value-active');
  valueOne.classList.add('price__value-none');
  valueSix.classList.remove('price__value-none');
  valueSix.classList.add('price__value-active');
  priceItemOne.classList.remove('price__filter-item--current');
  priceItemSix.classList.add('price__filter-item--current');

};

buttonSix.addEventListener('click', () => {
  tabsPriceSix();

});


export {buttonSix};
