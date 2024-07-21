import React, { useEffect, useState } from 'react'
import Chat from './Chat'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utills/ChatSlice';
import { generaterandomname ,makerandommessage} from '../utills/helper';
import { LIVE_CHAT_COUNT } from '../utills/constant';

const ChatContainer = () => {
     
    // const [liveChat,setLiveChat] = useState([]);

     const dispatch = useDispatch();
     //subscribing to the store 
     const chatMessage = useSelector((store)=>store.chat.messages);

     
      useEffect(()=>{
            const timer =  setInterval(() => {
                
                // fetchChat();
                // console.log("Api polling ");
                 dispatch(addMessage({
                   name:generaterandomname(),
                   message: makerandommessage(20)+" the message 🚀",
                 }))

            },2000);  
            
            return()=>clearInterval(timer);
      },[])
   

      // const fetchChat= async ()=>{
      //     const data = await fetch();
      //     const json = await data.json();
      //      setLiveChat(json);
      // }


  return (
    <div className=' overflow-y-scroll  h-[370px] flex flex-col-reverse  '>
           
           {
             chatMessage.map((c,index)=><Chat name={c.name} message={c.message} key={index}/> )
           } 

    </div>
  )
}

export default ChatContainer