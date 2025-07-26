 const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/employee'); // Adjust the path as necessary
  

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb+srv://ashek790193:YRrsBv6XqoyVii5e@cluster0.vth1qxk.mongodb.net/")
 

 
  

// Register endpoint
app.post('/ register', async (req, res) => {
    EmployeeModel.create(req.body)
  .then(employee=> res.json(employee))
  .catch(err => res.json(err))
 
  }
)
app.listen(3000, () => {
  console.log("Server running on port 3000"); })

/ 

// Start server
app.listen(3001, () => {
  console.log("Server running ");
});
