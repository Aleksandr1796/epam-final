var xml = new XMLHttpRequest();
xml.open('GET', '../portfolio.json', false);
xml.send();
var require = JSON.parse(xml.response);
var pages = Math.ceil(require.length / 9);
var container = document.querySelector('.container');
var navItems = document.querySelector('.pagination ul');
require.forEach(function(item, i) {
	if(i < 9) {
		var article = document.createElement('ARTICLE');
		var figure = document.createElement('FIGURE');
		var a = document.createElement('A');
		a.setAttribute('href', item.link);
		var img = document.createElement('IMG');
		img.setAttribute('src', item.src);
		img.setAttribute('alt', item.title);
		var fon = document.createElement('DIV');
		fon.classList = 'fon';
		a.appendChild(img);
		a.appendChild(fon);
		figure.appendChild(a);
		article.appendChild(figure);
		container.appendChild(article);
	}
});
createPaginationItems(pages);
navItems.addEventListener('click', paginImages)
function createPaginationItems(pages) {
	var i;
	for(i = 1; i <= pages; i++) {
		var li = document.createElement('LI');
		var a = document.createElement('A');
		a.setAttribute('href', '#');
		a.innerText = i;
		if(i === 1) {
			a.classList = 'active';
		}
		li.appendChild(a);
		navItems.appendChild(li);
	}
}
function paginImages(e) {
	e.preventDefault();
	var tabItems = document.querySelectorAll('.pagination a');
	tabItems.forEach(function(item) {
		item.classList = "";
	});
	e.target.classList = "active";
	container.innerHTML = '';
	require.forEach(function(item, i) {
		if(i >= e.target.innerText * 9 - 9 && i < e.target.innerText * 9) {
			var article = document.createElement('ARTICLE');
			var figure = document.createElement('FIGURE');
			var a = document.createElement('A');
			a.setAttribute('href', item.link);
			var img = document.createElement('IMG');
			img.setAttribute('src', item.src);
			img.setAttribute('alt', item.title);
			var fon = document.createElement('DIV');
			fon.classList = 'fon';
			a.appendChild(img);
			a.appendChild(fon);
			figure.appendChild(a);
			article.appendChild(figure);
			container.appendChild(article);
		}
	});
}