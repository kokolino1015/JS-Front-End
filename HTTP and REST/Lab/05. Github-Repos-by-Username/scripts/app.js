function loadRepos() {
	const BASE_URL = 'https://api.github.com/users/';
	let username = document.getElementById('username').value;
	const ul = document.querySelector('#repos');
	console.log(`${BASE_URL}${username}`);
	fetch(`${BASE_URL}${username}/repos`)
		.then(function (response) {
			if (response.ok) {
				return response.json();
			}
			throw new Error(`${response.status} (Not Found)`)
		})
		.then((data) => {
			ul.innerHTML = '';
			data
				.forEach((el) => {
					let li = document.createElement('li');
					let aHref = document.createElement('a');
					aHref.href = el.html_url;
					aHref.textContent = el.full_name;
					li.appendChild(aHref);
					repos.appendChild(li);
					document.getElementById('username').value = '';
				});
		})
		.catch((error) => {
			ul.innerHTML = ''
			const li = document.createElement('li')
			li.textContent = error
			ul.appendChild(li)
		});
}