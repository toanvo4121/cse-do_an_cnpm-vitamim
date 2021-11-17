import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import top_mems from './data/TopMems.js';
import top_trends from './data/TopTrends.js';
import user_posts from './data/UserPosts.js';
import connectDB from './config/db.js';

import templateRoutes from './routes/templateRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/templates', templateRoutes);

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

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.magenta
      .bold
  )
);
