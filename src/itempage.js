let xml = new XMLHttpRequest();
xml.open('GET', '../items.json', false);
xml.send();
let require = JSON.parse(xml.response);
let load = document.querySelectorAll('.other-pages > a > img');
var modalItem = document.querySelector('.main-content');
var modalControl = document.getElementById('open-modal');
var imgs = Array.from(document.querySelectorAll('.main-content img'));
var indexImg = localStorage.key(0) ? localStorage.getItem('lastImgIndex') : 0;
localStorage.setItem('lastImgIndex', indexImg);
document.querySelector('#open-modal img').src = imgs[localStorage.getItem('lastImgIndex')].src;
function loadOtherItems() {
	let typeOfItem = document.querySelector('.head-description > h3').innerText.toLowerCase();
	let title = document.querySelector('.head-description > h1').innerText;
	let otherPagesArticles = document.querySelector('.other-pages-articles');
	let arrTitle = Array.from(typeOfItem.split(','));
	require.forEach(function(item) {
		if(item.relation.forEach(function(elem) {
			arrTitle.forEach(function(el) {
				if(elem.toLowerCase() === el.toLowerCase() && item.title.toLowerCase() !== title.toLowerCase()) {
					let article = document.createElement('ARTICLE');
					let a = document.createElement('A');
					a.setAttribute('href', item.link.slice(6));
					let img = document.createElement('IMG');
					img.setAttribute('src', item.src);
					let divFon = document.createElement('DIV');
					divFon.classList = 'fon';
					let h3 = document.createElement('H3');
					h3.innerText = item.title;
					a.appendChild(img);
					a.appendChild(divFon);
					article.appendChild(a);
					article.appendChild(h3);
					otherPagesArticles.appendChild(article);
				}
			});
		}));
	});
	window.removeEventListener('load', loadOtherItems);
}

function activeImg(e) {
	document.querySelector('#open-modal img').src = e.target.src;
	imgs.forEach(function(item, i) {
		if(item.src === e.target.src) {
			indexImg = i;
		}
	});
}

function changeImg(e) {
	if(e.target.className !== 'fas fa-times') {
		e.preventDefault();
		if(e.target.className === 'fas fa-angle-left') {
			if(indexImg === 0) {
				indexImg = imgs.length;
			}
			indexImg--;
			document.querySelector('#open-modal img').src = imgs[indexImg].src;
		}
		if(e.target.className === 'fas fa-angle-right') {
			if(indexImg === imgs.length-1) {
				indexImg = -1;
			}
			indexImg++;
			document.querySelector('#open-modal img').src = imgs[indexImg].src;
		}
	} 
	localStorage.setItem('lastImgIndex', indexImg);
}

modalControl.addEventListener('click', changeImg);
modalItem.addEventListener('click', activeImg);
window.addEventListener('load', loadOtherItems);


