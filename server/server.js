const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 8080;

app.get("/api", (req, res) => {
    res.json({"items": [
        {
          "name": "Playstation",
          "price": 600
        },
        {
          "name": "Nintendo",
          "price": 400
        }]});
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});