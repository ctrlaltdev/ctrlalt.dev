console.warn('I have become self aware, human.');

var colors = ["#ef476f", "#ffd166", "#06d6a0", "#118ab2", "#4b3f72", "#13bbc4", "#331824", "#c61981", "#5471a4", "#f93b3b", "#619fad", "#248232", "#d62828", "#f77f00", "#003049"];

function setBorderColors() {
  let elems = document.querySelectorAll('section article .content');
  let lasti = 0;
  [].forEach.call(elems, function(elem) {
    let i = generateRandom(15, lasti)
    elem.style.borderColor = colors[i];
    lasti = i;
  });

  document.querySelector('#aboutme h3 a[href^="/resume/"]').style.borderColor = colors[generateRandom(15)];
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
    let i = 0;
    [].forEach.call(elems, function(elem) {
      elem.style.backgroundColor = colors[i%4];
      i++;
    });

    if(document.querySelector('section#descriptions.visible article.visible') && document.querySelector('section#descriptions.visible')) {
      document.querySelector('section#descriptions.visible article.visible').classList.remove('visible');
      document.querySelector('section#descriptions.visible').classList.remove('visible');
    }

    document.getElementById('descriptions').classList.add('visible');
    document.getElementById(hash).classList.add('visible');
  }
}

document.querySelector('section#descriptions #close').addEventListener('click', () => {
  document.querySelector('section#descriptions.visible article.visible').classList.remove('visible');
  document.querySelector('section#descriptions.visible').classList.remove('visible');
  window.location.hash = '';
});

window.addEventListener('hashchange', displayProject);