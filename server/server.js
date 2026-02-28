const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT;

//middleware section
app.use(cors());
app.use(express.json()); // this converts json requests to javascript objects
// this parses from data from requests
app.use(express.urlencoded({ extended: true })); 

//routes section
app.get("/api", (req, res) => {
    res.json({ message: "Welcome to Jap Singh's portfolio" })
});

app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;
    console.log("contact form submission: ", { name, email, message });
    res.json({
        success: true,
        message: "I will get back to you soon. Thank you for the message!"
    });
});

app.get("/api/projects", (req, res) => {
    const projects = [{
        id: 1, 
        title: "Breeze",
        description: "Live air quality, pollen, and weather trend metrics",
        technologies: ["Swift", "JavaScript", "Node.js", "Google Cloud"],
        webUrl: "https://breeze.earth",
    }]

    res.json(projects);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})














