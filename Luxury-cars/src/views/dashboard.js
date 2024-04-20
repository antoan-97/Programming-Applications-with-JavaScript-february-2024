import { getAllCatalog } from '../data/data.js';
import { html , render } from '../lib.js';


const dashBoardTemp = (data) => html `
   <h3 class="heading">Our Cars</h3>
 ${data.length ? dashBoardDataTemp(data) : html `
 <!-- Display an h2 if there are no posts -->
 <h3 class="nothing">Nothing to see yet</h3>`}
`

const dashBoardDataTemp = (data) => html `
    <section id="dashboard">
      <!-- Display a div with information about every post (if any)-->
     ${data.map(item => cardTemp(item))}
      </section>
`


const cardTemp = item => html`
 <div class="car">
      <img src="../../${item.imageUrl}" alt="example1" />
      <h3 class="model">${item.model}</h3>
      <div class="specs">
        <p class="price">Price: ${item.price}</p>
        <p class="weight">Weight: ${item.weight}</p>
        <p class="top-speed">Top Speed: ${item.speed} kph</p>
      </div>
      <a class="details-btn" href="/details/${item._id}">More Info</a>
    </div>
`

export async function showDashboard(){
    const data = await getAllCatalog()
    render(dashBoardTemp(data))
}