const articles = document.getElementById("articles");
const button = document.querySelectorAll(".pagination button");

//I store all the posts that I have retrieved 
//to make only one request to my API.

const allPosts =  fetch(`https://jsonplaceholder.typicode.com/posts/`)
              .then(response => response.json());

if(document.getElementById("data")){

  for(let x=0; x<button.length; x++){
    button[x].addEventListener("click", () => {
      articles.innerHTML = "";
      allPosts.then(posts => {
        for(let i=1+10*x; i<1 + 10* (x + 1); i++){
          articles.innerHTML +=
          `<div id="post${i + 1}" class="post div-content"> <span class="content-title">
          Title of post ${i + 1} : </span> <a  href="posts.html?post=${i + 1}">
          ${posts[i].title} </a>` + "<br><br></div>";
        }
      });
    });
  }

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