import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import classNames from "classnames"
import { BiChevronUp } from "react-icons/bi"
import { Messages } from "../pages"
import useWindowSize from "../utils/useWindowSize"

const FloatMessages = () => {
  const location = useLocation()
  const [showChat, setShowChat] = useState(false)

  // Observe window's height
  const [, height] = useWindowSize()

  return (
    <div>
      {!/^\/messages/.test(location.pathname) && (
        <div
          className={classNames([
            "medium:block hidden fixed right-2 z-20 w-[440px] transition-all duration-500 ease-in-out bg-white rounded-xl max-h-[calc(100vh-48px)] h-[540px]",
            showChat
              ? "bottom-0"
              : height - 48 > 540
              ? "-bottom-[540px]"
              : "-bottom-[calc(100vh-48px)]",
          ])}
        >
          {/* Chat header */}
          <button
            className='button-hover py-2 px-4 rounded-xl bg-white shadow-primary flex items-center justify-between gap-2 w-[200px] absolute -top-11 right-0'
            onClick={() => setShowChat(!showChat)}
          >
            <h3 className='font-bold'>
              {!showChat ? "Show messages" : "Hide messages"}
            </h3>

            {/* Show chat button */}
            <BiChevronUp
              className={classNames([
                "text-xl transition",
                showChat && "rotate-180",
              ])}
            />
          </button>

          {/* Chat */}
          <div
            className={classNames([
              "transition duration-300 h-full flex items-end",
              !showChat ? "pointer-events-none" : "pointer-events-auto",
            ])}
          >
            <Messages float />
          </div>
        </div>
      )}
    </div>
  )
}

export default FloatMessages
