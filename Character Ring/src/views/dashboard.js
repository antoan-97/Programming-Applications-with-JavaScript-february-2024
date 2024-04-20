import { getAllCatalog } from '../data/data.js';
import { html , render } from '../lib.js';


const dashBoardTemp = (data) => html `
    <h2>Characters</h2>
 ${data.length ? dashBoardDataTemp(data) : html `
 <!-- Display an h2 if there are no posts -->
 <h2>No added Heroes yet.</h2>`}
`

const dashBoardDataTemp = (data) => html `
    <section id="characters">
      <!-- Display a div with information about every post (if any)-->
     ${data.map(item => cardTemp(item))}
      </section>
`


const cardTemp = item => html`
  <div class="character">
  <div class="hero-info">
  <img src="../../${item.imageUrl}" alt="example1" />
  <h3 class="category">${item.category}</h3>
        <p class="description">${item.description}</p>
        <a class="details-btn" href="/details/${item._id}">More Info</a>
      </div>
      </div>
`

export async function showDashboard(){
    const data = await getAllCatalog()
    render(dashBoardTemp(data))
}

{/* <img src="../../${item.imageUrl}" alt="example1" />
<h3 class="title">${item.name}</h3>
<p class="description">${item.description}</p>
<a class="details-btn" href="/details/${item._id}">More Info</a> */}
