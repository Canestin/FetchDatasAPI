var postToDisplay = findGetParameter("post");
var divComments = document.getElementById("comts");
const img = document.createElement("img");
const postDiv = document.getElementById("post");
const comments = fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postToDisplay}`)
.then(response => response.json());


// Having 100 posts, randomly, we retrieve the first 100 photos and we match

  fetch(`https://jsonplaceholder.typicode.com/photos?_limit=100`)
.then(response => response.json())
.then(json =>  img.src = json[postToDisplay - 1].url);

// Display the image corresponding to the post

img.classList.add("photo");
postDiv.appendChild(img);


// Display the clicked post in the home page by retrieving the id in the url

  fetch(`https://jsonplaceholder.typicode.com/posts/${postToDisplay}`)
.then(response => response.json())
.then( element => postDiv.innerHTML += 
`<p id="post${element.id}" class="posts">  <span class="div-title">
Post ${element.id} </span> <br> <br> <span class="content-title">
Title :</span> ${element.title}
<br><br>  <span class="content-title"> Contents : </span> ${element.body} </p> <br>`);


//View comments for each post

comments.then(comts => {
  for(let i=0; i< comts.length; i++){
    divComments.innerHTML += `<p class="content-comments"> <span class="bold"> Comment ${i+1} </span> <br><br>  <span class="content-title"> Name </span> : 
    ${comts[i].name} <br><br> <span class="content-title"> Body </span> : ${comts[i].body} <br><br>  
    <span class="content-title"> Email </span> : ${comts[i].email}</p>` 
    }
});


// To retrieve the post id value from the url

function findGetParameter(parameterName) {
  var result = null,
      tmp = [];
  location.search
      .substr(1)
      .split("&")
      .forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
      });
  return result;
}