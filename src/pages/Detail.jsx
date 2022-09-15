import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { IoArrowBack } from "react-icons/io5"
import { Comment, Post } from "../components"
import ModalWrapper from "../components/modals/ModalWrapper"

const Detail = () => {
  const navigate = useNavigate()
  const [isShowing, setShowing] = useState(false)
  const [comments, setComments] = useState([
    {
      text: "Sweet! I'm getting sick of all the pointless hate! Freaking amazing! ✨😎✨",
      mediaList: [],
      time: "39 minutes ago",
      author: {
        src: require("../img/Gura.jpg"),
        name: "Gawr Gura",
      },
      replies: 32,
      showReplies: false,
      replyList: [
        {
          text: "Great, tmr",
          mediaList: [],
          time: "20 minutes ago",
          author: {
            src: require("../img/Marine.jpg"),
            name: "Houshou Marine",
          },
        },
        {
          text: "Hmu Hmu, i don't want to leave you",
          mediaList: [],
          time: "10 minutes ago",
          author: {
            src: require("../img/Amelia.jpg"),
            name: "Amelia",
          },
        },
      ],
    },
    {
      text: "You'are so freaking beautiful honey!",
      mediaList: [],
      time: "58 minutes ago",
      author: {
        src: require("../img/Fubuki.jpg"),
        name: "Fubuki",
      },
      replies: 0,
    },
  ])

  const triggerShowReplies = (index) => {
    const temp = [...comments]
    temp[index].showReplies = !temp[index].showReplies
    setComments(temp)
  }

  return (
    <div className='bg-white rounded-xl'>
      {/* Header */}
      <header className='h-10 flex items-center p-4 pt-[38px]'>
        <div
          className='button-hover rounded-full p-2 text-xl'
          data-tip='Go back'
          onClick={() => navigate(-1)}
        >
          <IoArrowBack />
        </div>

        <h2 className='font-bold text-lg ml-4'>Detail</h2>
      </header>

      {/* Detail */}
      <Post type='detail' />

      {/* Comment list */}
      <div className='-mt-1 mx-6 pb-6 space-y-2'>
        {comments.map((comment, index) => (
          <div key={index}>
            <Comment
              text={comment.text}
              mediaList={comment.mediaList}
              time={comment.time}
              author={comment.author}
              replies={comment.replies}
              triggerShowReplies={() => triggerShowReplies(index)}
              showReplies={comment.showReplies}
            />

            {comment.showReplies &&
              comment.replyList.map((reply, index) => (
                <div key={index} className='ml-[56px] mb-1'>
                  <Comment
                    smallAvatar
                    text={reply.text}
                    mediaList={reply.mediaList}
                    time={reply.time}
                    author={reply.author}
                  />
                </div>
              ))}
          </div>
        ))}
      </div>

      <ModalWrapper
        center
        isShowing={isShowing}
        setShowing={setShowing}
      ></ModalWrapper>
    </div>
  )
}

export default Detail
