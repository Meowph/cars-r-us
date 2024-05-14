import {setInteriorChoice} from "./TransientState.js"

export const interiorMaterial = async () => {
  const fetchResponse = await fetch("http://localhost:8088/Interior")
  const order = fetchResponse.json()

  let ordersHTML = " "
  
  order.map(
      (order) => {
        return `
        <input type='radio' name='order' value='${order.id}'/> ${order.id}
        </div>`
      }
  )

  return ordersHTML
}