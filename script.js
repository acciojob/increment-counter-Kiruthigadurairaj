//your JS code here. If r
const counterParagraph = document.getElementById('counter');
const incrementButton = document.getElementById('incrementBtn');
let counterValue = 0;
incrementButton.addEventListener('click', () => {
  // Display an alert 
  alert(' ${counterValue}`);
counterValue++;
  // Update the paragraph
  counterParagraph.textContent = counterValue;
});