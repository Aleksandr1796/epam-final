var xml = new XMLHttpRequest();
xml.open('GET', '../blog-items.json', false);
xml.send();
var require = JSON.parse(xml.response);
var countItems = document.querySelector('.blog-content').childElementCount;
var plusItems = countItems + 3;
var container = document.querySelector('.blog-content');
require.forEach(function(item, i) {
	if(i < 3) {
		var blogItem = document.createElement('SECTION');
		blogItem.classList = 'blog-item';
		var blogItemLink = document.createElement('ARTICLE');
		blogItemLink.classList = 'blog-item-img';
		var imgLink = document.createElement('A');
		imgLink.setAttribute('href', item.link);
		var figure = document.createElement('FIGURE');
		var img = document.createElement('IMG');
		img.setAttribute('src', item.src);
		figure.appendChild(img);
		imgLink.appendChild(figure);
		blogItemLink.appendChild(imgLink);
		var blogItemDescription = document.createElement('ARTICLE');
		blogItemDescription.classList = 'blog-item-description';
		var title = document.createElement('H2');
		title.innerText = item.title;
		var postDate = document.createElement('P');
		var postTime = document.createElement('TIME');
		postTime.setAttribute('datetime', item.datetime);
		postTime.innerText = item.normdate;
		postDate.appendChild(postTime);
		var postText = document.createElement('P');
		postText.innerText = item.text;
		var readMore = document.createElement('A');
		var fav = document.createElement('I');
		fav.classList = 'fas fa-angle-right';
		readMore.setAttribute('href', item.link);
		readMore.innerHTML = 'read more <i class="fas fa-angle-right"></i>';
		blogItemDescription.appendChild(title);
		blogItemDescription.appendChild(postDate);
		blogItemDescription.appendChild(postText);
		blogItemDescription.appendChild(readMore);
		blogItem.appendChild(blogItemLink);
		blogItem.appendChild(blogItemDescription);
		container.appendChild(blogItem);
	}
});
function loadItems(e) {
	e.preventDefault();
	var i = document.querySelector('.blog-content').childElementCount;
	var plusCount = i + 3;
	for(i; i < plusCount && i < require.length; i++) {
		var blogItem = document.createElement('SECTION');
		blogItem.classList = 'blog-item';
		var blogItemLink = document.createElement('ARTICLE');
		blogItemLink.classList = 'blog-item-img';
		var imgLink = document.createElement('A');
		imgLink.setAttribute('href', require[i].link);
		var figure = document.createElement('FIGURE');
		var img = document.createElement('IMG');
		img.setAttribute('src', require[i].src);
		figure.appendChild(img);
		imgLink.appendChild(figure);
		blogItemLink.appendChild(imgLink);
		var blogItemDescription = document.createElement('ARTICLE');
		blogItemDescription.classList = 'blog-item-description';
		var title = document.createElement('H2');
		title.innerText = require[i].title;
		var postDate = document.createElement('P');
		var postTime = document.createElement('TIME');
		postTime.setAttribute('datetime', require[i].datetime);
		postTime.innerText = require[i].normdate;
		postDate.appendChild(postTime);
		var postText = document.createElement('P');
		postText.innerText = require[i].text;
		var readMore = document.createElement('A');
		var fav = document.createElement('I');
		fav.classList = 'fas fa-angle-right';
		readMore.setAttribute('href', require[i].link);
		readMore.innerHTML = 'read more <i class="fas fa-angle-right"></i>';
		blogItemDescription.appendChild(title);
		blogItemDescription.appendChild(postDate);
		blogItemDescription.appendChild(postText);
		blogItemDescription.appendChild(readMore);
		blogItem.appendChild(blogItemLink);
		blogItem.appendChild(blogItemDescription);
		container.appendChild(blogItem);
	}
	if(i === require.length) {
		document.body.removeChild(document.querySelector('.load-more'));
	}
}
document.querySelector('.load-more > a').addEventListener('click', loadItems);