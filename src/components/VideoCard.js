import React, { useEffect, useState } from 'react'
import {channelDetails1,channelDetails2} from "../utills/constant"
// import { json } from 'react-router-dom';

const VideoCard = (props) => {

    // console.log(props.info);

    // const[channelLogo, setChannelLogo]=useState(null);

    const { snippet, statistics } = props.info;
    const { channelTitle, thumbnails, title ,channelId} = snippet;

     const viewCount = Math.ceil((statistics.viewCount) / 1000)


    //  useEffect( ()=>{
    //        fetchChannel();
    //  },[])

    //  const fetchChannel= async ()=>{
           
    //      const data = await fetch(channelDetails1+channelId+channelDetails2);
    //      const json = await data.json();
    //      setChannelLogo(json)
    //  }
   
    //   if(channelLogo)
    //     {
    //         return <div> card is loading</div>
    //     }
       
    return (
        <div className=' w-80 cursor-pointer'>
            <img className=' rounded-xl' src={thumbnails.high.url} alt='thumnail' />

            <div className='flex flex-row'> 
                 {/* <img  className = 'w-12 h-12 rounded-full'   src= { channelLogo.items[0].snippet.thumbnails.medium.url} alt='channel'/> */}

                <ul>
                    <li className='font-semibold'> {title}</li>
                    <li className=' font-normal '> {channelTitle}</li>
                    <li className=' font-mono'>{viewCount}k views </li>
                </ul>
            </div>

        </div>
    )
}

export default VideoCard