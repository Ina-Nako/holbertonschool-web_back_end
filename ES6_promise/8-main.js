import divideFunction from './8-try';

console.log(divideFunction(10, 2)); // Should print 5
try {
  console.log(divideFunction(10, 0)); // Should throw an error
} catch (error) {
  console.error(error.message); // Should print 'cannot divide by 0'
}