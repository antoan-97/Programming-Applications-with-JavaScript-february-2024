import { getAllCatalog } from '../data/data.js';
import { html , render } from '../lib.js';


const dashBoardTemp = (data) => html `
   <h3 class="heading">Market</h3>
 ${data.length ? dashBoardDataTemp(data) : html `
 <!-- Display an h2 if there are no posts -->
 <h3 class="empty">No Items Yet</h3>`}
`

const dashBoardDataTemp = (data) => html `
    <section id="dashboard">
      <!-- Display a div with information about every post (if any)-->
     ${data.map(item => cardTemp(item))}
      </section>
`


const cardTemp = item => html`
   <div class="item">
      <img src="../../${item.imageUrl}" alt="example1" />
      <h3 class="model">${item.item}</h3>
      <div class="item-info">
        <p class="price">Price: €${item.price}</p>
        <p class="availability">
          ${item.availability}
        </p>
        <p class="type">Type: ${item.type}</p>
      </div>
      <a class="details-btn" href="/details/${item._id}">Uncover More</a>
    </div>
`

export async function showDashboard(){
    const data = await getAllCatalog()
    render(dashBoardTemp(data))
}





// const dashBoardTemp = (data) => html `
//    <h3 class="heading">Our Cars</h3>
//  ${data.length ? dashBoardDataTemp(data) : html `
//  <!-- Display an h2 if there are no posts -->
//  <h2>No fruit info yet.</h2>`}
// `

// const dashBoardDataTemp = (data) => html `
//     <section id="dashboard">
//       <!-- Display a div with information about every post (if any)-->
//      ${data.map(item => cardTemp(item))}
//       </section>
// `


// const cardTemp = item => html`
//   <div class="fruit">
//         <img src="../../${item.imageUrl}" alt="example1" />
//         <h3 class="title">${item.name}</h3>
//         <p class="description">${item.description}</p>
//         <a class="details-btn" href="/details/${item._id}">More Info</a>
//       </div>
// `
