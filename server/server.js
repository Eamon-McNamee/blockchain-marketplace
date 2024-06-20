const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
require('dotenv').config();

const itemsFilePath = path.join(__dirname, 'items.json');

const PORT = process.env.PORT || 8080;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Ensure items.json file exists
if (!fs.existsSync(itemsFilePath)) {
  fs.writeFileSync(itemsFilePath, JSON.stringify({ items: [] }, null, 2));
}

// GET endpoint to fetch items
app.get('/api/items', (req, res) => {
    fs.readFile(itemsFilePath, (err, data) => {
        if (err) {
            console.error('Error reading items data:', err);
            return res.status(500).json({ error: 'Failed to read items data' });
        }
        const items = JSON.parse(data);
        res.status(200).json(items); // Ensure we are returning an object with a items array
    });
});

// POST endpoint to add a new item
app.post('/api/items', (req, res) => {
    const newItem = req.body;
    if (!newItem.name || !newItem.price) {
        console.error('Item name and price are required');
        return res.status(400).json({ error: 'Item name and price are required' });
    }

    fs.readFile(itemsFilePath, (err, data) => {
        if (err) {
            console.error('Error reading items data:', err);
            return res.status(500).json({ error: 'Failed to read items data' });
        }

        const items = JSON.parse(data);
        items.items.push(newItem);

        fs.writeFile(itemsFilePath, JSON.stringify(items, null, 2), (err) => {
            if (err) {
                console.error('Error saving item:', err);
                return res.status(500).json({ error: 'Failed to save item' });
            }

            res.status(201).json({ message: 'Item added successfully' });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});