const articles = document.getElementById("articles");
const button = document.querySelectorAll(".pagination button");

const allPosts =  fetch(`https://jsonplaceholder.typicode.com/posts/`)
              .then(response => response.json());

if(document.getElementById("data")){

  allPosts.then(posts => {}); // do something with the posts


  // Good !!!
    // for(let i=0; i<100; i++){
    //   articles.innerHTML +=
    //   `<div id="post${i + 1}" class="post div-content"> <span class="content-title">
    //   Title of post ${i + 1} : </span> <a  href="posts.html?post=${i + 1}">
    //   ${posts[i].title} </a>` + "<br><br></div>";
    // };

  for(let x=0; x<button.length; x++){
    button[x].addEventListener("click", () => {
      articles.innerHTML = "";
      for(let i=1; i<11; i++){
        allPosts.then(post => articles.innerHTML +=
        `<div id="post${i + 10*x}" class="post div-content"> <span class="content-title">
        Title of post ${i + 10*x} : </span> <a  href="posts.html?post=${i + 10*x}">
        ${post.title} </a>` + "<br><br></div>");
      }
    });
  }
 
 // Vrai vrai !

 allPosts.then(posts => {
    for(let i=0; i<10; i++){
      articles.innerHTML +=
      `<div id="post${i + 1}" class="post div-content"> <span class="content-title">
      Title of post ${i + 1} : </span> <a  href="posts.html?post=${i + 1}">
        ${posts[i].title} </a>` + "<br><br></div>";
      }
});


  fetch(`https://jsonplaceholder.typicode.com/users/`)
    .then(response => response.json())
    .then(json => json.forEach(user => {
  document.getElementById("users").innerHTML +=
  `<div class="div-content"> <span class="content-title"> User
  ${user.id}: </span> <br> <span class="bold">Name </span>:
  ${user.name} <br> <span class="bold">Username</span>:
  ${user.username} <br> <span class="bold">Mail </span>:
  ${user.email} <br><br> </div>` }))

}










































// const articles = document.getElementById("articles");
// const button = document.querySelectorAll(".pagination button");

// if(document.getElementById("data")){


//   for(let x=0; x<button.length; x++){
//     button[x].addEventListener("click", () => {
//       articles.innerHTML = "";
//       for(let i=1; i<11; i++){
//         fetch(`https://jsonplaceholder.typicode.com/posts/${i + 10*x}`)
//           .then(response => response.json())
//           .then(post => articles.innerHTML +=
//         `<div id="post${i + 10*x}" class="post div-content"> <span class="content-title">
//         Title of post ${i + 10*x} : </span> <a  href="posts.html?post=${i + 10*x}">
//         ${post.title} </a>` + "<br><br></div>");
//       }
//     });
//   }
 
//  // Vrai vrai !
// for(let i=1; i<11; i++){
//   fetch(`https://jsonplaceholder.typicode.com/posts/${i}`)
//     .then(response => response.json())
//     .then(post => articles.innerHTML +=
//   `<div id="post${i}" class="post div-content"> <span class="content-title">
//   Title of post ${i}: </span> <a href="posts.html?post=${i}">
//   ${post.title} </a>` + "<br><br></div>");

// }


//   fetch(`https://jsonplaceholder.typicode.com/users/`)
//     .then(response => response.json())
//     .then(json => json.forEach(user => {
//   document.getElementById("users").innerHTML +=
//   `<div class="div-content"> <span class="content-title"> User
//   ${user.id}: </span> <br> <span class="bold">Name </span>:
//   ${user.name} <br> <span class="bold">Username</span>:
//   ${user.username} <br> <span class="bold">Mail </span>:
//   ${user.email} <br><br> </div>` }))

// }