import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import Pusher from 'pusher-js'

function App() {
	useEffect(() => {
		// using the backend pusher we are getting the data from mongodb in realtime
		const pusher = new Pusher('4c3e84c47532a02a357d', {
			cluster: 'eu',
		});

		const channel = pusher.subscribe('messages');
		channel.bind('inserted', (data) => {
			alert(JSON.stringify(data));
		});

	}, []);
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
