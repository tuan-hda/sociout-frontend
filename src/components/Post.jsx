import React, { useState } from "react"
import { BiSad } from "react-icons/bi"
import { RiUserUnfollowLine } from "react-icons/ri"
import Person from "./Person"
import { MdBlock, MdReport } from "react-icons/md"
import ContentContainer from "./ContentContainer"
import MediaList from "./MediaList"
import { useNavigate } from "react-router-dom"
import {
  AiOutlineComment,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineRetweet,
} from "react-icons/ai"
import classNames from "classnames"
import copyToClipboard from "../utils/copyToClipboard"
import TextEditor from "./TextEditor"
import { FiShare } from "react-icons/fi"
import ReactTooltip from "react-tooltip"
import { useEffect } from "react"

const owner = {
  id: "houshoumarine",
  time: "2 hours ago",
  name: "宝鐘マリン🏴‍☠️＠新曲聞いてください@ホロライブ3期生",
}

const Post = ({ type }) => {
  const [like, setLike] = useState(false)
  const [content, setContent] = useState("")
  const [mediaList, setMediaList] = useState([])
  const [bounceClassName, setBounce] = useState("")
  const [likes, setLikes] = useState(300)

  const navigate = useNavigate()
  const comments = 24,
    shares = 0

  let isMoved

  const onLikeClick = () => {
    if (like) {
      setLike(false)
      setLikes(likes - 1)
    } else {
      setLike(true)
      setLikes(likes + 1)
    }
  }

  const contentSample =
    "Was great meeting up with Anna Ferguson and Dave Bishop at the breakfast talk! https://www.youtube.com/watch?v=SfMtIUga4u0 @mori https://www.facebook.com"

  useEffect(() => {
    if (like) {
      setBounce("bounce-animation")
    } else {
      setBounce("")
    }
  }, [like])

  return (
    <div
      className={classNames([
        "bg-white p-6 rounded-xl transition text-normalText -z-10",
        type !== "detail" &&
          "cursor-pointer hover:bg-lightBackground hover:bg-opacity-40",
      ])}
      onMouseDown={() => (isMoved = false)}
      onMouseMove={() => (isMoved = true)}
      onMouseUp={(e) => {
        if (type === "detail") {
          return
        }
        if (e.button === 0) {
          if (!isMoved) navigate("/@moricalliope/status/12345")
        }
      }}
    >
      {/* Header */}
      <header className="block">
        <Person
          src={require("../img/Marine.jpg")}
          to="/@moricalliope/status/12345"
          name={owner.name}
          time={owner.time}
          id={owner.id}
          hideAddBtn
          underline
          underlineId
          menuList={[
            [
              <p className="flex items-center">
                <BiSad className="text-lg mr-3" /> Not interested
              </p>,
              "",
            ],
            [
              <p className="flex items-center">
                <RiUserUnfollowLine className="text-lg mr-3" /> Unfollow @
                {owner.id}
              </p>,
            ],
            [
              <p className="flex items-center">
                <MdBlock className="text-lg mr-3" /> Block @{owner.id}
              </p>,
            ],
            [
              <p className="flex items-center">
                <MdReport className="text-lg mr-3" /> Report @{owner.id}
              </p>,
              "text-errorColor",
            ],
          ]}
        />
      </header>

      {/* Content */}
      <div className="text-textColor">
        {/* Text */}
        <ContentContainer className="mt-4">{contentSample}</ContentContainer>

        {/* Media list */}
        <div onMouseUp={(e) => e.stopPropagation()}>
          <MediaList
            stopPropagation
            mediaList={[
              {
                src: "https://pbs.twimg.com/media/FbE53SEacAEv2Zh?format=jpg&name=large",
                type: "image",
                name: "Mori Calliope",
              },
            ]}
          />
        </div>
      </div>

      {/* Buttons */}
      {type !== "detail" && (
        <div className="mt-3 text-2xl text-textColor flex items-center justify-between -mx-1">
          <div className="flex items-center gap-2">
            {/* Like button */}
            <div
              className="flex items-center group w-20"
              onClick={() => onLikeClick()}
              onMouseUp={(e) => e.stopPropagation()}
            >
              <button
                className={classNames([
                  "transition-all rounded-full p-2 group-hover:bg-opacity-[15%] group-hover:bg-loveColor group-hover:text-loveColor",
                  like && "text-loveColor",
                ])}
                data-tip={like ? "Unlike" : "Like"}
              >
                <div className={classNames([bounceClassName])}>
                  {like ? <AiFillHeart /> : <AiOutlineHeart />}
                </div>
              </button>

              {/* Count */}
              <div className="text-xs h-4 overflow-hidden cursor-pointer">
                {likes !== 0 && (
                  <p
                    className={classNames([
                      "ml-1 group-hover:text-loveColor transition ease-in-out duration-300",
                      like ? "text-loveColor -translate-y-4" : "text-likeColor",
                    ])}
                  >
                    {likes}
                  </p>
                )}

                <p
                  className={classNames([
                    "ml-1 transition ease-in-out text-loveColor duration-300",
                    like && "-translate-y-4",
                  ])}
                >
                  {likes + 1}
                </p>
              </div>
            </div>

            {[
              [
                <AiOutlineComment />,
                "group-hover:bg-linkColor group-hover:text-linkColor",
                "Comment",
                "group-hover:text-linkColor",
                comments,
                (e) => e.stopPropagation(),
              ],
              [
                <AiOutlineRetweet />,
                "group-hover:bg-greenColor group-hover:text-greenColor",
                "Share",
                "group-hover:text-greenColor",
                shares,
                (e) => e.stopPropagation(),
              ],
            ].map(
              (
                [icon, className, dataTip, numberClassName, amount, onMouseUp],
                index
              ) => (
                <div
                  className="flex items-center group w-20 cursor-pointer"
                  key={index}
                  onMouseUp={onMouseUp}
                >
                  <button
                    className={classNames([
                      className,
                      "transition-all rounded-full p-2 group-hover:bg-opacity-[15%]",
                    ])}
                    data-tip={dataTip}
                  >
                    {icon}
                  </button>

                  {/* Number */}
                  {amount !== 0 && (
                    <span
                      className={classNames([
                        "text-xs text-likeColor ml-1",
                        numberClassName,
                      ])}
                    >
                      {amount}
                    </span>
                  )}
                </div>
              )
            )}
          </div>

          {/* Button copy link */}
          <button
            className="transition-all rounded-full p-[9px] hover:bg-opacity-[15%] hover:bg-orangeColor hover:text-orangeColor"
            data-tip="Copy link to this post"
            onMouseUp={(e) => e.stopPropagation()}
            onClick={() =>
              copyToClipboard(
                window.location.href + "@moricalliope/status/12345"
              )
            }
          >
            <FiShare className="text-[22px]" />
          </button>
        </div>
      )}

      {/* Buttons, Count - detail */}
      {type === "detail" && (
        <div className="mt-5">
          {/* Count */}
          <div className="flex items-center gap-4">
            {likes !== 0 && (
              <button to="#" className="hover:underline">
                <span className="font-semibold">{likes}</span> Likes
              </button>
            )}

            {comments !== 0 && (
              <button to="#" className="hover:underline">
                <span className="font-semibold">{comments}</span> Comments
              </button>
            )}

            {shares !== 0 && (
              <button to="#" className="hover:underline">
                <span className="font-semibold">{shares}</span> Shares
              </button>
            )}
          </div>

          {/* Divider */}
          <div className="border-t-[1px] border-[#f1f1f1] mt-4" />

          {/* Buttons */}
          <div className="mt-2 flex justify-around">
            <button
              onClick={() => onLikeClick()}
              className={classNames([
                "transition-all rounded-lg p-2 hover:bg-opacity-[15%] hover:bg-loveColor hover:text-loveColor text-2xl text-gray-600 flex-1 flex justify-center",
                like && "text-loveColor",
              ])}
              data-tip={like ? "Unlike" : "Like"}
            >
              <div className={classNames([bounceClassName])}>
                {like ? <AiFillHeart /> : <AiOutlineHeart />}
              </div>
            </button>

            {[
              [
                <AiOutlineComment />,
                "Comment",
                "hover:bg-linkColor hover:text-linkColor",
              ],
              [
                <AiOutlineRetweet />,
                "Share",
                "hover:bg-greenColor hover:text-greenColor",
              ],
              [
                <FiShare />,
                "Copy link to this post",
                "hover:bg-orangeColor hover:text-orangeColor text-[20px]",
              ],
            ].map(([icon, dataTip, className, onClick], index) => (
              <button
                key={index}
                className={classNames([
                  "transition-all rounded-lg p-2 hover:bg-opacity-[15%] text-2xl text-gray-600 flex-1 flex justify-center items-center",
                  className,
                ])}
                onClick={onClick}
                data-tip={dataTip}
              >
                {icon}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t-[1px] border-[#f1f1f1] mt-2 mb-5" />
        </div>
      )}

      {/* Comment section */}
      <div onMouseDown={(e) => e.stopPropagation()} className="mt-2">
        <TextEditor
          content={content}
          setContent={setContent}
          mediaList={mediaList}
          setMediaList={setMediaList}
          showMedia
          showPostBtn
          placeholder="Add a comment"
        />
      </div>

      <ReactTooltip delayShow={1000} />
    </div>
  )
}

export default Post
