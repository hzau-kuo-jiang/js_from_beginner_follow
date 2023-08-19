let names = {
  "Laurence": 0,
  "Mike": 0,
  "John": 0,
  "Larry": 0,
  "A": 0,
};
const addFriend = document.querySelector('#addFriend');
const addNew = document.querySelector('#addNew');
const output = document.querySelector('#output');


const formatName = name => name.trim().charAt(0).toUpperCase() + name.trim().slice(1).toLowerCase();

const updateNames = (names, name) => ({...names, [name]: names[name] === undefined ? 0 : names[name] + 1});


const render = (names, target) => {
  target.innerHTML =
    Object.keys(names).map(name =>
      `<tr>
        <td>${name}</td>
        <td>${names[name]}</td>
      </tr>`).join("");
};

output.addEventListener('click', function (e) {
  const target = e.target;
  if (target.tagName === 'TD') {
    const tr = target.parentElement;
    const name = tr.firstElementChild.textContent;
    names = updateNames(names, name);
    render(names, output);
  }
});


function getTdByName(name) {
  let td;
  output.childNodes.forEach(tr => {
    if (tr.firstElementChild.textContent === name) {
      td = tr.firstElementChild;
    }
  });
  return td;
}

function simulateClick(td) {
  const tr = td.parentElement;
  tr.classList.add('active');
  setTimeout(() => tr.classList.remove('active'), 100);
}

addNew.addEventListener('click', function () {
  const name = formatName(addFriend.value);
  if (name === "") {
    return;
  }
  names = updateNames(names, name);
  resetInput(addFriend);
  simulateClick(getTdByName(name));
  setTimeout(() => render(names, output), 200);
});

function resetInput(input) {
  input.value = "";
  input.focus();
}

render(names, output);