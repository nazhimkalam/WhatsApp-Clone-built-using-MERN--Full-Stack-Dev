import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		axios.get('/messages/sync').then((response) => {
			setMessages(response.data);
		});
	}, []);

	useEffect(() => {
		// using the backend pusher we are getting the data from mongodb in realtime
		// This useEffect runs when there is any changes the pusher informs
		const pusher = new Pusher('4c3e84c47532a02a357d', {
			cluster: 'eu',
		});

		const channel = pusher.subscribe('messages');
		channel.bind('inserted', (newMessage) => {
			alert(JSON.stringify(newMessage));
			setMessages([...messages, newMessage]);
		});

		// clean Up process
		return () => {
			channel.unbind_all();
			channel.unsubscribe();
		};
		
	}, [messages]);

	console.log(messages);

	return (
		<div className="app">
			<div className="app__body">
				<Sidebar />
				<Chat />
			</div>
		</div>
	);
}

export default App;
