var postToDisplay = findGetParameter("post");

if(document.getElementById("post")){
  fetch(`https://jsonplaceholder.typicode.com/posts/${postToDisplay}`)
.then(response => response.json())
.then( element => document.getElementById("post").innerHTML = 
`<p id="post${element.id}" class="posts">  <span class="div-title">
Post ${element.id} </span> <br> <br> <span class="content-title">
Title :</span> ${element.title}
<br><br>  <span class="content-title"> Contents : </span> ${element.body} </p> <br>`);

} 

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