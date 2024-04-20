import { del, get, post, put } from "./requests.js"
import { page } from "../lib.js"

const endPoints = {
    allCatalog: '/data/cars?sortBy=_createdOn%20desc',
    model: '/data/cars',
}

export async function getAllCatalog(){
   return await get(endPoints.allCatalog)
}

export async function createModel(data){
    return await post(endPoints.model, data)
}

export async function detailsModel(id){
  return await get(`${endPoints.model}/${id}`)
}

export async function deleteModel(id){
    return await del(`${endPoints.model}/${id}`);
    page.redirect('/dashboard');
}

export async function updataModel(id,data){
    return await put(`${endPoints.model}/${id}`,data)
}

export async function searchModel(query){
return await get(`/data/cars?where=model%20LIKE%20%22${query}%22`)
}