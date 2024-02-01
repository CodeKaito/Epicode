const postsBox = document.getElementById('postsBox');

const posts = [
    {
        title: 'Post One',
        body: 'Body of post One',
    },
    {
        title: 'Post Two',
        body: 'Body of post Two',
    },
    {
        title: 'Post Three',
        body: 'Body of post Three',
    },
    {
        title: 'Post Four',
        body: 'Body of post Four',
    },
    {
        title: 'Post Five',
        body: 'Body of post Five',
    },
];

function getPosts() {
    setTimeout(() => {
        for (const post of posts) {
            let myLi = document.createElement('li');
            myLi.innerText = `${post.title} - ${post.body}`;
            postsBox.appendChild(myLi);
        }
    }, 3000);
}

function addPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = null;

            if(!error) {
                resolve(posts);
            } else {
                reject("Houston, we have a problem");
            }
        }, 2000);
    })
};

addPost({ title: 'Post Six', body: 'Body of post Six'})
    .then((posts) => console.log(posts))
    .catch((error) => console.log(error));

console.log("sono a riga x");
console.log("sono a riga y");