
# Home Page
## Sign up and Login 

# User page
### Dashboard

# Charts
## 

# About 
## Contributor info


#

``` JS

1. Login multiple Users
local-storage

user1.username: {
	id,   // Account Name, has to be uniq, display account name = id
	username,   // doesnt need to be uniq,  dsiplauy username
	password, 
	income: [
		 {chase: 1000}, 
		 {}
	], 
	spendings: [ 
        {}
    ] 
}

user1.

``` 

THIS IS THE ENTERTAINMENT CHART FUNCTIONS THAT WE'RE NOT USING
// const subscriptions = {
//     // labels: getEntTotal()[0],
//     datasets: [{
//         label: 'Entertainment',
//         data: getEntTotal()[1],
//         backgroundColor: ['#0081A7', '#00AFB9', '#FDFCDC', '#FED9B7', '#F07167', '#FBDCDA'],
//         hoverOffset: 1
//     }]
// };

// function getEntTotal() {
//     const nameArray = [];
//     const valueArray = [];
//     for (let item of user[month].expenses) {
//         if (item.category === 'entertainment') {
//             nameArray.push(item.name);
//             valueArray.push(item.value);
//         }
//     }
//     return [nameArray, valueArray];
// }

// const config3 = {
//     type: 'pie',
//     data: subscriptions,
// };

// new Chart(
//     subsChart,
//     config3
// );