import { createModel } from '../data/data.js'
import { html, render } from '../lib.js'
import { createSubmitHandler } from '../utils.js'
import { page } from '../lib.js'


const creaeteTemplate = (handler) => html`
<section id="create">
    <div class="form">
      <img class="border" src="./images/border.png" alt="">
      <h2>Add Character</h2>
      <form @submit=${handler} class="create-form">
        <input
          type="text"
          name="category"
          id="category"
          placeholder="Character Type"
        />
        <input
          type="text"
          name="image-url"
          id="image-url"
          placeholder="Image URL"
        />
        <textarea
        id="description"
        name="description"
        placeholder="Description"
        rows="2"
        cols="10"
      ></textarea>
      <textarea
        id="additional-info"
        name="additional-info"
        placeholder="Additional Info"
        rows="2"
        cols="10"
      ></textarea>
        <button type="submit">Add Character</button>
      </form>
      <img class="border" src="./images/border.png" alt="">
    </div>
  </section>
`

export function showCreate() {
    const handler = createSubmitHandler(onCreate)
    render(creaeteTemplate(handler))
}

async function onCreate({ category, ['image-url']: imageUrl, description, ['additional-info']: moreInfo }, form) {
  if (!category || !imageUrl || !moreInfo || !description) {
    return alert('Empty fields');
  }

  const requestData = {
    category,
    imageUrl,
    description,
    moreInfo
  };

  await createModel(requestData);
  page.redirect('/dashboard');
}

