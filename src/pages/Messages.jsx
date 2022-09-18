import classNames from "classnames"
import React from "react"
import { useState } from "react"
import { AiFillDelete, AiOutlineSend } from "react-icons/ai"
import { FiSearch } from "react-icons/fi"
import {
  IoMdInformationCircle,
  IoMdInformationCircleOutline,
} from "react-icons/io"
import { IoClose } from "react-icons/io5"
import { MdOutlineImage } from "react-icons/md"
import { Person } from "../components"
import ConfirmModal from "../components/modals/ConfirmModal"

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

const Messages = () => {
  const [showSearch, setShowSearch] = useState(false)
  const [currChatRoom, setCurrChatRoom] = useState(0)
  const [showInformation, setShowInformation] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <div
      className='flex justify-between gap-2'
      style={{
        height: window.innerHeight - 102,
      }}
    >
      {/* Chat room list */}
      <div className='bg-white px-6 py-4 rounded-xl w-80'>
        {!showSearch ? (
          <div className='flex items-center justify-between h-8'>
            <h2 className='font-bold text-lg sticky top-0 bg-white py-2'>
              Chat
            </h2>
            <button
              className='button-hover rounded-full p-2 -mr-2'
              onClick={() => setShowSearch(true)}
            >
              <FiSearch />
            </button>
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
                read={index % 2 === 0}
                latestMsg={chatRoom.latestMsg}
                updatedAt={chatRoom.updatedAt}
                name={chatRoom.name}
                src={chatRoom.src}
                id={chatRoom.id}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className='bg-white p-4 rounded-xl flex flex-col flex-1 relative'>
        {/* Chat room header (Name, Avatar) */}
        <header className='flex items-center justify-between w-full -mx-4 px-4 top-0 h-16 bg-white absolute backdrop-blur-lg bg-opacity-0 shadow-sm'>
          <div className='flex items-center'>
            <div className='border-[#eee] border-[1px] rounded-full'>
              <img
                src={require("../img/Amelia.jpg")}
                alt='Amelia Avatar'
                className='rounded-full w-9 h-9'
              />
            </div>
            <h3 className='font-bold text-lg ml-2'>Amelia Waston</h3>
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

          {messageList.map(
            (
              {
                id,
                authorId,
                authorName,
                createdAt,
                message,
                mediaList,
              } = message,
              index
            ) => {
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
                        "rounded-full w-fit py-2 px-3 text-normalText",
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
                      onClick={() => setShowModal(true)}
                    >
                      <AiFillDelete className='text-gray-700' />
                    </button>
                  </div>
                </div>
              )
            }
          )}
        </div>

        {/* Message input */}
        <div className='flex items-center gap-2 text-normalText -mx-2 -mb-4 h-14'>
          {/* Media upload btn */}
          <button className='rounded-full button-hover p-2'>
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

      {/* Confirm Modal */}
      <ConfirmModal
        isShowing={showModal}
        setShowing={setShowModal}
        text='Are you sure you want to undo this message?'
      />
    </div>
  )
}

export default Messages
