document.addEventListener("DOMContentLoaded", () => {
  //Get the form element
  const form = document.querySelector('#create-task-form')
  //Get the task list element
  const taskList = document.querySelector('#tasks')
  //Add event listener to the form
  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const taskDescription = document.querySelector('#new-task-description').value

    const newTask = document.createElement('li')
    newTask.innerText = taskDescription

    const deleteButton = document.createElement('button')
    deleteButton.innerText = `X`
    deleteButton.addEventListener('click', removeTask)

    newTask.appendChild(deleteButton)
    taskList.appendChild(newTask)
    form.reset()
  })

  function removeTask(e) {
    e.target.parentElement.remove()
  }
});


