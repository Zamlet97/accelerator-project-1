const faq = document.querySelector('.faq');
const buttonCentry = faq.querySelector('.faq__button--centry');
const buttonSubscription = faq.querySelector('.faq__button--subscription');
const buttonService = faq.querySelector('.faq__button--service');
const buttonRules = faq.querySelector('.faq__button--rules');
const listCentry = faq.querySelector('.faq__answers-list--centry');
const listSubscription = faq.querySelector('.faq__answers-list--subscription');
const listService = faq.querySelector('.faq__answers-list--service');
const listRules = faq.querySelector('.faq__answers-list--rules');
const itemCentry = faq.querySelector('.faq__item--centry');
const itemSubscription = faq.querySelector('.faq__item--subscription');
const itemService = faq.querySelector('.faq__item--service');
const itemRules = faq.querySelector('.faq__item--rules');
const faqItem = document.querySelectorAll('.faq__item');
const listAnswers = faq.querySelectorAll('.faq__answers-list');

const tabsCentry = () => {
  listAnswers.forEach((element) => {
    element.classList.add('hidden');
  });
  listCentry.classList.remove('hidden');
  faqItem.forEach((element) => {
    element.classList.remove('faq__item--current');
  });
  itemCentry.classList.add('faq__item--current');
};

const tabsSubscription = () => {
  listAnswers.forEach((element) => {
    element.classList.add('hidden');
  });
  listSubscription.classList.remove('hidden');
  faqItem.forEach((element) => {
    element.classList.remove('faq__item--current');
  });
  itemSubscription.classList.add('faq__item--current');
};

const tabsService = () => {
  listAnswers.forEach((element) => {
    element.classList.add('hidden');
  });
  listService.classList.remove('hidden');
  faqItem.forEach((element) => {
    element.classList.remove('faq__item--current');
  });
  itemService.classList.add('faq__item--current');
};

const tabsRules = () => {
  listAnswers.forEach((element) => {
    element.classList.add('hidden');
  });
  listRules.classList.remove('hidden');
  faqItem.forEach((element) => {
    element.classList.remove('faq__item--current');
  });
  itemRules.classList.add('faq__item--current');
};

buttonCentry.addEventListener('click', () => {
  tabsCentry();
});

buttonSubscription.addEventListener('click', () =>{
  tabsSubscription();
});

buttonService.addEventListener('click', () => {
  tabsService();
});

buttonRules.addEventListener('click', () => {
  tabsRules();
});
