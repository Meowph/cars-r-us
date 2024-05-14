import { Paints } from "./Paints.js"

export const render = async () => { 

  const paintsHTML = await Paints()

  const composedHTML = `
      <h1>Cars R Us</h1>

      <article class="choices">
          <section class="choices__paint options">
              <h2>Paint</h2>
                ${paintsHTML}
          </section>

          <section class="choices__interior options">
              <h2>Interior</h2>
              
          </section>

          <section class="choices__technology options">
              <h2>Technology</h2>
              
          </section>
      </article>

      <section class="choices__wheels options">
              <h2>Wheels</h2>
             
          </section>
      </article>

      <article class="order">
              

      </article>

      <article class="customOrders">
          <h2>Custom Car Orders</h2>
              
      </article>
  `

  container.innerHTML = composedHTML

  
}

render ()