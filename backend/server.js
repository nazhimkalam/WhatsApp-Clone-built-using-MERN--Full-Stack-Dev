// importing ==>
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// app config ==>
const app = express();
const port = process.env.PORT || 9000;
dotenv.config();
// console.log(process.env.DATABASE_URL)

// middleware ==>

// DB config ==>
const connectionUrl = process.env.DATABASE_URL;
mongoose.connect(connectionUrl, {
	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true
});

// ??????? ==>

// API routes ==>
app.get('/', (req, res) => {
	res.status(200).send('Hello World');
});

// listener ==>
app.listen(port, () => {
	console.log(`Listening on localhost ${port}`);
});
