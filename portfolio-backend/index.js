// portfolio-backend/index.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// This is the data that will be sent to your front end
const projects = [
  {
    id: 1,
    title: 'DHARTI',
    image: 'https://via.placeholder.com/400x300?text=DHARTI+Image',
    description: 'Welcome to my portfolio of website designs. Crafted primarily in Figma, these projects highlight my approach to visual design, creating intuitive user interfaces, and organizing information to build truly engaging web experiences.'
  },
  {
    id: 2,
    title: 'Charpatilla',
    image: 'https://via.placeholder.com/400x300?text=Charpatilla+Image',
    description: 'You\'ll see my focus on smooth user flows, responsive layouts, and designs that perfectly capture a brand\'s unique identity.'
  },
  {
    id: 3,
    title: 'PHUKET BICYCLE RENTAI',
    image: 'https://via.placeholder.com/400x300?text=PHUKET+BICYCLE+RENTAL+Image',
    description: 'Take a look at these live websites. Built using platforms like WordPress with the Divi Builder, these examples beautifully illustrate how I bring designs to life through hands-on coding and implementation.'
  }
];

// This is the endpoint that the front end will call
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});