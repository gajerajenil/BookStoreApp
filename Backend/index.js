// server.js (or index.js)
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js'
import cors from 'cors';

const app = express();

app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 3001;
const URI = process.env.MongoDBURI;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect(URI)
 
// Define routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, (err) => {
  if (err) {
    console.error(`Error starting the server: ${err}`);
  } else {
    console.log(`Server is listening on port ${PORT}`);
  }
});
