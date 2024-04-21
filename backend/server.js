// Import necessary modules
const express = require('express');
const mysql = require('mysql');

// Create an instance of Express
const app = express();
const port = 5173; // Choose a port for your backend server

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'your_mysql_host',
  user: 'your_mysql_user',
  password: 'your_mysql_password',
  database: 'your_mysql_database'
});

app.get('/recycle_centers', (req, res) => {
  // Query database for recycling center data
  pool.query('SELECT * FROM recycling_centers', (error, results) => {
    if (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      // Send recycling center data as JSON response
      res.json(results);
    }
  });
});


// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
