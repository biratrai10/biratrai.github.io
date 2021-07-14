//fetch github users

fetch('https://api.github.com/users/biratrai10')
	.then((response) => response.json())
	.then(function (data) {
		//fetch github user
		// console.log(data);
		document.getElementById('full-name').textContent = data['name'];
		document.getElementById('profile-image').src = data['avatar_url'];
		document.getElementById('github-link').href = data['html_url'];
		document.getElementById('bio').textContent = data['bio'];
		//followers
		let followersCount = data['followers'];
		let followersInfo = `I have been followed by ${followersCount} on my github account`;
		document.getElementById('followers-info').textContent = followersInfo;
		document.getElementById('main-container').style.visibility = 'visible';
		document.getElementById('loading').hidden = true;

		
	});
//fetch github repo
