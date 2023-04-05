function loadCommits() {
    const BASE_PATH = "https://api.github.com/repos";
    const username = document.getElementById('username');
    const repo = document.getElementById('repo');
    const ul = document.getElementById('commits');

    let usernameValue = username.value;
    let repoValue = repo.value;

    fetch(`${BASE_PATH}/${usernameValue}/${repoValue}/commits`)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error(`Error: ${response.status} (Not Found)`)
        })
        .then((data) => {
            data.forEach((el) => {
                    let li = document.createElement('li');
                    console.log(el)
                    li.textContent = `${el.commit.author.name}: ${el.commit.message}`
                    ul.appendChild(li);
                    document.getElementById('username').value = '';
                }
            )
        })

}