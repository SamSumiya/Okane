import { getCurrentUser, setUser } from './local-storage.js'; 

// updated month
// get user()
// 

const randomNumber = () => {
    return Math.floor(Math.random() * 99999); 
}; 

const form = document.querySelector('form');
const currentMonth = new Date().getMonth() + 1;
const currentUser = getCurrentUser();
if (currentUser.month !== (new Date().getMonth() + 1)) {
    currentUser.month = new Date().getMonth() + 1;
    currentUser[currentMonth] = { income: [], expenses: [], savings: [] };
    setUser(currentUser);
}

form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const formData = new FormData(form); 
    const name = formData.get('name');
    const description = formData.get('description');
    const amount = formData.get('amount'); 
    const deficit = formData.get('deficit'); 
    const surplus = formData.get('surplus');
    const savings = formData.get('savings');
     // const staticBox = formData.get('staticBox');     
    // console.log(currentUser[currentMonth].income); 
    function capitalizedName(name) {
        const arrName = name.split(''); 
        let capName = '';
        capName = name.charAt(0).toUpperCase(); 
        capName += arrName.slice(1).join(''); 
        return capName; 
    }
    const capitalizedUserName = capitalizedName(name);     

    if (deficit === 'select' && surplus === 'select' && savings === 'select') {
        alert('Must select one from the dropdown'); 
        return; 
    }

    if (deficit !== 'select' && surplus !== 'select' && savings !== 'select') {
        alert('Must select one from the dropdown'); 
        return; 
    
    }

    if (deficit === 'select' && savings === 'select') {
        const userData = {
            id: randomNumber(), 
            name: capitalizedUserName, 
            category: surplus,
            value: amount, 
            description: description
        };
        currentUser[currentMonth].income.push(userData);
    }

    if (surplus === 'select' && savings === 'select') {
        const userData = {
            id: randomNumber(), 
            name: capitalizedUserName, 
            category: deficit,
            value: amount, 
            description: description
        };
        currentUser[currentMonth].expenses.push(userData);
    }

    if (surplus === 'select' && deficit === 'select') {
        const userData = {
            id: randomNumber(), 
            name: capitalizedUserName, 
            category: savings,
            value: amount, 
            description: description
        };
        currentUser[currentMonth].savings.push(userData);
    }
    setUser(currentUser);
}); 

export function getTotalMoney() {
    const user = getCurrentUser();
    const currentMonth = user.month;
    let total = 0;
    for (let item of user[currentMonth].income) {
        total = total + item.value;
    }
    return (total);
}

export function getTotalExpenses() {
    const user = getCurrentUser();
    const currentMonth = user.month;
    let total = 0;
    for (let item of user[currentMonth].expenses) {
        total = total + item.value;
    }
    return (total);
}





