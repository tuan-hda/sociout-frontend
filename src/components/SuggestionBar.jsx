import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Person } from "./index"
import { useEffect } from "react"

const people = [
  {
    src: require("../img/Makima.jpg"),
    name: "Makima",
    id: "makima",
  },
  {
    src: require("../img/Mori.jpg"),
    name: "Mori CalliopeðholoEN",
    id: "moricalliope",
  },
  {
    src: require("../img/Marine.jpg"),
    name: "å®éããªã³ð´ââ ï¸ï¼ æ°æ²èãã¦ãã ãã@ãã­ã©ã¤ã3æç",
    id: "houshoumarine",
  },
  {
    src: require("../img/Gura.jpg"),
    name: "Gawr Gura",
    id: "gawrgura",
  },
  {
    src: require("../img/Yagoo.jpg"),
    name: "YAGOO / Motoaki Tanigo",
    id: "tanigox",
  },
  {
    src: require("../img/Amelia.jpg"),
    name: "Watson AmeliaðholoEN",
    id: "watsonameliaEN",
  },
]

const SuggestionBar = () => {
  const [showAuthorInfo, setShowAuthor] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (/^\/@[\d\w_]+\/status\/[\d]+/.test(location.pathname)) {
      setShowAuthor(true)
    } else {
      setShowAuthor(false)
    }
  }, [location])

  return (
    <div className='sticky top-[84px] mt-5'>
      {/* Author info */}
      {showAuthorInfo && (
        <div className='bg-white rounded-xl p-6 mb-4'>
          <Person
            name={people[2].name}
            src={people[2].src}
            id={people[2].id}
            bio='ãã­ã©ã¤ããã¡ã³ã¿ã¸ã¼æå±/ããã¡ã³ãã¼ã ãå®éã®ä¸å³/ãçæ¾éã¿ã°ã#ããªã³èªæµ·è¨/ãåãæãåç»ã¿ã°ã#ãããããªã³/ããã¡ã³ã¢ã¼ãã#ããªã³ã®ãå®/ãããããð @AkasaAi /ãæããçµµãhttp://pixiv.net/users/43505343'
            hideAddBtn
            leftAlignBio
            underlineId
            underline
            clickableId
          />
        </div>
      )}

      <div className='bg-white rounded-xl p-6'>
        <h3 className='text-lg font-bold'>Suggestions for you</h3>

        {/* Suggestion list */}
        <ul className='mt-4'>
          {people.map((person, index) => (
            <li key={index} className='-mx-3 p-3 button-hover rounded-2xl'>
              <Link to={"/@" + person.id}>
                <Person
                  src={person.src}
                  name={person.name}
                  id={person.id}
                  underlineId
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className='text-primaryColor font-medium text-center w-full mt-1'>
          <Link
            to='/connect-people'
            className='hover:font-semibold text-normalText'
          >
            Show more
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SuggestionBar
