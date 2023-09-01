const setAmount = 2978.0; // The fixed set amount
const outputElement = document.getElementById('output'); // Get the output element

// Get all elements with the class "price"
const priceElements = document.querySelectorAll('.price');

// Loop through each price element and calculate the percentage
priceElements.forEach((priceElements) => {
  const priceText = priceElements.textContent;
  const priceValue = parseFloat(priceText.replace('£', '')); // Convert the price text to a numeric value
  const percentage = (priceValue / setAmount) * 100;

  // Create a message and update the content of the output element
  const message = `£{priceText} is £{percentage}% of £{setAmount}<br>`;
  outputElement.innerHTML += message; // Append the message to the existing content
});
