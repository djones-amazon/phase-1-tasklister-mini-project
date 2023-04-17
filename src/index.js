document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  

  form.addEventListener("submit",  function (e) {
    //debugger;
    const ul = document.getElementById("tasks");
    //debugger;
    const newDescription = document.getElementById("new-task-description").value;
    //debugger;
    const li = document.createElement("li");
    //debugger;
    li.appendChild(document.createTextNode(`${newDescription}`));
   //debugger;
    ul.appendChild(li);
    //debugger;
    //console.log(form.description.value);
    e.preventDefault();
    //debugger;
  })

});
