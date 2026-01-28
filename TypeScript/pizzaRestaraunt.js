// MY CODES
const menu = [
  { name: "Margherita", price: 8},
  { name: "Pepperoni", price: 10},
  { name: "Hawaiian", price: 10},
  { name: "Veggie", price: 9},
]


let cashInRegister = 100
let orderQue = []
let nextOrderId = 0


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
    orderObj = {pizza:pizza , status : 'ordered', id:nextOrderId}
    orderQue.push(orderObj)
    nextOrderId++
    return orderObj
}


function completeOrder(orderID){
    let completedOrder = orderQue.filter(order => order.id = orderID)
    completedOrder.status = "completed"

    return completedOrder
}


