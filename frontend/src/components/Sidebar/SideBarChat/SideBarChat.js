import React from 'react'
import { Avatar } from '@material-ui/core'

function SideBarChat() {
    return (
        <div className="sideBarChat">
             <Avatar />
             <div className="sideBarChar__info">
                 <h2>Room name</h2>
                 <p>This is the last message</p>
             </div>
        </div>
    )
}

export default SideBarChat
