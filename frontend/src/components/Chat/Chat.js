import React, { useState } from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import axios from '../../axios';

function Chat({ messages }) {
	const [input, setInput] = useState('');

	const sendMessage = async(e) => {
		e.preventDefault();

		await axios.post('/messages/new', {
			message: input,
			name: 'demo app',
			timestamp: 'new timestamp',
			received: true,
		});

		setInput('');
	};

	return (
		<div className="chat">
			<div className="chat__header">
				<Avatar />
				<div className="chat__headerInfo">
					<h3>Room Name</h3>
					<p>last seen . . . </p>
				</div>

				<div className="chat__headerRight">
					<IconButton>
						<SearchOutlinedIcon />
					</IconButton>

					<IconButton>
						<AttachFileOutlinedIcon />
					</IconButton>

					<IconButton>
						<MoreVertOutlinedIcon />
					</IconButton>
				</div>
			</div>

			<div className="chat__body">
				{messages.map((message) => (
					<p className={`chat__message ${message.received && 'chat__reciever'}`}>
						<span
							className="chat__name"
							style={{ color: `hsl(${Math.floor(Math.random() * 361)}, 85%, 45%)` }}
						>
							{message.name}
						</span>
						{message.message}
						<span className="chat__timestamp">{message.timestamp}</span>
					</p>
				))}
			</div>

			<div className="chat__footer">
				<IconButton>
					<InsertEmoticonIcon />
				</IconButton>
				<form>
					<input
						placeholder="Type a message"
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<button type="submit" onClick={sendMessage}>
						send
					</button>
				</form>
				<IconButton>
					<MicIcon />
				</IconButton>
			</div>
		</div>
	);
}

export default Chat;
