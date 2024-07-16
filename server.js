const express = require('express');
const path = require('path');
const app = express();
const port ="5800";

const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');

// // Serve static files from the Vite app
// app.use(express.static(path.join(__dirname, 'front_end')));



app.use(bodyParser.json());
app.use('/api', userRoutes);


app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});