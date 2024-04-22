import { html, render } from "../lib.js"
import { detailsModel, updataModel } from "../data/data.js";
import { createSubmitHandler } from "../utils.js";
import { page } from "../lib.js";

const editTemplate = (item, handler) => html`
 <section id="edit">
    <div class="form form-item">
      <h2>Edit Your Item</h2>
      <form @submit=${handler} class="edit-form">
        <input
         type="text"
         name="item"
         id="item"
         placeholder="Item" 
         .value=${item.item}
         />
        <input
          type="text"
          name="imageUrl"
          id="item-image"
          placeholder="Your item Image URL"
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
          type="text"
          name="availability"
          id="availability"
          placeholder="Availability Information"
          .value=${item.availability}
        />
        <input
          type="text"
          name="type"
          id="type"
          placeholder="Item Type"
          .value=${item.type}
        />
        <textarea
          id="description"
          name="description"
          placeholder="More About The Item"
          rows="10"
          cols="50"
          .value=${item.description}
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
  const { item, imageUrl, price, availability, type, description } = data
  if (!item || !imageUrl || !price || !availability || !type || !description) {
    return alert('Empty fields')
  }

  await updataModel(id, data)
  page.redirect(`/details/${id}`);
}


//.value=${item.year}



{/* <section id="edit">
<div class="form">
  <h2>Edit Fruit</h2>
  <form @submit=${handler} class="edit-form">
    <input
      type="text"
      name="name"
      id="name"
      placeholder="Fruit Name"
      .value=${item.name}
    />
    <input
      type="text"
      name="imageUrl"
      id="Fruit-image"
      placeholder="Fruit Image URL"
      .value=${item.imageUrl}
    />
    <textarea
      id="fruit-description"
      name="description"
      placeholder="Description"
      rows="10"
      cols="50"
      .value=${item.description}
    ></textarea>
    <textarea
      id="fruit-nutrition"
      name="nutrition"
      placeholder="Nutrition"
      rows="10"
      cols="50"
      .value=${item.nutrition}
    ></textarea>
    <button type="submit">post</button>
  </form>
</div>
</section> */}