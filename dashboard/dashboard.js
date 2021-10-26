import { logout, getCurrentUser } from '../local-storage.js';

const logoutButton = document.querySelector('#logout');

const user = getCurrentUser();

renderUserData(user);

const enterButton = document.querySelector('#enterBtn');

function renderUserData(user) {
    const bodyTag = document.querySelector('tbody');
    const currentMonth = new Date().getMonth() + 1; 
    const month = user[currentMonth];
    bodyTag.innerHTML = ''; 
    for (let finance in month) {
        const monthlyFinance = month[finance]; 
        for (let obj of monthlyFinance) {
            const tr = document.createElement('tr');
            const companyName = document.createElement('td');
            const categoryName = document.createElement('td');
            const cashValue = document.createElement('td');
            const description = document.createElement('td');
            categoryName.textContent = obj.category; 
            companyName.textContent = obj.name;
            description.textContent = obj.description;  
            const objValue = obj.value;
            cashValue.textContent = Number(objValue).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
            }); 
            tr.append(companyName, categoryName, cashValue, description);    
            bodyTag.append(tr); 
        }
    }
}


enterButton.addEventListener('click', () => {
    const user = getCurrentUser();
    renderUserData(user); 
    window.location.href = './index.html'; 
}); 


const userGreetingDiv = document.querySelector('#userGreeting'); 

function userGreeting() {
    userGreetingDiv.textContent = `Welcome ${user.name}`; 
} 
userGreeting(); 

logoutButton.addEventListener('click', () => {
    logout();
});