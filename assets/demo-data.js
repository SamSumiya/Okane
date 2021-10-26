

const randomNumber = () => {
    return Math.floor(Math.random() * 99999); 
}; 

export const user1 = {
    id: 'accoutname',
    username: 'okane',
    password: 'password',
    month: 5,
    5: {
        income: 
        [
            { 
                id: randomNumber(),
                name: 'Chase',  
                category: 'bank',
                value: 60000, 
                description: 'chase'
            }, 
            { 
                id: randomNumber(),
                name: 'Wells Fargo',  
                category: 'bank',
                value: 250000, 
                description: '' 
            }
            // users can create their own object 
        ], 
        expenses: 
        [
            { 
                id: randomNumber(),
                name: '', 
                category: 'housing',
                static: true, 
                value: 5000,
                description: '', 
            }, 
            { 
                id: randomNumber(),
                name: '', 
                category: 'insurance',
                static: true, 
                value: 500,
                description: '', 
            }, 
            {   
                id: randomNumber(),
                name: 'AAA', 
                category:'insurance',
                static: true, 
                value: 1000, 
                description: '', 
            },
            {
                id: randomNumber(),
                name: '',
                category: 'grocery',
                static: false, 
                value: 500, 
                description: ''
            }, 
            {
                id: randomNumber(),
                name: 'Netflix',  
                category: 'entertainment', 
                static: true, 
                value: 12, 
                description: ''
            },
            {
                id: randomNumber(),
                name: 'Hulu',  
                category: 'entertainment', 
                static: true, 
                value: 12, 
                description: ''
            },
            {
                id: randomNumber(),
                name: 'Spotify',  
                category: 'entertainment', 
                static: true, 
                value: 12, 
                description: ''
            }
        ], 
        saving: 
        [
            {
                id: randomNumber(), 
                name: 'Trip to Australia',
                category: 'savings', 
                value: 1000, 
                description: ''
            }
        ]
    } 
}; 


// dropdown menu, amount of money
// 1, bank   Chase [1000] 
    // create chase
// 1. chase bank 
    // 
// 2, spend   [1000]
user1; 


