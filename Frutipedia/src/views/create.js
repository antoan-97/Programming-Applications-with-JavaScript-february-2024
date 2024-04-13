import { createModel } from '../data/data.js'
import { html, render } from '../lib.js'
import { createSubmitHandler } from '../utils.js'
import { page } from '../lib.js'


const creaeteTemplate = (handler) => html`
<section id="create">
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
    </section>
`

export function showCreate() {
    const handler = createSubmitHandler(onCreate)
    render(creaeteTemplate(handler))
}

async function onCreate(data, form) {
 
    const {name, imageUrl, description, nutrition} = data
  if(!name || !imageUrl || !description || !nutrition){
    return alert('Empty fields')
  }
    await createModel(data)
    page.redirect('/dashboard')
}


