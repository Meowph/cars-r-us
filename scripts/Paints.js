import {setPaintChoice } from "./TransientState.js"

export const Paints = async () => {
  const fetchResponse = await fetch("http://localhost:8088/paint")
  const paint = await fetchResponse.json()

  let paintsHTML = await paint.map(
      (paint) => {
        return `
        <div>
        <select id="paintColorOption">
      <option type="radio" value='${paint.id}>Select a paint color</option>
      </select>
      </div>
        `
      }
  )

  return paintsHTML
}

//<input name='color' value='${paint.id}'/> ${paint.color}