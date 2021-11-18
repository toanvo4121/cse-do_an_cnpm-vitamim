import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import TopMems from './data/TopMems.js';
import TopTrends from './data/TopTrends.js';
import UserPosts from './data/UserPosts.js';
import connectDB from './config/db.js';

import templateRoutes from './routes/templateRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/templates', templateRoutes);
app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

app.get('/api/top_mems', (req, res) => {
  res.json(TopMems);
});

app.get('/api/top_mems/:id', (req, res) => {
  const top_mem = TopMems.find((t) => t._id === req.params.id);
  res.json(top_mem);
});

app.get('/api/top_trends', (req, res) => {
  res.json(TopTrends);
});

app.get('/api/top_trends/:id', (req, res) => {
  const top_trend = TopTrends.find((t) => t._id === req.params.id);
  res.json(top_trend);
});

app.get('/api/posts/', (req, res) => {
  res.json(UserPosts);
});

app.get('/api/posts/:id', (req, res) => {
  const user_post = UserPosts.find((t) => t._id === req.params.id);
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
