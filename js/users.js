// Show all users

  fetch(`https://jsonplaceholder.typicode.com/users/`)
  .then(response => response.json())
  .then(json => json.forEach(user => {
document.getElementById("users").innerHTML +=
`<div class="div-content"> <span class="content-title"> User
${user.id}: </span> <br> <span class="bold">Name </span>:
${user.name} <br> <span class="bold">Username</span>:
${user.username} <br> <span class="bold">Mail </span>:
${user.email} <br><br> </div>` }))