import React, { useState } from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function Chat() {
    const [input, setInput] = useState('');
    
	const sendMessage = (e) => {
		e.preventDefault();
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
				<p className="chat__message">
					<span className="chat__name" style={{ color: `hsl(${Math.floor(Math.random() * 361)}, 85%, 45%)` }}>
						Nazhim Kalam
					</span>
					This is a message
					<span className="chat__timestamp">{new Date().toUTCString()}</span>
				</p>
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
