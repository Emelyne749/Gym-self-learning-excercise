// Create a function called fetchUserTodos that uses the Promise.all() method to fetch users and todos concurrently from the provided API endpoints and combine them based on the userId. The function should return a promise that resolves with the combined data.
// Users endpoints https://jsonplaceholder.typicode.com/users
// Todos endpoints https://jsonplaceholder.typicode.com/todos
// The returned promise should resolve into an array of users, where each user object has a new key, todos. This key should contain an array of todos that belong to the user, determined by matching the userId of the todo with the id of the user.
// // User object may look like
// {
//     id: 10,
//   name: 'Clementina DuBuque',
//   ...
// }

// // Todo object may look like
// {
//     userId: 5,
//   completed: false,
//     ...
// }
// // The result array will have objects that look like

// {
//     id: 10,
//   name: 'Clementina DuBuque',
//   todos: [
//         {
//             userId: 10,
//           completed: false,
//             ...
//         },
//         {
//             userId: 10,
//           completed: false,
//             ...
//         }
//     ]
//     ...
// }



let links = ["https://jsonplaceholder.typicode.com/users", "https://jsonplaceholder.typicode.com/todos"]

async function fetchUserTodos(results){
    results = results.map(url=> fetch(url))
    let result = await Promise.all(results).catch(err=>console.log(err))
    result = await Promise.all(result.map(data => data.json()))

    let [users, todos] = result
    for (let user of users){
        let dos = []
        for (let todo of todos){ 
            if(todo.userId == user.id){
                dos.push(todo) 
            }
        }
        user.todos= dos
        console.log(user)
    }
    return users

}

fetchUserTodos(links).then(res => console.log(res))

