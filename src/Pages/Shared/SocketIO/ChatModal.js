import React from 'react';
import Message from './Message';

const ChatModal = () => {
    return (
        <div>
            <input type="checkbox" id="chat-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative text-black bg-white  w-10/12 max-w-5xl">
                    <label
                        htmlFor="chat-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <Message />
                </div>
            </div>
        </div>
    );
};

export default ChatModal;