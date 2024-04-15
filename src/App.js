import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';
import { Analytics } from "@vercel/analytics/react"
const projectID = '0bebd674-f110-485a-84e8-602290973df7';

const App = () => {
        if (!localStorage.getItem('username')) return <LoginForm / > ;

        return ( <
            ChatEngine height = "100vh"
            projectID = { projectID }
            userName = { localStorage.getItem('username') }
            userSecret = { localStorage.getItem('password') }
            renderChatFeed = {
                (chatAppProps) => < ChatFeed {...chatAppProps }
                />}
                onNewMessage = {
                    () => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()
                }
                />
            );
        };

        // infinite scroll, logout, more customizations...

        export default App;
