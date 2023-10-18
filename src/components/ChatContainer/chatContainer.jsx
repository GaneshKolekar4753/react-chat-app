
import "./chatContainer.css"
import video from "../../img/video.png";
import more from "../../img/more.png";
import Message from "../Messages/Messages";
import InputChat from "../InputChat/inputchat";
import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
function ChatContainer(){
    const {data}=useContext(ChatContext);
    return(
        <>
        <div className="chatContainer">
            <div className="chatInfo">
                <span>{data.user?.displayName}</span>
                <div className="chatIcons">
                    <img src={video} alt="videoBtn"/>
                    <img src={more} alt="more"/>
                </div>
            </div>
            <Message/>
            <InputChat/>
        </div>
        </>
    )
}

export default ChatContainer;