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

function addPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
};

addPost({ title: 'Post Six', body: 'Body of post Six'}, getPosts);