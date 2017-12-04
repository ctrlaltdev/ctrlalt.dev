console.warn('I have become self aware, human.');

switch (window.location.pathname) {
  case "/":
    document.querySelector('body').id = 'project';
    break;
  case "/project/":
    document.querySelector('body').id = 'project';
    break;
  case "/about/":
    document.querySelector('body').id = 'about';
    break;
  case "/datalove/":
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
  } else if (window.location.pathname == "/") { document.querySelector('a[href="/project/"]').parentNode.classList.add('current'); }
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