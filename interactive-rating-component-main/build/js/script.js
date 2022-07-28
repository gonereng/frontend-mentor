const btns = document.getElementsByClassName('btn');
const ratingForm = document.getElementById('ratingForm');
const selectedValueSpan = document.getElementById('selectedValueSpan');

const rating = document.getElementById('rating');
const thankYou = document.getElementById('thank-you');

let selectedValue;

const clearSelected = () => {
  for (let btn of btns) {
    btn.classList.remove('selected');
  }
};

for (let btn of btns) {
  btn.addEventListener('click', (event) => {
    clearSelected();
    event.target.classList.toggle('selected');
    selectedValue = Number(event.target.innerHTML);
  });
}

ratingForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (selectedValue) {
    selectedValueSpan.innerText = selectedValue;
    rating.classList.add('hidden');
    thankYou.classList.remove('hidden');
  } else {
    alert('Please select a rating');
  }
});
