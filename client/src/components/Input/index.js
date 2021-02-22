import React from 'react';

import "./index.css";

const Input = ({message, setMessage, sendMessage}) => {
  return (
    <form className='form'>
      <input 
        className='input'
        type='text'
        placeholder='메세지를 입력해주세요'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' ? sendMessage(e):null}
      />
      <button 
        className='sendButton' 
        onClick={(e) => sendMessage(e)}>
          보내기
      </button>
    </form>
  );
};

export default Input;