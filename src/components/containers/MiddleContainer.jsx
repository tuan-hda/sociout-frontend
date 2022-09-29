import classNames from "classnames"
import React from "react"
import { useLocation } from "react-router-dom"

const MiddleContainer = (props) => {
  const location = useLocation()
  const pathname = location.pathname

  return (
    <div
      className={classNames([
        "flex-1 min-w-[100px]",
        !/^\/messages/.test(pathname) ? "max-w-main" : "max-w-full",
        props.mainContent && "min-h-[508px]",
      ])}
    >
      {props.children}
    </div>
  )
}

export default MiddleContainer
