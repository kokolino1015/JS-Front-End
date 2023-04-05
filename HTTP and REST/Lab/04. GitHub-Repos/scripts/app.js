function loadRepos() {
   const resultContainer = document.getElementById('res')
   const BASE_URL = 'https://api.github.com/users/testnakov/repos'
   fetch(BASE_URL)
       .then((response) => response.text())
       .then((data) => resultContainer.textContent = data)
}