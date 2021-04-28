const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");

const app = express();
app.use(bodyParser.json());

app.use("/", express.static(__dirname + "/build"));
app.get("/", (req, res) => res.sendFile(__dirname + "/build/index.html"));

mongoose.connect(
    process.env.MONGODB_URL || "mongodb://localhost/mongoDB",
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    }
);

const Task = mongoose.model(
    "tasks",
    new mongoose.Schema({
        _id: { type: String, default: shortid.generate },
        title: String,
        image: String,
        desc: String,
        deadline: Number,
        type: [String],
    })
);

app.get("/api/tasks", async (req, res) => {
    const tasks = await Task.find({});
    res.send(tasks);
});

app.post("/api/tasks", async (req, res) => {
    const newTask = new Task(req.body);
    const savedTask = await newTask.save();
    res.send(savedTask);
});

app.delete("/api/tasks/:id", async (req, res) => {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    res.send(deletedTask);
});

const Order = mongoose.model(
    "order",
    new mongoose.Schema(
        {
            _id: {
                type: String,
                default: shortid.generate,
            },
            fullName: String,
            email: String,
            department: String,
            city: Number,
            cartItems: [
                {
                    _id: String,
                    title: String,
                    price: Number,
                    count: Number,
                },
            ],
        },
        {
            timestamps: true,
        }
    )
);

app.post("/api/orders", async (req, res) => {
    if (
        !req.body.fullName ||
        !req.body.email ||
        !req.body.department ||
        !req.body.total ||
        !req.body.cartItems
    ) {
        return res.send({ message: "Data is required." });
    }
    const order = await Order(req.body).save();
    res.send(order);
});
app.get("/api/orders", async (req, res) => {
    const orders = await Order.find({});
    res.send(orders);
});
app.delete("/api/orders/:id", async (req, res) => {
    const order = await Order.findByIdAndDelete(req.params.id);
    res.send(order);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("serve at http://localhost:5000"));