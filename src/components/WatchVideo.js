
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toOffMenu } from '../utills/SideBarSlice';
import { useSearchParams } from 'react-router-dom';

const WatchVideo = () => {

    const[searchpram] = useSearchParams();
    console.log(searchpram.get("v"));
  
    const dispatch= useDispatch();

    useEffect(()=>{
        dispatch(toOffMenu())
    },[]);

  return (
    <div>
            
            <iframe className=' rounded-xl  ml-16 mt-10 ' width="640" height="360" src={"https://www.youtube.com/embed/" + searchpram.get("v")    +"?si=jIFOkQ3JUygr_gsH"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    </div>
  )
}

export default WatchVideo