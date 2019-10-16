// Recursion exercise
// Exercise Link https://codepen.io/btholt/pen/QyMjNa
function factorial (n) {
  if(n < 2) return 1; 
  return factorial(n - 1) * n;
}