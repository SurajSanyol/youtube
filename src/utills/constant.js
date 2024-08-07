


export const YOUTUBE_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=IN&key=' +  process.env.REACT_APP_YOUR_API_KEY;


export const channelDetails1 = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id="


export const channelDetails2 = "&key=" + process.env.REACT_APP_YOUR_API_KEY;

export const YOUTUBE_SUGG_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const VIDEO_COMMENT_API1 = 'https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId='


export const VIDEO_COMMENT_API2 = '&key=' +  process.env.REACT_APP_YOUR_API_KEY;

export const SEARCH_API1 = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q='

export const SEARCH_API2 = 'surfing&key=' + process.env.REACT_APP_YOUR_API_KEY;

export const LIVE_CHAT_COUNT = 50;

