import { deleteModel, detailsModel } from "../data/data.js";
import { html, render } from "../lib.js"
import { isOwner, isLoggedIn } from "../utils.js";
import { page } from "../lib.js";

const detailsTemplate = (item, hasOwner) =>  html`
 <section id="details">
 <div id="details-wrapper">
      <img id="details-img" src="../../${item.imageUrl}" alt="example1" />
      <div>
      <p id="details-category">${item.category}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p id="description">${item.description}
            </p>
             <p id ="more-info">${item.moreInfo}</p>
        </div>
      </div>
      ${hasOwner ? html `
              <div id="action-buttons">
        <a href="/edit/${item._id}" id="edit-btn">Edit</a>
        <a @click= ${onDelete} data-id=${item._id} href="/delete" id="delete-btn">Delete</a>
      </div>` : html`
      <h3>Is This Useful:<span id="likes">0</span></h3>
      ` }
      ${isLoggedIn() ? html`
      <a href="" id="like-btn">Like</a>
      ` : ""}
  </section>
  `



export async function showDetails(ctx) {
  const id = ctx.params.id;
  const data = await detailsModel(id);
  const hasOwner = isOwner(data._ownerId)
  console.log(data);
  render(detailsTemplate(data, hasOwner))
}

async function onDelete(e) {
  e.preventDefault()
  const isDel = confirm('Delete model?')
  if (!isDel) {
    return
  }
  const id = e.target.dataset.id;
  await deleteModel(id);
  page.redirect('/dashboard')
}




