import { html, render } from "../lib.js"
import { detailsModel, updataModel } from "../data/data.js";
import { createSubmitHandler } from "../utils.js";
import { page } from "../lib.js";


const editTemplate = (item, handler) => html`
   <section id="edit">
    <div class="form">
      <img class="border" src="./images/border.png" alt="">
      <h2>Edit Character</h2>
      <form  @submit=${handler} class="edit-form">
        <input
        type="text"
        name="category"
        id="category"
        placeholder="Character Type"
        .value=${item.category}
      />
      <input
        type="text"
        name="image-url"
        id="image-url"
        placeholder="Image URL"
        .value=${item.imageUrl}
      />
      <textarea
      id="description"
      name="description"
      placeholder="Description"
      rows="2"
      cols="10"
    >${item.description}</textarea>
    <textarea
      id="additional-info"
      name="additional-info"
      placeholder="Additional Info"
      rows="2"
      cols="10"
    >${item.moreInfo}</textarea>
        <button type="submit">Edit</button>
      </form>
      <img class="border" src="./images/border.png" alt="">
    </div>
  </section>
`

export async function showEditView(ctx) {
  const id = ctx.params.id;
  const handler = createSubmitHandler((data, form) => onsubmit(id, data, form));

  const data = await detailsModel(id);
  render(editTemplate(data, handler))
}

async function onsubmit(id,{ category, ['image-url']: imageUrl, description, ['additional-info']: moreInfo }, form) {

  if ([category, imageUrl, description, moreInfo].some(f => f == '')) {
    return alert('All fields are required!');
  }

  await updataModel(id, category, imageUrl, description, moreInfo );
  page.redirect(`/details/${id}`);
}



