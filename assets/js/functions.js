console.warn('I have become self aware, human.');

var colors = ["cyan", "magenta", "orange", "lime"];

function setBorderColors() {
  let elems = document.querySelectorAll('section article .content');
  let lasti = 0;
  [].forEach.call(elems, function(elem) {
    let i = generateRandom(4, lasti)
    elem.style.borderColor = colors[i];
    lasti = i;
  });
}

switch (window.location.pathname) {
  case "/":
    document.querySelector('body').id = 'project';
    break;
  case "/about":
    document.querySelector('body').id = 'about';
    setBorderColors();
    break;
  case "/datalove":
    document.querySelector('body').id = 'datalove';
    datalove();
    break;
}

if (document.querySelector('li.current')) {
  document.querySelector('li.current').classList.remove('current');
}
setTimeout(function () {
  if (document.querySelector('a[href="' + window.location.pathname + '"]')) {
    document.querySelector('a[href="' + window.location.pathname + '"]').parentNode.classList.add('current');
  }
  let index = Math.floor(Math.random() * colors.length);
  document.querySelector('.current a').style.color = colors[index];
}, 0);

function datalove(i = -1) {
  let datawrap = document.querySelector('div#data p span.wrapper');
  if (i !== -1) { datawrap.removeChild(datawrap.querySelector('span')); }
  var datatext = ['power', 'knowledge', 'love', 'everything', 'pure', 'perfect', 'life', 'cool', '42', 'fun', 'free', 'good'];
  let dataslide = document.createElement('span');
  let index = generateRandom(datatext.length, i);
  dataslide.className = 'colorset-' + (index % 5);
  let dataslideTxt = document.createTextNode(datatext[index]);
  dataslide.appendChild(dataslideTxt);
  datawrap.appendChild(dataslide);
  dataslide.classList.add('slideup');
  setTimeout(function () { datalove(index); }, 2000);
};

function generateRandom(max, exclude = -1) {
  var num = Math.floor(Math.random() * max);
  return (num === exclude) ? generateRandom(max, exclude) : num;
}

function displayProject() {
  if(window.location.hash.substr(1) != "") {
    let hash = window.location.hash.substr(1);
  
    let elems = document.querySelectorAll('#descriptions article a');
    let lasti = 0;
    [].forEach.call(elems, function(elem) {
      let i = generateRandom(4, lasti)
      elem.style.backgroundColor = colors[i];
      lasti = i;
    });

    document.getElementById('descriptions').classList.add('visible');
    document.getElementById(hash).classList.add('visible');
  }
}

document.querySelector('section#descriptions').addEventListener('click', () => {
  document.querySelector('section#descriptions.visible article.visible').classList.remove('visible');
  document.querySelector('section#descriptions.visible').classList.remove('visible');
  window.location.hash = '';
});

window.addEventListener('hashchange', displayProject);