// importing ==>
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Messages from './DB_schema.js';
import Pusher from 'pusher';

// app config ==>
const app = express();
const port = process.env.PORT || 9000;
dotenv.config();
const pusher = new Pusher({
	appId: '1067951',
	key: '4c3e84c47532a02a357d',
	secret: 'da6ff6b730c7c8cc4efe',
	cluster: 'eu',
	encrypted: true,
});

// middleware ==>
app.use(express.json());

// DB config ==>
const connectionUrl = process.env.DATABASE_URL;
mongoose.connect(connectionUrl, {
	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', () => {
	console.log('db is connect');

	const msgCollection = db.collection('messagecontents');
	const changeStream = msgCollection.watch();

	changeStream.on('change', (change) => {
		// when ever a change occurs the "change" variable will get the data stores of the changed value
		console.log(' A change occurred ', change);

		if (change.operationType === 'insert') {
			// note that "change" is an object with a number of properties we can use from
			const messageDetails = change.fullDocument;
			pusher.trigger('messages', 'inserted', {
				name: messageDetails.user,
				message: messageDetails.message,
			});
		} else {
			console.log('Error triggering pusher');
		}
	});
});

// API routes ==>
app.get('/', (req, res) => {
	res.status(200).send('Hello World');
});

app.get('/messages/sync', (req, res) => {
	Messages.find((err, data) => {
		// finds all the data from the database and return them
		if (err) {
			res.status(500).send(err); // 500 internal server error
		} else {
			res.status(200).send(data); // 200 this is a created OK
		}
	});
});

app.post('/messages/new', (req, res) => {
	const dbMessage = req.body;
	console.log(dbMessage);

	Messages.create(dbMessage, (err, data) => {
		if (err) {
			res.status(500).send(err); // 500 internal server error
		} else {
			res.status(201).send(data); // 201 this is a created status
		}
	});
});

// listener ==>
app.listen(port, () => {
	console.log(`Listening on localhost ${port}`);
});
