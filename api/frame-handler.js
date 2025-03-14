// Simple Express server to handle frame submissions and redirect to the game
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('../'));

// Handler for frame submission
app.post('/api/frame-handler', (req, res) => {
  console.log('Frame submission received:', req.body);
  
  // Redirect to the game URL
  res.json({
    redirect: 'https://www.crazygames.com/embed/smash-karts'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
