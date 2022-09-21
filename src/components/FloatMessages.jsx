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
            "medium:block hidden fixed bottom-0 right-2 z-20 w-[440px] transition-all duration-300 ease-in-out bg-white rounded-xl",
            !showChat
              ? "max-h-0"
              : height - 48 > 540
              ? "max-h-[540px] h-[540px]"
              : "max-h-[calc(100vh-48px)] h-[540px]",
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
