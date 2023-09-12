import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import config from '../chatbot/config';
import MessageParser from '../chatbot/MessageParser';
import ActionProvider from '../chatbot/ActionProvider';
import { FadeIn } from 'react-anim-kit';

function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <div className='w-full bg-slae-400 h-[100vh] flex items-center justify-center'>
      <div>
        {isChatOpen && (
          <div
            style={{
              minWidth: '300px',
            }}
          >
            <FadeIn up by={300}>
              <Chatbot
                placeholderText='Type your answer here'
                headerText='Student Enrollment'
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
              />
            </FadeIn>
          </div>
        )}
        <button
          className='border-2 border-sky-500 p-2 rounded-md bg-sky-500 text-white hover:bg-sky-400 hover:border-sky-400'
          onClick={() => setIsChatOpen(!isChatOpen)}
        >
          Enroll Now!
        </button>
      </div>
    </div>
  );
}

export default Home;