// Question 3: Fetch and display user data
const url = "https://jsonplaceholder.typicode.com/users/1";

async function getUserData() {
  console.log("Loading user data...");
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch user data");

    const user = await response.json();
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

getUserData();

// Question 4: Calculate total revenue
const sales = [
  { item: "Pen", price: 20, quantity: 3 },
  { item: "Book", price: 200, quantity: 2 },
  { item: "Bag", price: 800, quantity: 1 },
];

const totalRevenue = sales.reduce((total, product) => total + product.price * product.quantity, 0);
console.log("Total revenue:", totalRevenue);