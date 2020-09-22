import React, { useState} from 'react';
import useInterval from '@use-it/interval';
import { motion } from "framer-motion";
import './App.css';

const messages = [
  { text: 'I need an awesome React/Node Developer. Do your know one?' },
  { text: 'Hold on. Let me look around!' },
  { text: 'Hurry! I really need to get a team together?' },
  { text: 'IDK. Just Google it?' },
  { text: 'Oh! But all developers live far away. I need one in San Diego!' },
  { text: 'Nice! I found the perfect one!' },
  { text: 'Send me the link?!' },
  { text: 'mikemink.com!' },
];

export default function App() {
  const [messageToShow, setMessageToShow] = useState(0);

  useInterval(() => {
    setMessageToShow(messageToShow => messageToShow + 1);
  }, 2000)


  return (
    <div className="app">
      <div className="walkthrough">
        {messages.map((message, index) => {
          const evenNum = index % 2 === 0;

          // Step 1 = logicsd
          // Step 3 = show typing indicator
          if (messageToShow + 1 === index) {
            return <TypingDots key={index} even={evenNum} />
          }
          
          // Step 2 = show message
          // Logic for turning a unused index into a blank div
          if (index > messageToShow) return <div key={index} />
          return <Message key={index} message={message} />;
        })}
      </div>
    </div>
  );
}

function TypingDots({even}) {
  return (
    <motion.div
      className={`typing ${even ? 'is-right' : 'is-left'}`}
    >
      <div className="dots">
        <div />
        <div />
        <div />
      </div>
    </motion.div>
  );
}

function Message({ message }) {
  return (
    <motion.div 
      className="message" 
      initial={{scale: 0.5}} 
      animate={{scale: 1}}
    >
      <div className="avatar">
        <span role="img" aria-label="nerd_face">🤓</span>
      </div> 
      <div className="text">{message.text}</div> 
      <div className="avatar">
        <span role="img" aria-label="sunglasses">😎</span>
      </div> 
    </motion.div>
  )
}