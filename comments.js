// Create web server with Express.js and handle requests with Node.js
// 1. Import the express module and create an instance of the express module
// 2. Create a route with app.get(), app.post(), app.put(), app.delete() methods
// 3. Use the req object to get data from the client
// 4. Use the res object to send data back to the client
// 5. Start the server with the listen() method

// Import the express module
const express = require('express');

// Create an instance of the express module
const app = express();

// Create a route with app.get(), app.post(), app.put(), app.delete() methods
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start the server with the listen() method
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
