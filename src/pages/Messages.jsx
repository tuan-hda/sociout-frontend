import classNames from "classnames"
import React from "react"
import { useRef } from "react"
import { useState } from "react"
import { AiFillDelete, AiOutlineSend } from "react-icons/ai"
import { BiMessageSquareAdd } from "react-icons/bi"
import { FiSearch } from "react-icons/fi"
import {
  IoMdInformationCircle,
  IoMdInformationCircleOutline,
} from "react-icons/io"
import { IoClose } from "react-icons/io5"
import { MdOutlineImage } from "react-icons/md"
import { Person } from "../components"
import ConfirmModal from "../components/modals/ConfirmModal"
import ModalWrapper from "../components/modals/ModalWrapper"

const data = [
  {
    src: require("../img/Makima.jpg"),
    name: "Makima",
    id: "watsonameliaEN",
    latestMsg: "T la thang ben trai",
    createdAt: "1/9/2022 13:54 PM",
    updatedAt: "22 mins",
  },
  {
    src: require("../img/Mori.jpg"),
    name: "Mori Calliope💀holoEN",
    id: "watsonameliaEN",
    latestMsg: "T la thang ben phai",
    createdAt: "1/9/2022 13:54 PM",
    updatedAt: "22 mins",
  },
  {
    src: require("../img/Marine.jpg"),
    name: "宝鐘マリン🏴‍☠️＠新曲聞いてください@ホロライブ3期生",
    id: "watsonameliaEN",
    latestMsg: "T la thang o giua may A A  As fawejfka wjekfj",
    createdAt: "1/9/2022 13:54 PM",
    updatedAt: "22 mins",
  },
  {
    src: require("../img/Gura.jpg"),
    name: "Gawr Gura",
    id: "watsonameliaEN",
    latestMsg: "A Hoang dep trai",
    createdAt: "1/9/2022 13:54 PM",
    updatedAt: "22 mins",
  },
  {
    src: require("../img/Yagoo.jpg"),
    name: "YAGOO / Motoaki Tanigo",
    id: "watsonameliaEN",
    latestMsg: "ABCD",
    createdAt: "1/9/2022 13:54 PM",
    updatedAt: "1 day",
  },
  {
    src: require("../img/Amelia.jpg"),
    name: "Watson Amelia🔎holoEN",
    id: "watsonameliaEN",
    latestMsg: "DXC",
    updatedAt: "12 hours",
  },
  {
    src: require("../img/Makima.jpg"),
    name: "Makima",
    id: "watsonameliaEN",
    latestMsg: "T la thang ben trai",
    updatedAt: "22 mins",
  },
  {
    src: require("../img/Mori.jpg"),
    name: "Mori Calliope💀holoEN",
    id: "watsonameliaEN",
    latestMsg: "T la thang ben phai",
    updatedAt: "22 mins",
  },
  {
    src: require("../img/Marine.jpg"),
    name: "宝鐘マリン🏴‍☠️＠新曲聞いてください@ホロライブ3期生",
    id: "watsonameliaEN",
    latestMsg: "T la thang o giua may A A  As fawejfka wjekfj",
    updatedAt: "22 mins",
  },
  {
    src: require("../img/Gura.jpg"),
    name: "Gawr Gura",
    id: "watsonameliaEN",
    latestMsg: "A Hoang dep trai",
    updatedAt: "22 mins",
  },
  {
    src: require("../img/Yagoo.jpg"),
    name: "YAGOO / Motoaki Tanigo",
    id: "watsonameliaEN",
    latestMsg: "ABCD",
    updatedAt: "1 day",
  },
  {
    src: require("../img/Amelia.jpg"),
    name: "Watson Amelia🔎holoEN",
    id: "watsonameliaEN",
    latestMsg: "DXC",
    updatedAt: "12 hours",
  },
]

const messageList = [
  {
    id: "1",
    message: "Hello",
    authorId: "1",
    authorName: "Amelia",
    createdAt: "12:23 PM",
    mediaList: [],
  },
  {
    id: "2",
    message: "Glad to meet you",
    authorId: "2",
    authorName: "Tuan",
    createdAt: "12:24 PM",
    mediaList: [],
  },
  {
    id: "3",
    message: "ABC",
    authorId: "1",
    authorName: "Amelia",
    createdAt: "12:25 PM",
    mediaList: [],
  },
  {
    id: "4",
    message: "IDK",
    authorId: "2",
    authorName: "Tuan",
    createdAt: "12:26 PM",
    mediaList: [],
  },
  {
    id: "1",
    message: "Hello",
    authorId: "1",
    authorName: "Amelia",
    createdAt: "12:23 PM",
    mediaList: [],
  },
  {
    id: "2",
    message: "Glad to meet you",
    authorId: "2",
    authorName: "Tuan",
    createdAt: "12:24 PM",
    mediaList: [],
  },
  {
    id: "3",
    message: "ABC",
    authorId: "1",
    authorName: "Amelia",
    createdAt: "12:25 PM",
    mediaList: [],
  },
  {
    id: "4",
    message: "IDK",
    authorId: "2",
    authorName: "Tuan",
    createdAt: "12:26 PM",
    mediaList: [],
  },
  {
    id: "1",
    message: "Hello",
    authorId: "1",
    authorName: "Amelia",
    createdAt: "12:23 PM",
    mediaList: [],
  },
  {
    id: "2",
    message:
      "Glad to meet you ab ab aba b ab aba ab ab ab abab aab a bba babababab babababa a ab ab",
    authorId: "2",
    authorName: "Tuan",
    createdAt: "12:24 PM",
    mediaList: [],
  },
  {
    id: "3",
    message:
      "ABC meet you ab ab aba b ab aba ab ab ab abab aab a bba babababab babababa a ab ab",
    authorId: "1",
    authorName: "Amelia",
    createdAt: "12:25 PM",
    mediaList: [],
  },
  {
    id: "4",
    message: "IDK",
    authorId: "2",
    authorName: "Tuan",
    createdAt: "12:26 PM",
    mediaList: [],
  },
  {
    id: "1",
    message: "Hello",
    authorId: "1",
    authorName: "Amelia",
    createdAt: "12:23 PM",
    mediaList: [],
  },
  {
    id: "2",
    message: "Glad to meet you",
    authorId: "2",
    authorName: "Tuan",
    createdAt: "12:24 PM",
    mediaList: [],
  },
  {
    id: "3",
    message: "ABC",
    authorId: "1",
    authorName: "Amelia",
    createdAt: "12:25 PM",
    mediaList: [],
  },
  {
    id: "4",
    message: "IDK",
    authorId: "2",
    authorName: "Tuan",
    createdAt: "12:26 PM",
    mediaList: [],
  },
  {
    id: "1",
    message: "Hello",
    authorId: "1",
    authorName: "Amelia",
    createdAt: "12:23 PM",
    mediaList: [],
  },
  {
    id: "2",
    message: "Glad to meet you",
    authorId: "2",
    authorName: "Tuan",
    createdAt: "12:24 PM",
    mediaList: [],
  },
  {
    id: "3",
    message: "ABC",
    authorId: "1",
    authorName: "Amelia",
    createdAt: "12:25 PM",
    mediaList: [],
  },
  {
    id: "4",
    message: "IDK",
    authorId: "2",
    authorName: "Tuan",
    createdAt: "12:26 PM",
    mediaList: [],
  },
  {
    id: "1",
    message: "Hello",
    authorId: "1",
    authorName: "Amelia",
    createdAt: "12:23 PM",
    mediaList: [],
  },
  {
    id: "2",
    message: "Glad to meet you",
    authorId: "2",
    authorName: "Tuan",
    createdAt: "12:24 PM",
    mediaList: [],
  },
  {
    id: "3",
    message: "ABC",
    authorId: "1",
    authorName: "Amelia",
    createdAt: "12:25 PM",
    mediaList: [],
  },
  {
    id: "4",
    message: "IDK",
    authorId: "2",
    authorName: "Tuan",
    createdAt: "12:26 PM",
    mediaList: [],
  },
  {
    id: "1",
    message: "Hello",
    authorId: "1",
    authorName: "Amelia",
    createdAt: "12:23 PM",
    mediaList: [],
  },
  {
    id: "2",
    message: "Glad to meet you",
    authorId: "2",
    authorName: "Tuan",
    createdAt: "12:24 PM",
    mediaList: [],
  },
  {
    id: "3",
    message: "ABC",
    authorId: "1",
    authorName: "Amelia",
    createdAt: "12:25 PM",
    mediaList: [],
  },
  {
    id: "4",
    message: "IDK",
    authorId: "2",
    authorName: "Tuan",
    createdAt: "12:26 PM",
    mediaList: [],
  },
  {
    id: "1",
    message: "Hello",
    authorId: "1",
    authorName: "Amelia",
    createdAt: "12:23 PM",
    mediaList: [],
  },
  {
    id: "2",
    message: "Glad to meet you",
    authorId: "2",
    authorName: "Tuan",
    createdAt: "12:24 PM",
    mediaList: [],
  },
  {
    id: "3",
    message: "ABC",
    authorId: "1",
    authorName: "Amelia",
    createdAt: "12:25 PM",
    mediaList: [],
  },
  {
    id: "4",
    message: "IDK",
    authorId: "2",
    authorName: "Tuan",
    createdAt: "12:26 PM",
    mediaList: [],
  },
]

const user = {
  id: "2",
}

// float    =>  Specify if this is a float chat box
const Messages = ({ float }) => {
  const [showSearch, setShowSearch] = useState(false)
  const [currChatRoom, setCurrChatRoom] = useState(0)
  const [showInformation, setShowInformation] = useState(false)
  const [showModalUndo, setShowModalUndo] = useState(false)
  const [showModalNewMsg, setShowModalNewMsg] = useState(false)
  const fileUploadRef = useRef()

  return (
    <div
      className={classNames([
        "flex justify-between",
        !float ? "gap-2" : "shadow-primary rounded-xl",
      ])}
      style={{
        height: !float ? window.innerHeight - 102 : 540,
      }}
    >
      {/* Chat room list */}
      <div
        className={classNames([
          "bg-white px-6 py-4",
          !float
            ? "medium:w-80 rounded-xl"
            : "border-[#ddd] border-r-[1px] rounded-[12px_0_0_12px]",
        ])}
      >
        {!showSearch ? (
          <div className='flex items-center justify-between h-8'>
            <h2
              className={classNames([
                "font-bold text-lg sticky top-0 bg-white py-2 hidden",
                !float && "medium:block",
              ])}
            >
              Chat
            </h2>

            <div
              className={classNames([
                "flex items-center gap-2 ml-2",
                !float && "medium:ml-0",
              ])}
            >
              {/* Search button */}
              <button
                className={classNames([
                  "button-hover rounded-full p-2 -mr-2 hidden",
                  !float && "medium:block",
                ])}
                onClick={() => setShowSearch(true)}
                data-tip='Search'
              >
                <FiSearch />
              </button>

              {/* New message button */}
              <button
                className='button-hover rounded-full p-2 -mr-2'
                data-tip='New message'
                onClick={() => setShowModalNewMsg(true)}
              >
                <BiMessageSquareAdd
                  className={classNames([
                    "text-xl",
                    !float && "medium:text-base",
                  ])}
                />
              </button>
            </div>
          </div>
        ) : (
          <div className='outline-2 outline-primaryColor focus-within:outline rounded-lg bg-mainBackground text-normalText flex items-center gap-2 p-1'>
            <FiSearch className='text-base ml-2' />
            <input
              type='text'
              placeholder='Search...'
              className='outline-0 border-0 -mr-2 bg-transparent w-[calc(100%-40px)]'
            />
            <button
              className='hover:bg-lightBackground rounded-full p-1'
              onClick={() => setShowSearch(false)}
            >
              <IoClose className='text-base' />
            </button>
          </div>
        )}

        {/* Map chat room list */}
        <div className='-mx-6 px-6 mt-4 overflow-auto h-[calc(100%-36px)]'>
          {data.map((chatRoom, index) => (
            <div
              className={classNames([
                "px-4 py-3 rounded-2xl -mx-4 cursor-pointer transition",
                index === currChatRoom
                  ? "bg-lightBackground bg-opacity-70 hover:bg-lightBackground"
                  : "hover:bg-mainBackground",
              ])}
              key={index}
              onClick={() => setCurrChatRoom(index)}
            >
              <Person
                hideAddBtn
                bigAvatar
                isChatRoom
                float={float}
                read={index % 2 === 0}
                latestMsg={chatRoom.latestMsg}
                updatedAt={chatRoom.updatedAt}
                name={chatRoom.name}
                src={chatRoom.src}
                id={chatRoom.id}
              />
            </div>
          ))}

          {data.length === 0 && (
            <div>
              <h4 className='text-normalText text-gray-500 font-medium'>
                There's no any conversation here
              </h4>
            </div>
          )}
        </div>
      </div>

      {/* Messages */}
      {!(currChatRoom === -1) ? (
        <div className='bg-white p-4 rounded-xl flex flex-col flex-1 relative'>
          {/* Chat room header (Name, Avatar) */}
          <header className='flex items-center justify-between w-full -mx-4 px-4 top-0 h-16 bg-white absolute backdrop-blur-lg bg-opacity-0 shadow-sm rounded-[12px_12px_0_0] overflow-hidden'>
            <div className='flex items-center'>
              <div className='border-[#eee] border-[1px] rounded-full'>
                <img
                  src={require("../img/Amelia.jpg")}
                  alt='Amelia Avatar'
                  className='rounded-full w-9 h-9'
                />
              </div>
              <h3 className='font-bold text-lg ml-2 flex-1 text-ellipsis overflow-hidden whitespace-nowrap'>
                Amelia Waston
              </h3>
            </div>

            {/* Information */}
            <button
              className='button-hover p-1 -mr-1 rounded-full'
              onClick={() => setShowInformation(!showInformation)}
            >
              {!showInformation ? (
                <IoMdInformationCircleOutline className='text-2xl' />
              ) : (
                <IoMdInformationCircle className='text-2xl text-primaryColor' />
              )}
            </button>
          </header>

          {/* Message list */}
          <div className='flex-1 flex flex-col gap-2 overflow-auto -mx-4 px-4'>
            {/* Holder */}
            <div className='min-h-[44px]' />

            {messageList.map((item, index) => {
              const {
                //id,
                authorId,
                //authorName,
                createdAt,
                message,
                //mediaList,
              } = item
              return (
                <div>
                  {/* Time mark */}
                  {index === 0 && (
                    <div className='w-full flex-wrap text-xs text-gray-600 my-1 text-center'>
                      {createdAt}
                    </div>
                  )}

                  <div
                    className={classNames([
                      "flex items-center group w-full gap-2",
                      authorId === user.id
                        ? "self-end flex-row-reverse"
                        : "self-start",
                    ])}
                  >
                    {/* Message */}
                    <div
                      key={index}
                      className={classNames([
                        "rounded-2xl w-fit py-2 px-4 text-normalText max-w-[75%] flex",
                        authorId === user.id
                          ? "bg-linkColor text-white"
                          : "bg-mainBackground text-textColor",
                      ])}
                      data-tip={createdAt}
                    >
                      {message}
                    </div>

                    {/* Undo message button */}
                    <button
                      className='p-[9px] rounded-full button-hover group-hover:opacity-100 group-hover:pointer-events-auto opacity-0 pointer-events-none'
                      data-tip='Undo message'
                      onClick={() => setShowModalUndo(true)}
                    >
                      <AiFillDelete className='text-gray-700' />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Message input */}
          <div className='flex items-center gap-2 text-normalText -mx-2 -mb-4 h-14'>
            {/* Media upload btn */}
            <button
              className='rounded-full button-hover p-2'
              onClick={() => fileUploadRef.current.click()}
            >
              <MdOutlineImage className='text-primaryColor text-xl' />
            </button>

            {/* Text input */}
            <input
              type='text'
              className='rounded-xl py-2 px-3 flex-1 bg-mainBackground outline-primaryColor'
              placeholder='Type message'
            />

            {/* Send btn */}
            <button className='rounded-full button-hover p-2'>
              <AiOutlineSend className='text-primaryColor text-xl' />
            </button>
          </div>
        </div>
      ) : (
        <div className='bg-white p-4 rounded-xl flex flex-col flex-1 items-center'>
          {/* Empty message state */}
          <img
            src={require("../img/empty_message_state.png")}
            className='object-contain max-w-xs'
            alt='Empty State'
          />

          <h4 className='font-bold text-lg'>There's no message here</h4>
          <p className='text-normalText text-textColor'>Start a new one now</p>
          <button className='bg-primaryColor hover:bg-hoverBackground1 transition p-2 rounded-lg text-white font-medium mt-1'>
            New message
          </button>
        </div>
      )}

      {/* File upload input */}
      <input type='file' className='hidden' ref={fileUploadRef} />

      {/* Confirm Undo Modal */}
      <ConfirmModal
        isShowing={showModalUndo}
        setShowing={setShowModalUndo}
        text='Are you sure you want to undo this message?'
      />

      {/* New message modal */}
      <ModalWrapper
        isShowing={showModalNewMsg}
        setShowing={setShowModalNewMsg}
        overlayBg='#676767'
        center
      >
        <form
          className='bg-white rounded-xl relative w-[400px] p-3 max-w-full overflow-auto'
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Close button */}
          <button
            className='button-hover p-2 rounded-full absolute right-2 top-2'
            onClick={() => setShowModalNewMsg(false)}
          >
            <IoClose className='text-lg' />
          </button>

          <h3 className='font-bold text-center text-lg'>New message</h3>

          {/* User id input and Message */}
          <div className='text-normalText text-textColor mt-2 space-y-2'>
            <input
              className='rounded-lg bg-mainBackground p-2 outline-lightBlue w-full'
              placeholder='Enter person id...'
            />

            <textarea
              className='rounded-lg bg-mainBackground p-2 outline-lightBlue w-full min-h-[96px] max-h-[calc(100vh-200px)]'
              placeholder='Enter message...'
            />
          </div>

          <button className='rounded-lg transition mt-2 p-2 text-normalText bg-primaryColor hover:bg-hoverBackground1 w-full text-center font-semibold text-white'>
            Send
          </button>
        </form>
      </ModalWrapper>
    </div>
  )
}

export default Messages
