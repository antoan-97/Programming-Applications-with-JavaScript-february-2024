import { createModel } from '../data/data.js'
import { html, render } from '../lib.js'
import { createSubmitHandler } from '../utils.js'
import { page } from '../lib.js'


const creaeteTemplate = (handler) => html`
  <section id="create">
    <div class="form form-item">
      <h2>Share Your item</h2>
      <form @submit=${handler} class="create-form">
        <input type="text" name="item" id="item" placeholder="Item" />
        <input
          type="text"
          name="imageUrl"
          id="item-image"
          placeholder="Your item Image URL"
        />
        <input
          type="text"
          name="price"
          id="price"
          placeholder="Price in Euro"
        />
        <input
          type="text"
          name="availability"
          id="availability"
          placeholder="Availability Information"
        />
        <input
          type="text"
          name="type"
          id="type"
          placeholder="Item Type"
        />
        <textarea
          id="description"
          name="description"
          placeholder="More About The Item"
          rows="10"
          cols="50"
        ></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  </section>
`

export function showCreate() {
    const handler = createSubmitHandler(onCreate)
    render(creaeteTemplate(handler))
}

async function onCreate(data, form) {
 
    const {item, imageUrl, price, availability, type, description} = data
    if (!item || !imageUrl || !price || !availability || !type || !description) {
      return alert('Empty fields')
    }
    await createModel(data)
    page.redirect('/dashboard')
}


{/* <section id="create">
      <div class="form">
        <h2>Add Fruit</h2>
        <form @submit=${handler} class="create-form">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Fruit Name"
          />
          <input
            type="text"
            name="imageUrl"
            id="Fruit-image"
            placeholder="Fruit Image"
          />
          <textarea
          id="fruit-description"
          name="description"
          placeholder="Description"
          rows="10"
          cols="50"
        ></textarea>
        <textarea
          id="fruit-nutrition"
          name="nutrition"
          placeholder="Nutrition"
          rows="10"
          cols="50"
        ></textarea>
          <button type="submit">Add Fruit</button>
        </form>
      </div>
    </section> */}