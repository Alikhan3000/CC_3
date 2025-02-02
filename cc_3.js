//Task 1: Product Price Management Scenario.

let prices = [100, 200, 300, 400, 500]; //declared an array with 5 numerical values

prices.push(600); //new value 600 added to the array 
prices.shift();  //removed the first element from the array

console.log(prices); 

//Task 2: Modifying Customer Orders Scenario.

let quantities = [10, 15, 20, 25, 30]; //declared an array with 5 numerical values
quantities[2] += 5; //increased the 3rd order by 5

let quantities_total = quantities.reduce((sum, quantitie) => sum + quantitie, 0); //calculated total # of orders

console.log(quantities);
console.log(quantities_total);

//Task 3: Employee Performance Tracking Scenario.

let employee = {        //declared an object with 4 properties
name: "Ali",
role: "IT_support",
performanceScore: 9,
isActive: true

};

employee.performanceScore = 10; //updated performanceScore property to 10
employee.promotionEligible = true; //added a new property with a boolean values to the object "employee"

console.log(employee);

//Task 4: Customer Feedback Records Scenario.

let feedback = [ //declared an array with 3 objects, each with 3 properties
{customerName: "Brenda Jackson-Lee", feedbackText: "I liked the quality of the service provided", rating: 8}, 
{customerName: "Johny Fratboy", feedbackText: "Amazing!", rating: 10},
{customerName: "Kurt Hetfield", feedbackText: "Worst experience in my life!", rating: 2},
];

feedback.push({customerName: "Mahatma Gandhi", feedbackText: "OMG this is the best!",rating: 9}); //added a new object to the array

console.log(feedback);