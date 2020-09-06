import React from 'react';
import './Sidebar.css';
import { IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Sidebar() {
	return (
		<div className="sideBar">
			<div className="sideBar__header">
				<Avatar src={user?.photoURL} />
				<div className="sideBar__headerRight">
					<IconButton>
						<DonutLargeIcon />
					</IconButton>
					<IconButton>
						<ChatIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
