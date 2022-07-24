
for(let i=1; i<11; i++){
    fetch(`https://jsonplaceholder.typicode.com/posts/${i}`)
  .then(response => response.json())
  .then(json => document.getElementById("comments").innerHTML += `<a href="posts.html"> ${json.title} </a>`  + "<br> <br>")
}


    fetch(`https://jsonplaceholder.typicode.com/users/`)
.then(response => response.json())
.then(json => json.forEach(element => { 
    document.getElementById("users").innerHTML += element.name + "<br>" + 
    element.username + "<br>" + element.email + "<br> <br>"})) 
    
    
document.getElementById("post").innerHTML = element.name       