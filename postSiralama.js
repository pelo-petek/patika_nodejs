const posts = [
    {name:"pelda", surname:"petekkaya"},
    {name:"şevra", surname:"petekkaya"},
    {name:"meral", surname:"petekkaya"}
];


//another declaration
const listPosts = () =>{
    posts.map((post) => {
        console.log(post.name);
    });
}
const addPost = (name) => {
    const promise1 = new Promise((resolve, reject) => {
        posts.push(name);
    });
    return promise1;
};

addPost({name:"meral", surname:"petekkaya"})
.then(()=>{
    console.log("the post has been added");
})
.catch((err)=>{
    console.log(err);
})
listPosts();

