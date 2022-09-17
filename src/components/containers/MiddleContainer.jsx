import classNames from "classnames"
import React from "react"
import { useLocation } from "react-router-dom"

const MiddleContainer = ({ children }) => {
  const location = useLocation()
  const pathname = location.pathname
  const check = !/^\/messages/.test(pathname)
  console.log(
    "🚀 ~ file: MiddleContainer.jsx ~ line 9 ~ MiddleContainer ~ check",
    check
  )

  return (
    <div
      className={classNames([
        "flex-1 min-w-[100px] z-0",
        !/^\/messages/.test(pathname) ? "max-w-main" : "max-w-full",
      ])}
    >
      {children}
    </div>
  )
}

export default MiddleContainer
