import "../styles/chars-frame.css"
import HomeSVG from "../assets/home.svg"
import { useState } from "react"

export default function CharsFrame() {
  
  const [show, setShow] = useState(false)

  const addCharacter = () => {

  }

  return (
    <>
      <div id="chars-frame">
        <button id="home" className="center">
          <img src={HomeSVG} alt="home">
          </img>
        </button>
        <hr id="contour"/>
        <button id="add-btn" className="center">
          +
        </button>
      </div>
    </>
  )
}