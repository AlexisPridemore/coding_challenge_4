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







