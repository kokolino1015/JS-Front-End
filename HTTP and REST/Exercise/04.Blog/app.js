function attachEvents() {
    const POST_URL = 'http://localhost:3030/jsonstore/blog/posts';
    const COMMENT_URL = 'http://localhost:3030/jsonstore/blog/comments';
    const select = document.querySelector('#posts');
    const menu = document.getElementById('posts');
    const buttonLoadPosts = document.getElementById('btnLoadPosts');
    const buttonView = document.getElementById('btnViewPost');
    const postComment = document.getElementById('post-comments');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    buttonLoadPosts.addEventListener('click', LoadPosts);
    buttonView.addEventListener('click', LoadView);
    let postInfo = {};

    function LoadPosts() {
        fetch(POST_URL)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                postInfo = data;
                for (const datum in data) {
                    const option = document.createElement('option');
                    option.value = data[datum].id;
                    option.text = data[datum].title;
                    menu.appendChild(option);
                }
            })
    }

    function LoadView() {
        fetch(COMMENT_URL)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                const post = findPost(select.value);
                postTitle.textContent = post.title;
                postBody.textContent = post.body;
                for (const comment in data) {
                    if (post.id === data[comment].postId) {
                        const li = document.createElement('li');
                        li.textContent = data[comment].text;
                        postComment.appendChild(li);
                    }
                }
            })
    }

    function findPost(postId) {
        for (const key in postInfo) {
            if (postId === postInfo[key]['id']) {
                return postInfo[key]
            }
        }
    }
}

attachEvents();