// importing ==>
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Messages from './DB_schema.js';

// app config ==>
const app = express();
const port = process.env.PORT || 9000;
dotenv.config();
// console.log(process.env.DATABASE_URL)

// middleware ==>
app.use(express.json());

// DB config ==>
const connectionUrl = process.env.DATABASE_URL;
mongoose.connect(connectionUrl, {
	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// ??????? ==>

// API routes ==>
app.get('/', (req, res) => {
	res.status(200).send('Hello World');
});

app.post('/messages/new', (req, res) => {
	const dbMessage = req.body;
	console.log(dbMessage);

	Messages.create(dbMessage, (err, data) => {
		if (err) {
			res.status(500).send(err); // internal server error
		} else {
			res.status(201).send(data);
		}
	});
});

// listener ==>
app.listen(port, () => {
	console.log(`Listening on localhost ${port}`);
});
