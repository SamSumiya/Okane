import { getCurrentUser } from ' ./localStorage.js'; 


export function checkMonth() {

    const currentMonth = new Date().getMonth(); 
    const user = getCurrentUser(); 
    if (user.month !== currentMonth) {
        return false; 
    }
    return true;
}

export function updateMonth() {
    const currentUser = getCurrentUser(); 
    if (!checkMonth()) {
        currentUser.month = new Date().getMonth(); 
    }
}
