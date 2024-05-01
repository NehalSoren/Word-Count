const result = document.getElementById(
  'result');
const button = document.getElementById(
  'check');

function count() {
  const word = document.getElementById(
    'word').value;
  const letter = document
    .getElementById('letter').value.trim();
  let count = 0;
  let length = word.length;
  for (let i = 1; i < length; i++) {
    if (word[i] == letter) {
      count++;
    }
  };
  return count;
}

button.addEventListener('click',
  function() {
    let occurance = count();
    result.innerHTML = occurance;
  })