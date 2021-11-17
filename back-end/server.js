const express = require('express');
const templates = require('./data/Templates.js');
const top_mems = require('./data/TopMems.js');
const top_trends = require('./data/TopTrends.js');
const user_posts = require('./data/UserPosts.js');

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/templates', (req, res) => {
  res.json(templates);
});

app.get('/templates/:id', (req, res) => {
  const template = templates.find((t) => t._id === req.params.id);
  res.json(template);
});

app.get('/top_mems', (req, res) => {
  res.json(top_mems);
});

app.get('/top_mems/:id', (req, res) => {
  const top_mem = top_mems.find((t) => t._id === req.params.id);
  res.json(top_mem);
});

app.get('/top_trends', (req, res) => {
  res.json(top_trends);
});

app.get('/top_trends/:id', (req, res) => {
  const top_trend = top_trends.find((t) => t._id === req.params.id);
  res.json(top_trend);
});

app.get('/posts', (req, res) => {
  res.json(user_posts);
});

app.get('/posts/:id', (req, res) => {
  const user_post = user_posts.find((t) => t._id === req.params.id);
  res.json(user_post);
});

app.listen(5000, console.log('Server running on port 5000'));
