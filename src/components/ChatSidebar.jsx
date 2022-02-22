import React from 'react';
import {
  Button,
} from 'react-bootstrap';
import Channel from './Channel.jsx';

const ChatSidebar = ({ channels, activeChannelId }) => (
  <>
    { console.log(channels, activeChannelId) }
    <div className="d-flex justify-content-between mb-2 ps-4 pe-2">
      <span>Каналы</span>
      <Button variant="link" className="p-0 btn text-primary btn-group-vertical">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
      </Button>
    </div>
    <ul className="nav flex-column nav-pills nav-fill px-2">
      {channels.map(({ id, name, removable }) => {
        const variant = id === activeChannelId ? 'secondary' : 'light';
        return <Channel key={id} variant={variant} name={name} removable={removable} />;
      })}
    </ul>
  </>
);

export default ChatSidebar;
