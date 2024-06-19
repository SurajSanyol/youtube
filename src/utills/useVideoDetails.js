import { useState ,useEffect} from "react";
import { YOUTUBE_API } from "./constant";


 const useVideoDetails = () => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchVideo();
    }, [])


    const fetchVideo = async () => {

        const data = await fetch(YOUTUBE_API);

        const json = await data.json();

        setVideos(json.items)
        // console.log(json.items);
    }
    return videos;
}


export default useVideoDetails;
