var postToDisplay = findGetParameter("post");
var divComments = document.getElementById("comts");

const comments = fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postToDisplay}`)
.then(response => response.json());

if(document.getElementById("post")){
  fetch(`https://jsonplaceholder.typicode.com/posts/${postToDisplay}`)
.then(response => response.json())
.then( element => document.getElementById("post").innerHTML = 
`<p id="post${element.id}" class="posts">  <span class="div-title">
Post ${element.id} </span> <br> <br> <span class="content-title">
Title :</span> ${element.title}
<br><br>  <span class="content-title"> Contents : </span> ${element.body} </p> <br>`);

} 

// Display the comments

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