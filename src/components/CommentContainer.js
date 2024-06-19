import { FaCircleUser } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { VIDEO_COMMENT_API1, VIDEO_COMMENT_API2 } from '../utills/constant'
import Replies from "./Replies";

const Comment = ({ commentItem }) => {

    // console.log(commentItem);

    const { textOriginal, textDisplay, authorDisplayName, authorProfileImageUrl } = commentItem?.snippet?.topLevelComment?.snippet;

    // const { comments } = commentItem?.replies;

    return (
        <div className="flex py-2 w-[500px]">

            <img src={authorProfileImageUrl} className=' h-7 w-7 cursor-pointer rounded-full' alt="profile" />
            <div className="px-2">
                <h4 className=" font-medium">{authorDisplayName}</h4>
                <p className=" font-mono px-2">{textOriginal}</p>
                {/* {
                    comments && <div className=" p-2">
                        {
                            comments.map((c) => <Replies key={c.id} data={c} />)
                        }
                        </div>
                 } */}
                  {/* <div>
                       <Comment commentItem={commentItem?.} />
                  </div> */}

                   
            </div>

        </div>
    )
}



const CommentContainer = ({ Videoid }) => {

    const [commentList, setCommentList] = useState([]);

    useEffect(() => {
        getComment();
    }, [])


    const getComment = async () => {

        const data = await fetch(VIDEO_COMMENT_API1 + Videoid + VIDEO_COMMENT_API2);
        const json = await data.json();
        setCommentList(json?.items);
    }

    return (
        <div className="ml-16  w-[532px]">

            <h3 className="font-semibold">Comments :</h3>
            {

                commentList.map((comment) => <Comment key={comment.id} commentItem={comment} />)

            }

        </div>
    )
}

export default CommentContainer;