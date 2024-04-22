import { deleteModel, detailsModel } from "../data/data.js";
import { html, render } from "../lib.js"
import { isOwner } from "../utils.js";
import { page } from "../lib.js";


const detailsTemplate = (item, hasOwner) => html`
  <section id="details">
    <div id="details-wrapper">
      <div>
        <img id="details-img" src="../../${item.imageUrl}" alt="example1" />
        <p id="details-title">${item.item}</p>
      </div>
      <div id="info-wrapper">
        <div id="details-description">
          <p class="details-price">Price: €${item.price}</p>
          <p class="details-availability">
            ${item.availability}
          </p>
          <p class="type">Type: ${item.type}</p>
          <p id="item-description">
          ${item.description}
          </p>
        </div>
        <!--Edit and Delete are only for creator-->
        ${hasOwner ? html`
      <div id="action-buttons">
        <a href="/edit/${item._id}" id="edit-btn">Edit</a>
        <a @click= ${onDelete} data-id=${item._id} href="/delete" id="delete-btn">Delete</a>
      </div>` : ""}
      </div>
    </div>
  </section>

`

export async function showDetails(ctx) {
  const id = ctx.params.id;
  const data = await detailsModel(id);
  const hasOwner = isOwner(data._ownerId)
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


{/* <section id="details">
<div id="details-wrapper">
      <img id="details-img" src="../../${item.imageUrl}" alt="example1" />
      <p id="details-title">${item.name}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p>${item.description}</p>
              <p id="nutrition">Nutrition</p>
             <p id = "details-nutrition">
                ${item.nutrition}
                  </p>
        </div>
      <!--Edit and Delete are only for creator-->
      ${hasOwner ? html`
      <div id="action-buttons">
        <a href="/edit/${item._id}" id="edit-btn">Edit</a>
        <a @click= ${onDelete} data-id=${item._id} href="/delete" id="delete-btn">Delete</a>
      </div>` : ""}
    </div>
  </div>
</section> */}