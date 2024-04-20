import { clearUserData, setUserData, updateNavigation } from '../utils.js';
import { get, post } from './requests.js'
import { page } from '../lib.js';


const endPoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
}

export async function login(email, password){
    const result = await post (endPoints.login, {email, password});
    setUserData(result)
    page.redirect('/')
    updateNavigation()
}

export async function register(email, password){
    const result = await post (endPoints.register, {email, password});
    setUserData(result)
    page.redirect('/')
    updateNavigation()
}

export async function logout(){
    const promise = get(endPoints.logout);
    clearUserData();
    await promise;
    page.redirect('/') 
    updateNavigation()
}