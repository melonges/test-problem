
const input = document.querySelector('#input');
const renderResult = document.querySelector('.popup__citys');

const list = document.getElementById('list');
const newLi = document.createElement('li');
let timer;

input.addEventListener('input', async event => {
  debounce(event.target.value, 300, (data) => {
    data.forEach((item) => {
      addToList(item.name);
    })
  })
});

function addToList(value) {
  const newLi = document.createElement('li');
  newLi.innerHTML = value;
  list.appendChild(newLi);
  setTimeout(function() {
    newLi.className = newLi.className + " show";
  }, 10);
}

function debounce(query, delay = 300, callback) {
  query = query.trim();

  if (list.childElementCount > 0) {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
    clearTimeout(timer);
    if (!query) {
      return;
    }
  }



  if (timer) {
    clearTimeout(timer);
  }

  timer = setTimeout(async () => {
    const response = await fetch(`/api/search?searchTerm=${query}&page=0&limit=15`);
    const data = await response.json();
    callback(data);
  }, delay);

}
