const todo = {
    id: 'whatisthislist',
    text: 'Pay my bills',
    completed: false
}


const printTodo = ({ text, completed  }) => {
console.log(`${completed} ${text}`)
}

printTodo(todo) 


const { text:todoText, completed, details = 'No details', ...others } = todo
console.log(todoText)
console.log(completed)
console.log(details)
console.log(others)


const age = [65, 0, 13]
const [firstAge, ...otherAges] = age
console.log(firstAge)
// console.log(secondAge)
// console.log(lastAge)
console.log(otherAges)