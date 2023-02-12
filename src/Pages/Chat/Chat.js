import React, { useContext, useState } from 'react';
import ChatBox from '../../Components/SocketIO/ChatBox/ChatBox';
import Conversation from '../../Components/SocketIO/Conversation/Conversation';
import LogoSearch from '../../Components/SocketIO/LogoSearch/LogoSearch';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import "./Chat.css";

const Chat = () => {

    const { user } = useContext(AuthContext);

    const [chats, setChats] = useState([]);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [sendMessage, setSendMessage] = useState(null);
    const [receivedMessage, setReceivedMessage] = useState(null);

    const checkOnlineStatus = (chat) => {
        const chatMember = chat.members.find((member) => member !== user._id);
        const online = onlineUsers.find((user) => user.userId === chatMember);
        return online ? true : false;
    };

    return (
        <div className="Chat">
            {/* Left Side */}
            <div className="Left-side-chat">
                <LogoSearch />
                <div className="Chat-container">
                    <h2>Chats</h2>
                    <div className="Chat-list">
                        {chats.map((chat) => (
                            <div
                                onClick={() => {
                                    setCurrentChat(chat);
                                }}
                            >
                                <Conversation
                                    data={chat}
                                    currentUser={user._id}
                                    online={checkOnlineStatus(chat)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Side */}

            <div className="Right-side-chat">
                <ChatBox
                    chat={currentChat}
                    currentUser={user._id}
                    setSendMessage={setSendMessage}
                    receivedMessage={receivedMessage}
                />
            </div>
        </div>
    );
};

export default Chat;