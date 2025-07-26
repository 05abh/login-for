const mongoose =require('mongoose');

const empoyeeSchema = new mongoose.Schema({
    name: string,
    email: string,
    password: string,
});
const EmployeeModel = mongoose.model('Employee', empoyeeSchema);
module.exports = EmployeeModel;