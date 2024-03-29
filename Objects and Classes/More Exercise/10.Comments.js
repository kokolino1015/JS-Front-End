function solve(list) {

    function joinNames(name) {
        return name.join(' ')
    }


    const output = {
        users: [],
        articles: [],
        comments: {}
    }

    list.forEach(item => {
        let [command, ...data] = item.split(' ')
        data = joinNames(data)
        if (command === 'article' && !output.articles.includes(data)) {
            output.articles.push(data)

        } else if (command === 'user' && !output.users.includes(data)) {
            output.users.push(data)

        } else {
            let [userData, articleData] = item.split(': ')
            let [userName, ...articleName] = userData.split(' posts on ')
            let [articleTitle, ...articleComment] = articleData.split(', ')

            articleName = joinNames(articleName)
            articleComment = joinNames(articleComment)

            if (output.users.includes(userName) && output.articles.includes(articleName)) {
                if (!output.comments.hasOwnProperty(articleName)) {
                    output.comments[articleName] = {}
                    output.comments[articleName].userWithComments = []
                }
                output.comments[articleName].userWithComments.push({
                    userName: userName,
                    title: articleTitle,
                    comment: articleComment
                })
            }
        }
    })

    const sortedArticles = output.articles.sort((a, b) => {
        const aComments = output.comments[a].userWithComments.length;
        const bComments = output.comments[b].userWithComments.length;
        return bComments - aComments;
    })

    sortedArticles.forEach(article => {
        const comments = output.comments[article].userWithComments;
        if (comments.length) {
            console.log(`Comments on ${article}`)
            comments.sort((a, b) => a.userName.localeCompare(b.userName)).forEach(comment => {
                console.log(`--- From user ${comment.userName}: ${comment.title} - ${comment.comment}`)
            })
        }
    })
}