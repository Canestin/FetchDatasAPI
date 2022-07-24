const articles = document.getElementById("articles");
const button = document.querySelectorAll(".pagination button");
const butonsPagination = document.querySelectorAll(".pagination button");

//I store all the posts that I have retrieved 
//to make only one request to my API.

const allPosts =  fetch(`https://jsonplaceholder.typicode.com/posts/`)
              .then(response => response.json());


// Show pagination based on button clicked

for(let x=0; x<button.length; x++){
  button[x].addEventListener("click", () => {
    articles.innerHTML = "";
    allPosts.then(posts => {
      for(let i=1+10*x; i<1 + 10* (x + 1); i++){
        articles.innerHTML +=
        `<div id="post${i + 1}" class="post div-content"> <span class="content-title">
        Title of post ${i + 1} : </span> <a  href="html/posts.html?post=${i + 1}">
        ${posts[i].title} </a>` + "<br><br></div>";
      }
    });
  });
}

// To initialize the content of my homepage

allPosts.then(posts => {
  for(let i=0; i<10; i++){
    articles.innerHTML +=
    `<div id="post${i + 1}" class="post div-content"> <span class="content-title">
    Title of post ${i + 1} : </span> <a  href="html/posts.html?post=${i + 1}">
      ${posts[i].title} </a>` + "<br><br></div>";
    }
});

 // To color the button corresponding to the active pagination

for(let i=0; i<butonsPagination.length; i++){
  butonsPagination[i].addEventListener("click", () => {
    for(let x=0; x<butonsPagination.length; x++){
      butonsPagination[x].classList.remove("active");
    }
    butonsPagination[i].classList.add("active");
  });
}