import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import ChatBox from '../../Components/SocketIO/ChatBox/ChatBox';
import Conversation from '../../Components/SocketIO/Conversation/Conversation';
import LogoSearch from '../../Components/SocketIO/LogoSearch/LogoSearch';
import "./Chat.css";

import { io } from "socket.io-client";
import { userChats } from '../../api/ChatRequests';

const Chat = () => {
    const socket = useRef();
    const user = useSelector((state) => state);
    console.log(user)
    const [chats, setChats] = useState([]);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [sendMessage, setSendMessage] = useState(null);
    const [receivedMessage, setReceivedMessage] = useState(null);
    const [conversationProfile, setConversationProfile] = useState(null);
    // Get the chat in chat section
    useEffect(() => {
        const getChats = async () => {
            try {
                const { data } = await userChats(user._id);
                setChats(data);
            } catch (error) {
                console.log(error);
            }
        };
        getChats();
    }, [user._id]);

    // Connect to Socket.io
    useEffect(() => {
        socket.current = io("ws://localhost:8800");
        socket.current.emit("new-user-add", user._id);
        socket.current.on("get-users", (users) => {
            setOnlineUsers(users);
        });
    }, [user]);

    // Send Message to socket server
    useEffect(() => {
        if (sendMessage !== null) {
            socket.current.emit("send-message", sendMessage);
        }
    }, [sendMessage]);


    // Get the message from socket server
    useEffect(() => {
        socket.current.on("recieve-message", (data) => {
            console.log(data)
            setReceivedMessage(data);
        }

        );
    }, []);

    const checkOnlineStatus = (chat) => {
        const chatMember = chat.members.find((member) => member !== user._id);
        const online = onlineUsers.find((user) => user.userId === chatMember);
        return online ? true : false;
    };


    const [writers, setWriters] = useState([]);
    //all writers
    useEffect(() => {
        fetch("http://localhost:5000/writers")
            .then(res => res.json())
            .then(data => setWriters(data))
    }, [])
    console.log(writers)

    return (
        <div className="Chat">
            {/* Left Side */}
            <div className="Left-side-chat">
                <LogoSearch />
                <div className="Chat-container">
                    <h2>Chats</h2>
                    <div className="Chat-list">
                        {/* {
                        writers.map(writer => (
                            <div >
<img src={writer.image} alt="" />
                        </div>))
                    } */}
                        {writers.map((writer) => (
                            <div
                                onClick={() => {
                                    setCurrentChat(writer);
                                }}
                            >
                                <Conversation
                                    setConversationProfile={setConversationProfile}
                                    writer={writer}
                                // currentUser={user?._id}
                                // online={checkOnlineStatus(writer)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Side */}

            <div className="Right-side-chat">
                <ChatBox
                    conversationProfile={conversationProfile}
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