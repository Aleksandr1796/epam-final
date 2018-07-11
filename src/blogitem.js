var xml = new XMLHttpRequest();
xml.open('GET', '../comments.json', false);
xml.send();
var require = JSON.parse(xml.response);
require.sort(function (a, b) {
	if (a.datetime > b.datetime) {
	  return -1;
	}
	if (a.datetime < b.datetime) {
	  return 1;
	}
	return 0;
});
require.forEach(function(item) {
	var rand = Math.random();
	if(rand >= 0.5) {
		var article = document.createElement('ARTICLE');
		var authorComment = document.createElement('P');
		authorComment.classList = "author-comment";
		authorComment.innerText = item.name;
		if(item.like === true) {
			var like = document.createElement('I');
			like.classList = "fas fa-heart";
			authorComment.appendChild(like);
		}
		var datetime = document.createElement('P');
		datetime.classList = "comment-datetime";
		datetime.innerText = item.normdate;
		var commentText = document.createElement('P');
		commentText.classList = "comment-tex";
		commentText.innerText = item.text;
		article.appendChild(authorComment);
		article.appendChild(datetime);
		article.appendChild(commentText);
		document.querySelector('.comments-list').appendChild(article);
	}
});
function addComment(e) {
	e.preventDefault();
	var authorName = document.querySelector('.form-name').value;
	var message =  document.querySelector('.form-message').value;
	if(authorName && message) {
		var article = document.createElement('ARTICLE');
		var authorComment = document.createElement('P');
		authorComment.classList = "author-comment";
		authorComment.innerText = authorName;
		if(document.querySelector('input[type="checkbox"]:checked')) {
			var like = document.createElement('I');
			like.classList = "fas fa-heart";
			authorComment.appendChild(like);
		}
		var datetime = document.createElement('P');
		datetime.classList = "comment-datetime";
		var nowDate = new Date();
		datetime.innerText = nowDate.toDateString()
		var commentText = document.createElement('P');
		commentText.classList = "comment-tex";
		commentText.innerText = message;
		article.appendChild(authorComment);
		article.appendChild(datetime);
		article.appendChild(commentText);
		document.querySelector('.comments-list').insertBefore(article, document.querySelector('.comments-list').children[1]);
		document.forms[0].reset();
	}
	else alert('All areas must be required');
}
document.querySelector('.add-comment-button').addEventListener('click', addComment);