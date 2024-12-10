// const express = require('express');
// const path =  require('path');

// let initial_path = path.join(__dirname,  "public");

// const app= express();
// app.use(express.static(initial_path));

// app.get('/', (req, res)=>{
//     res.sendFile(path.join(initial_path, "uploads/index.html"));
// });
// app.get('/editor.html', (req, res)=>{
//     res.sendFile(path.join(initial_path, "uploads/editor.html"));
// });

// app.listen("3000", ()=>{ 
//     console.log(`listening to port 3000`);  
// });

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url'; 

// Get the current file path (equivalent to __dirname in CommonJS)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the path to the 'public' directory
let initial_path = path.join(__dirname, 'public');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(initial_path));

// Serve the 'index.html' from 'uploads'
app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, 'uploads', 'index.html'));
});

// Serve the 'editor.html' from 'uploads'
app.get('/editor.html', (req, res) => {
    res.sendFile(path.join(initial_path, 'uploads', 'editor.html'));
});

// Start the server
app.listen(3000, () => { 
    console.log('Server is listening on port 3000');
});
