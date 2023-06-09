import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended:true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended:true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);

app.get('/',(req, res) => {
  res.send('Hello to memories API')
});

const PORT = process.env.PORT || 8000;

mongoose.connect("mongodb+srv://nc379783:Narendra1@cluster0.nuotd2j.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>console.log('Database Connected'))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);   

app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))