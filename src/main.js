var xml = new XMLHttpRequest();
xml.open('GET', 'items.json', false);
xml.send();
var require = JSON.parse(xml.response);

// function loadItems() {
// 	var i = document.querySelector('.main-content').childElementCount;
// 	var plusCount = i + 6;
// 	for(i; i < plusCount && i < require.length; i++) {
// 		var article = document.createElement('ARTICLE');
// 		article.className = require[i].class;
// 		var a = document.createElement('A');
// 		a.setAttribute('href', '');
// 		var h3 = document.createElement('H3');
// 		h3.innerText = require[i].title;
// 		var img = document.createElement('IMG');
// 		img.setAttribute('src', require[i].src);
// 		img.setAttribute('alt', require[i].title);
// 		var div = document.createElement('DIV');
// 		div.className = 'fon';
// 		a.appendChild(img);
// 		a.appendChild(div); 
// 		article.appendChild(a);
// 		article.appendChild(h3);
// 		document.querySelector('.main-content').appendChild(article);
// 	}
// 	if(i === require.length) {
// 		document.body.removeChild(document.querySelector('.load-more'));
// 	}
// }
// document.querySelector('.butt-load-more').addEventListener('click', loadItems);
function filterItems(e) {
	var i, tabItems = document.querySelectorAll('.filter-items > li > span');
	tabItems.forEach(function(item) {
		item.classList = "";
	});
	e.target.classList = "active-tab";
	document.querySelector('.main-content').innerHTML = "";
	for(i = 0; i < require.length; i++) {
		if(require[i]["relation"].some(function(item) {return item === e.target.innerText.toLowerCase()})) {
			var article = document.createElement('ARTICLE');
			article.className = require[i].class;
			var a = document.createElement('A');
			a.setAttribute('href', require[i]["link"]);
			var h3 = document.createElement('H3');
			h3.innerText = require[i].title;
			var img = document.createElement('IMG');
			img.setAttribute('src', require[i].src);
			img.setAttribute('alt', require[i].title);
			var div = document.createElement('DIV');
			div.className = 'fon';
			a.appendChild(img);
			a.appendChild(div); 
			article.appendChild(a);
			article.appendChild(h3);
			document.querySelector('.main-content').appendChild(article);
		}
		if(e.target.innerText === "ALL") {
			var i;
			for(i = 0; i < require.length; i++) {
				var article = document.createElement('ARTICLE');
				article.className = require[i].class;
				var a = document.createElement('A');
				a.setAttribute('href', require[i]["link"]);
				var h3 = document.createElement('H3');
				h3.innerText = require[i].title;
				var img = document.createElement('IMG');
				img.setAttribute('src', require[i].src);
				img.setAttribute('alt', require[i].title);
				var div = document.createElement('DIV');
				div.className = 'fon';
				a.appendChild(img);
				a.appendChild(div); 
				article.appendChild(a);
				article.appendChild(h3);
				document.querySelector('.main-content').appendChild(article);
			}
		}
	}
}
document.querySelector('.filter-items').addEventListener('click', filterItems);
