import { del, get, post, put } from "./requests.js"
import { page } from "../lib.js"

const endPoints = {
    allCatalog: '/data/characters?sortBy=_createdOn%20desc',
    model: '/data/characters',
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

export async function updataModel(id,category, imageUrl, description, moreInfo){
    return await put(`${endPoints.model}/${id}`,{ category, imageUrl, description, moreInfo })
}

export async function searchModel(query){
return await get(`/data/fruits?where=name%20LIKE%20%22${query}%22`)
}


export async function likeModel(id){
    return await get(`/data/bought?where=productId%3D%22${id}%22&distinct=_ownerId&count`)
}