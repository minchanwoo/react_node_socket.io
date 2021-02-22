import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Chat = ({location}) => {
  const [ name, setName ] = useState('');
  const [ room, setRoom ] = useState('');
  const ENDPOINT = 'http://localhost:5000';
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT, {transports: ['websocket', 'polling', 'flashsocket']});

    setName(name);
    setRoom(room);
    socket.emit('join', {name, room});
  }, [ENDPOINT, location.search]);
  return (
    <div>
      <h1>CHAT</h1>
    </div>
  );
};

export default Chat;