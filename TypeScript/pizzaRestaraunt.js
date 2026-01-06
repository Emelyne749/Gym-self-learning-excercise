const menu = [
  { name: "Margherita", price: 8},
  { name: "Pepperoni", price: 10},
  { name: "Hawaiian", price: 10},
  { name: "Veggie", price: 9},
]


let cashInRegister = 100
const orderQue = []

function AddNewPizza(pizza){
    menu.push(pizza)
}


function placeOrder(pname){
    let pizza
    menu.forEach(pizzaObj => {
        for(value of Object.values(pizzaObj)){
            if(value == pname){
                pizza = pizzaObj
                break
            }
        }
    })

    cashInRegister = cashInRegister + pizza.price
    orderObj = {pizza:pizza , status : 'ordered'}
    orderQue.push(orderObj)
    return orderObj
}

console.log(placeOrder("Pepperoni"))