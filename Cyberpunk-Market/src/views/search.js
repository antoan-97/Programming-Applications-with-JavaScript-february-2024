import { searchModel } from "../data/data.js"
import { html, render } from "../lib.js"
import { createSubmitHandler } from "../utils.js"


const searchTemplate = (handler, result) => html`
<section id="search">

<div class="form">
  <h2>Search</h2>
  <form @submit=${handler} class="search-form">
    <input
      type="text"
      name="search"
      id="search-input"
    />
    <button class="button-list">Search</button>
  </form>
</div>
<h4>Results:</h4>
${result ? showResultTemplate(result) : html `""
`
    }
 </section>
`

const showResultTemplate = (result) => html`
<div class="search-result">  
    ${result.length ? result.map(x => html`
    <div class="fruit">
      <img src="${x.imageUrl}" alt="example1" />
      <h3 class="title">${x.name}</h3>
      <p class="description">
      ${x.description}
      </p>
      <a class="details-btn" href="/details/${x._id}">More Info</a>
    </div>`)
 : html `<p class="no-result">No result.</p>
` } 
    
    
</div>
`


export function showSearchView() {
    const handler = createSubmitHandler(onSearch)
    render(searchTemplate(handler))
}

async function onSearch(data, form) {
    const { search } = data;
    if(!search){
        return alert('no query')
    }
    const result = await searchModel(search);
    const handler = createSubmitHandler(onSearch)
    render(searchTemplate(handler, result))
}

//@submit=${handler}

