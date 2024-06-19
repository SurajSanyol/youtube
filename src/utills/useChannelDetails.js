import { useState, useEffect } from "react";
import { channelDetails1,channelDetails2 } from "./constant";

const useChannelDetails = (channelId) => {
    const [channelLogo, setChannelLogo] = useState(null);


    useEffect(() => {
        fetchChannel();
    }, [channelId])

    const fetchChannel = async () => {

        const data = await fetch(channelDetails1 + channelId + channelDetails2);
        const json = await data.json();
        setChannelLogo(json?.items[0]?.snippet?.thumbnails);
    }
    return channelLogo;
}

export default useChannelDetails;