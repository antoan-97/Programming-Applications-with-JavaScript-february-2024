import { html, render } from "../lib.js"
import { detailsModel, updataModel } from "../data/data.js";
import { createSubmitHandler } from "../utils.js";
import { page } from "../lib.js";

const editTemplate = (item, handler) => html`
<section id="edit">
    <div class="form form-auto">
      <h2>Edit Your Car</h2>
      <form @submit=${handler} class="edit-form">
        <input 
        type="text"
        name="model"
        id="model"
        placeholder="Model"
        .value=${item.model} />
        <input
          type="text"
          name="imageUrl"
          id="car-image"
          placeholder="Your Car Image URL"
          .value=${item.imageUrl}
        />
        <input
          type="text"
          name="price"
          id="price"
          placeholder="Price in Euro"
          .value=${item.price}
        />
        <input
          type="number"
          name="weight"
          id="weight"
          placeholder="Weight in Kg"
          .value=${item.weight}
        />
        <input
          type="text"
          name="speed"
          id="speed"
          placeholder="Top Speed in Kmh"
          .value=${item.speed}
        />
        <textarea
          id="about"
          name="about"
          placeholder="More About The Car"
          rows="10"
          cols="50"
          .value=${item.about}
        ></textarea>
        <button type="submit">Edit</button>
      </form>
    </div>
  </section>
`

export async function showEditView(ctx) {
  const id = ctx.params.id;
  const handler = createSubmitHandler((data, form) => onsubmit(id, data, form));

  const data = await detailsModel(id);
  render(editTemplate(data, handler))
}

async function onsubmit(id, data, form) {
  const { model, imageUrl, price, weight, speed, about } = data
  if (!model || !imageUrl || !price || !weight || !speed || !about) {
    return alert('Empty fields')
  }

  await updataModel(id, data)
  page.redirect(`/details/${id}`);
}
