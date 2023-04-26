
//tablesSection = document.getElementById('show-all-tables');

//showTablesBtn = document.getElementById('show-tables-btn');
placePartyBtn = document.getElementById('place-party-btn');

// showTablesBtn.addEventListener('click', (e) => {
//     e.preventDefault(); // stops refreshing of page
//     //fetch('./order').then(response => response.json()).then(data => {console.log(data)})
// })

placePartyBtn.addEventListener('click', (e) => {
    e.preventDefault(); // stops refreshing of page
    //fetch('./order').then(response => response.json()).then(data => {console.log(data)})
    getOrders();
})

async function getOrders () {
    const response = await fetch('http://localhost:3000/order');
    const orderArray = await response.json();
    console.log(response)
    console.log(orderArray)
}

