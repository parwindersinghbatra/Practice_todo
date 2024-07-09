const todoValue = document.getElementById('todoValue')
const message = document.getElementById('message')

const edit = (element) => {
    const currentText = element.parentElement.firstChild.textContent.trim()
     message.innerHTML += `<input>`
    const newText = prompt("Edit your Item: " + currentText)
    if(newText !== null){
        element.parentElement.firstChild.textContent = newText
    }
//     const value = document.createElement('input')
//     value.type = 'text'
//     value.value = currentText
//     message.appendChild(value)  
//    if(message !== null){
//        if(element.keyCode === 13){
//            element.parentElement.firstChild.textContent = newText
//        }
//    }
}

const deleteItem = (element) => {
    element.parentElement.remove()
}

todoValue.addEventListener("keyup",function(event){
    if(event.keyCode === 13){
        var result = todoValue.value
        message.innerHTML += `<p> ${result} <span onclick="edit(this)"> Edit</span> <span onclick="deleteItem(this)"> Delete</span> </p>`
        todoValue.value = ""
        todoValue.focus()
    }

})