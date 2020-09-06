import React from 'react';
import './Sidebar.css';
import { IconButton, Avatar } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

function Sidebar() {
	return (
		<div className="sideBar">
			<div className="sideBar__header">
				<Avatar />
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

			<div className="sideBar__search">
				<div className="sideBar__searchContainer">
					<SearchOutlinedIcon />
					<input type="text" placeholder="Search or start new group" />
				</div>
			</div>

			<div className="sideBar__chats">
				<SideBarChat addNewChat />
				<SideBarChat />
				<SideBarChat />
				<SideBarChat />
			</div>
		</div>
	);
}

export default Sidebar;
