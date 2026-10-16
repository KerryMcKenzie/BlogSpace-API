


/**
 Challenge:

 With the 5 blog post objects, display the `title` and `body`
properties of the first 5 posts on the browser page.
 
 Hints: 
 * Create a `div` in the HTML file to store these items
 * Loop over the items creating a string of HTML elements you 
   can then put into the div with `innerHTML`
//  */


// fetch("https://apis.scrimba.com/jsonplaceholder/posts")
//     .then(res => res.json())
//     .then(data => {
//         const postsArr = data.slice(0, 5)
//         let html = ""
//         for (let post of postsArr) {
//             html += `
//                 <h3>${post.title}</h3>
//                 <p>${post.body}</p>
//                 <hr/>
//             `
//         }
//         document.getElementById("blog-list").innerHTML = html
//     })

//     // ---------------------------------
//     // Form submit sevent listener below

//     document.getElementById("new-post").addEventListener("submit", function(e) {
//     e.preventDefault()
//     const postTitle = document.getElementById("post-title").value
//     const postBody = document.getElementById("post-body").value
//     const data = {
//         title: postTitle,
//         body: postBody
//     }
//     console.log(data)
// })


// BlogSpace - Rest Form, ** final code from last scrimba https://scrimba.com/fullstack-path-c0fullstack/~0mp
// 
let postsArray = []
const titleInput = document.getElementById("post-title")
const bodyInput = document.getElementById("post-body")
const form = document.getElementById("new-post")
function renderPosts() {
    let html = ""
    for (let post of postsArray) {
        html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr />
        `
    }
    document.getElementById("blog-list").innerHTML = html
}
fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        postsArray = data.slice(0, 5)
        renderPosts()
    })
form.addEventListener("submit", function(e) {
    e.preventDefault()
    const postTitle = titleInput.value
    const postBody = bodyInput.value
    const data = {
        title: postTitle,
        body: postBody
    }
    
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }
    
    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
        .then(res => res.json())
        .then(post => {
            postsArray.unshift(post)
            renderPosts()
            /**
             * Challenge: clear the form out!
             */
            titleInput.value = ""
            bodyInput.value = ""
            // form.reset()
        })
})