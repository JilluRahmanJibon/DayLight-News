import React, { useState } from 'react';

const Conversation = ({ writer, currentUser, online, setConversationProfile }) => {
    const [userData, setUserData] = useState(null)



    return (
        <>
            <div className="follower conversation">
                <div onClick={() => setConversationProfile(writer)}>
                    {online && <div className="online-dot"></div>}
                    <img
                        src={writer.image}

                        alt="Profile"
                        className="followerImage"
                        style={{ width: "50px", height: "50px" }}
                    />
                    <div className="name" style={{ fontSize: '0.8rem' }}>
                        <span>{userData?.firstname} {userData?.lastname}</span>
                        <span style={{ color: online ? "#51e200" : "" }}>{online ? "Online" : "Offline"}</span>
                    </div>
                </div>
            </div>
            <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
        </>
    );
};

export default Conversation;