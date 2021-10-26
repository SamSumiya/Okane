import { getCurrentUser } from '../local-storage.js';

const expensesChart = document.querySelector('#expenses-chart').getContext('2d');
expensesChart.canvas.width = '300px';
expensesChart.canvas.height = '300px';
const incomeChart = document.querySelector('#income-chart');
const subsChart = document.querySelector('#subs-chart');

const month = new Date().getMonth() + 1;
const user = getCurrentUser();

const foodValue = getTotal('food', 'expenses');
const billsValue = getTotal('bills', 'expenses');
const transportValue = getTotal('transport', 'expenses');
const insuranceValue = getTotal('insurance', 'expenses');
const healthValue = getTotal('medical', 'expenses');
const entValue = getTotal('entertainment', 'expenses');

function getTotal(category, type) {
    let accumulator = 0;
    for (let item of user[month][type]) {
        if (category === item.category)
            accumulator = accumulator + Number(item.value);
    }
    return accumulator;
}

const expenses = {
    labels: [],
    datasets: [{
        label: 'Expenses',
        data: [],
        backgroundColor: [],
        hoverOffset: 1
    }]
};

if (foodValue) {
    // expenses.labels.push('Food');
    expenses.datasets[0].data.push(foodValue);
    expenses.datasets[0].backgroundColor.push('#FFADAD');
}
if (billsValue) {
    // expenses.labels.push('Home Bills');
    expenses.datasets[0].data.push(billsValue);
    expenses.datasets[0].backgroundColor.push('#FFD6A5');
}
if (transportValue) {
    // expenses.labels.push('Transport');
    expenses.datasets[0].data.push(transportValue);
    expenses.datasets[0].backgroundColor.push('#CAFFBF');
}
if (insuranceValue) {
    // expenses.labels.push('Insurance');
    expenses.datasets[0].data.push(insuranceValue);
    expenses.datasets[0].backgroundColor.push('#9BF6FF');
}
if (healthValue) {
    // expenses.labels.push('Health');
    expenses.datasets[0].data.push(healthValue);
    expenses.datasets[0].backgroundColor.push('#FFC6FF');
}
if (entValue) {
    // expenses.labels.push('Entertainment');
    expenses.datasets[0].data.push(entValue);
    expenses.datasets[0].backgroundColor.push('#BDB2FF');
}

const config = {
    type: 'pie',
    data: expenses,
};

new Chart(
    expensesChart,
    config
);

const bankTotal = getTotal('bank', 'income');
const salaryTotal = getTotal('salary', 'income');
const otherTotal = getTotal('others', 'income');

const income = {
    labels: [],
    datasets: [{
        label: 'Income',
        data: [],
        backgroundColor: [],
        hoverOffset: 1
    }]
};

if (bankTotal) {
    // income.labels.push('Bank');
    income.datasets[0].data.push(bankTotal);
    income.datasets[0].backgroundColor.push('#4ECDC4');
}
if (salaryTotal) {
    // income.labels.push('Salary');
    income.datasets[0].data.push(salaryTotal);
    income.datasets[0].backgroundColor.push('#FF6B6B');
}
if (otherTotal) {
    // income.labels.push('Other');
    income.datasets[0].data.push(otherTotal);
    income.datasets[0].backgroundColor.push('#FFE66D');
}

const config2 = {
    type: 'pie',
    data: income,
};

new Chart(
    incomeChart,
    config2
);

const holidayTotal = getTotal('holiday', 'savings');
const rainyTotal = getTotal('rainy-day', 'savings');
const eduTotal = getTotal('education', 'savings');
const retTotal = getTotal('retirement', 'savings');
const otherTotalSav = getTotal('other', 'savings');

const savings = {
    labels: [],
    datasets: [{
        label: 'Savings',
        data: [],
        backgroundColor: [],
        hoverOffset: 1
    }]
};

if (holidayTotal) {
    // savings.labels.push('Holiday');
    savings.datasets[0].data.push(holidayTotal);
    savings.datasets[0].backgroundColor.push('#006BA6');
}
if (rainyTotal) {
    // savings.labels.push('Rainy Day');
    savings.datasets[0].data.push(rainyTotal);
    savings.datasets[0].backgroundColor.push('#0496FF');
}
if (eduTotal) {
    // savings.labels.push('Education');
    savings.datasets[0].data.push(eduTotal);
    savings.datasets[0].backgroundColor.push('#FFBC42');
}
if (retTotal) {
    // savings.labels.push('Retirement');
    savings.datasets[0].data.push(retTotal);
    savings.datasets[0].backgroundColor.push('#D81159');
}
if (otherTotalSav) {
    // savings.labels.push('Other');
    savings.datasets[0].data.push(otherTotalSav);
    savings.datasets[0].backgroundColor.push('#8F2D56');
}

const config3 = {
    type: 'pie',
    data: savings,
};

new Chart(
    subsChart,
    config3
);
