// Task 1 If Statements, Scenario: Customer Discounts

let purchaseAmount = 500; 

let finalAmount = purchaseAmount;

if (purchaseAmount > 100) {   //Apply a discount if the amount is greater than $100
    finalAmount = purchaseAmount * 0.9; 
    console.log("Discount applied")
};
console.log('Final amount after discount: $${finalAmount}');

// Task 2 For Loop, Scenario: Sales Report

let sales = [145, 180, 220, 310, 80];     //Array of sales

let totalSales = 0;
for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];
}

console.log('Total sales: $${totalSales}');

// Task 3, Scenario: Inventory Depletion

let stock = 40;      //use loop to decrease stock until it reaches zero
while (stock > 0) {
    console.log(`Stock remaining: ${stock}`);
    stock--;
}

console.log("Inventory Depleted.")

// Task 4 Do...While Loop, Scenario: Customer Survey

let responses = 0;    //collect responses
do {
    responses++;
    console.log('Response Count: ${responses}');
} while (responses < 3);

console.log("Survey completed.");

// Task 5 For...In Loop, Scenario: Employee Information

let employee = {     //Declare object with properties
    name: "Tom Holland",
    position: "Manager",
    salary: 125000
};

for (let key in employee) {     // iterate through the object properties
    console.log('${key}: ${employee[key]}');
}

// Task 6 For...Of Loop, Scenario: Product Listings

let products = ["Basketball", "Football", "Volleyball"];   //Array of Products

for (let product of products) {     // loop to display each product
    console.log('Product: ${product}');
}

// Task 7 forEach() Method, Scenario: Order Processing

let orders = [456, 789, 101];   //Array of order IDs

orders.forEach(order => {       //Logging of order IDs
    console.log('order ID: ${order}')
});

// Task 8 Function Declaration, Scenario: Tax Calculation

function calculateTax(amount, taxRate) {
    return amount * taxRate;
}
let taxAmount =calculateTax(100, 0.07);
console.log(`Tax Amount: $${taxAmount}`);





