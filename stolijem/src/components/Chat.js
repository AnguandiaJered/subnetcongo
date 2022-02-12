import React,{ Fragment, useState, useEffect } from 'react';
import ScrollToButton from 'react-scroll-to-bottom';
import './Chat.css';


const Chat = ({socket,username,password}) =>{
    const [currentMessage,setCurrentMessage] = useState("");
    const [messageList,setMessageList] = useState([]);

    const sendMessage = async () =>{
        if(currentMessage !==""){
            const messageData = {
                password: password,
                author: username,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
            };

            await socket.emit("send_message", messageData);
            setMessageList((list) => [...list, messageData])
            setCurrentMessage("");
        }
    };

    useEffect(() => {
        socket.on("receive_message", (data) =>{
           setMessageList((list) => [...list, data])
        })
    }, [socket]);

    return (
        <Fragment>
            <div className='chat mt-5'><br/><br/>
                <div className='container-fluid'>
                   <div className='chat-window'>
                        <div className='chat-header'>
                                <p>Live Chat</p>
                        </div>
                        <div className='chat-body'>
                            <ScrollToButton className="message-container">
                                {
                                    messageList.map((messageContent) =>{
                                        return (
                                            <div className='message' id={username === messageContent.author ? "you" : "other"}>
                                                <div>
                                                    <div className='message-content'>
                                                        <p>{messageContent.message}</p>
                                                    </div>
                                                    <div className='message-meta'>
                                                        <p id='time'>{messageContent.time}</p>
                                                        <p id='author'>{messageContent.author}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </ScrollToButton>
                        </div>
                        <div className='chat-footer'>
                            <textarea type="text" 
                            placeholder='hey...' 
                            value={currentMessage}
                            onChange={(event) =>{setCurrentMessage(event.target.value);
                            }}
                            onKeyPress={(event) =>{event.key === "Enter..." && sendMessage();
                            }}> </textarea>
                            <button onClick={sendMessage} className='btn btn-primary'>Send</button>
                        </div>
                   </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Chat;