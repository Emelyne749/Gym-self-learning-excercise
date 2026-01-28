// Write a function usersAddresses that fetches users from this endpoint https://jsonplaceholder.typicode.com/users and returns just the addresses of the first 3 users.
// // The output should look like this
// [
//   {
//     address: {
//       street: 'Kulas Light',
//       suite: 'Apt. 556',
//       city: 'Gwenborough',
//       zipcode: '92998-3874',
//       geo: [Object]
//     }
//   },
//   {
//     address: {
//       street: 'Victor Plains',


async function addresses(url){
    let useradd = []
    let respo = await fetch(url)
    let users = await respo.json()

    count = 0
    for(let user of users){
        count++
        if(count <= 3){
            useradd.push({ address: user.address })
        }
    }

    return useradd
}

addresses("https://jsonplaceholder.typicode.com/users").then(res => console.log(res))

