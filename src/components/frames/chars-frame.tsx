import "../../styles/frames/chars-frame.css"
import HomeSVG from "../../assets/home.svg"

export default function CharsFrame() {
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