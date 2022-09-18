import classNames from "classnames"
import React from "react"
import { useState } from "react"
import { AiOutlineSend } from "react-icons/ai"
import { FiSearch } from "react-icons/fi"
import {
  IoMdInformationCircle,
  IoMdInformationCircleOutline,
} from "react-icons/io"
import { IoClose } from "react-icons/io5"
import { MdOutlineImage } from "react-icons/md"
import { Person } from "../components"

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
    message: "ABC",
    authorId: "12",
    authorName: "Amelia",
    updatedAt: "12:23 PM",
  },
]

const Messages = () => {
  const [showSearch, setShowSearch] = useState(false)
  const [currChatRoom, setCurrChatRoom] = useState(0)
  const [showInformation, setShowInformation] = useState(false)

  return (
    <div
      className='flex justify-between gap-2'
      style={{
        height: window.innerHeight - 100,
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
      <div className='bg-white py-4 px-4 rounded-xl flex-1 flex flex-col'>
        {/* Chat room header (Name, Avatar) */}
        <header className='flex items-center justify-between'>
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

          {/* Search */}
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
        <div className='flex-1'></div>

        {/* Message input */}
        <div className='flex items-center gap-2 text-normalText -mx-2'>
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
    </div>
  )
}

export default Messages
