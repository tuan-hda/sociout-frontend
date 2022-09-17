import classNames from "classnames"
import React from "react"
import { useState } from "react"
import { FiSearch } from "react-icons/fi"
import { IoClose } from "react-icons/io5"
import { Person } from "../components"

const data = [
  {
    src: require("../img/Makima.jpg"),
    name: "Makima",
    id: "watsonameliaEN",
    latestMsg: "T la thang ben trai",
    createdAt: "22 mins",
  },
  {
    src: require("../img/Mori.jpg"),
    name: "Mori Calliope💀holoEN",
    id: "watsonameliaEN",
    latestMsg: "T la thang ben phai",
    createdAt: "22 mins",
  },
  {
    src: require("../img/Marine.jpg"),
    name: "宝鐘マリン🏴‍☠️＠新曲聞いてください@ホロライブ3期生",
    id: "watsonameliaEN",
    latestMsg: "T la thang o giua may A A  As fawejfka wjekfj",
    createdAt: "22 mins",
  },
  {
    src: require("../img/Gura.jpg"),
    name: "Gawr Gura",
    id: "watsonameliaEN",
    latestMsg: "A Hoang dep trai",
    createdAt: "22 mins",
  },
  {
    src: require("../img/Yagoo.jpg"),
    name: "YAGOO / Motoaki Tanigo",
    id: "watsonameliaEN",
    latestMsg: "ABCD",
    createdAt: "1 day",
  },
  {
    src: require("../img/Amelia.jpg"),
    name: "Watson Amelia🔎holoEN",
    id: "watsonameliaEN",
    latestMsg: "DXC",
    createdAt: "12 hours",
  },
  {
    src: require("../img/Makima.jpg"),
    name: "Makima",
    id: "watsonameliaEN",
    latestMsg: "T la thang ben trai",
    createdAt: "22 mins",
  },
  {
    src: require("../img/Mori.jpg"),
    name: "Mori Calliope💀holoEN",
    id: "watsonameliaEN",
    latestMsg: "T la thang ben phai",
    createdAt: "22 mins",
  },
  {
    src: require("../img/Marine.jpg"),
    name: "宝鐘マリン🏴‍☠️＠新曲聞いてください@ホロライブ3期生",
    id: "watsonameliaEN",
    latestMsg: "T la thang o giua may A A  As fawejfka wjekfj",
    createdAt: "22 mins",
  },
  {
    src: require("../img/Gura.jpg"),
    name: "Gawr Gura",
    id: "watsonameliaEN",
    latestMsg: "A Hoang dep trai",
    createdAt: "22 mins",
  },
  {
    src: require("../img/Yagoo.jpg"),
    name: "YAGOO / Motoaki Tanigo",
    id: "watsonameliaEN",
    latestMsg: "ABCD",
    createdAt: "1 day",
  },
  {
    src: require("../img/Amelia.jpg"),
    name: "Watson Amelia🔎holoEN",
    id: "watsonameliaEN",
    latestMsg: "DXC",
    createdAt: "12 hours",
  },
]

const Messages = () => {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <div
      className={classNames(["flex justify-between gap-2"])}
      style={{
        height: window.innerHeight - 100,
      }}
    >
      {/* Chat room list */}
      <div className='bg-white p-6 rounded-xl w-80'>
        {!showSearch ? (
          <div className='flex items-center justify-between -my-2'>
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
              className='outline-0 border-0 bg-transparent w-[calc(100%-40px)]'
            />
            <button
              className='hover:bg-white rounded-full p-1'
              onClick={() => setShowSearch(false)}
            >
              <IoClose className='text-base' />
            </button>
          </div>
        )}

        <div className='-mx-6 px-6 mt-4 overflow-auto h-[calc(100%-20px)]'>
          {data.map((chatRoom, index) => (
            <div
              className='button-hover px-4 py-3 rounded-2xl -mx-4'
              key={index}
            >
              <Person
                hideAddBtn
                bigAvatar
                isChatRoom
                read={index % 2 === 0}
                latestMsg={chatRoom.latestMsg}
                createdAt={chatRoom.createdAt}
                name={chatRoom.name}
                src={chatRoom.src}
                id={chatRoom.id}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className='bg-white p-6 rounded-xl flex-1'>a</div>
    </div>
  )
}

export default Messages
