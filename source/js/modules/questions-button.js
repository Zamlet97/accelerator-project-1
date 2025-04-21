const faqButton = document.querySelector('.faq__answers-button');
const buttonPluss = document.querySelectorAll('.faq__answers-button--plus');
const buttonMinus = document.querySelectorAll('.faq__answers-button--minus');
const answersText = document.querySelector('.faq__answers-text');
const answersTitle = document.querySelector('.faq__answers-title');
const details = document.querySelectorAll('details');

const answers = () => {

    if ()
  answersTitle.forEach((element) => {

  };
  // faqButton.classList.add('hidden');
  // buttonMinus.classList.remove('hidden');
  // answersText.classList.remove('hidden');
  // buttonMinus.forEach((element) => {
  //   element.classList.remove('hidden');
  // });
  // buttonPluss.forEach((element) => {
  //   element.classList.add('hidden');
  // });
  // answersText.classList.remove('hidden');
};

const answersHidden = () => {
  // faqButton.forEach((element) => {
  //   element.classList.add('faq__answers-button--plus');
  // });
  // buttonMinus.classList.add('hidden');

  // // buttonPluss.forEach((element) => {
  // //   element.classList.remove('hidden');
  // // });
  // // buttonPlus.classList.remove('hidden');
  // answersText.classList.add('hidden');
  // buttonPluss.forEach((element)=>{
  //   element.classList.remove('hidden');
  // });

  // buttonPlus.classList.remove('hidden');
  // buttonMinus.classList.add('hidden');
  // answersText.classList.add('hidden');

};

buttonPluss.addEventListener('click', () => {
  answers();
});

buttonMinus.addEventListener('click', () => {
  answersHidden();
});
