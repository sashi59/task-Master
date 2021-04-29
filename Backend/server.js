const express = require("express");

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Employee = require("./models/Employee")

const app = express();
app.use(express.json());


mongoose.connect(
    "mongodb+srv://admin-payal:kitkat8249@cluster0.ifcel.mongodb.net/EmployeeDetails?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    }
);

app.get("/", (req, res) => {
  res.send("Hey There , Greetings From The Server. Have a Good Day :)")
    
})
app.get("/employee", (req, res) => {
    
  Employee.find({  })
  .then((data) => {
      res.json(data);
  })
  .catch((error) => {
      console.log('error: ', error);
  });
  });
  
  
app.get("/task", (req, res) => {
    res.json({ message: "This is the Tasks page" });
  });
  
  app.post("/task", (req, res) => {
    const { fullName,
        email,
        department,
        city,
        tasktitle,
        taskdeadline, } = req.body;

    let newEmployee = new Employee({ 
        fullName,
        email,
        department,
        city,
        tasktitle,
        taskdeadline,
    })
    newEmployee.save();
    console.log("Employees details and tasks has been saved")
    
  });
  


const port = process.env.PORT || 5000;
app.listen(port, () => console.log("serve at http://localhost:5000"));