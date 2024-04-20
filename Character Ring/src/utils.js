export function setUserData(data) {
    localStorage.setItem('user', JSON.stringify(data))
}

export function getUserData() {
    return JSON.parse(localStorage.getItem('user'))
}

export function clearUserData() {
    localStorage.removeItem('user')
}

export function createSubmitHandler(calllback) {
    return function (event) {
        event.preventDefault()

        const formData = new FormData(event.target);
        const data = [...formData.entries()].map(([k, v]) => [k, v.trim()]);

        calllback(Object.fromEntries(data), event.target)
    }
}

export function isOwner(itemOwnerId){
    return getUserData()?._id === itemOwnerId
  
}

export function isLoggedIn() {
    // Get user data from localStorage
    const userData = getUserData();
  
    // Check if userData exists and if it has a truthy _id property
    return userData && userData._id;
  }


export function updateNavigation() {
    const userNav = document.querySelector("div.user")
    const guestNav = document.querySelector("div.guest")
    const userData = getUserData();


    if (userData) {
        guestNav.style.display = "none"
        userNav.style.display = "block"
    }else{
        guestNav.style.display = "block"
        userNav.style.display = "none"
    }
}