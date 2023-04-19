import "../../styles/frames/chars-frame.css"
import HomeSVG from "../../assets/home.svg"
import { useDispatch } from "react-redux"
import { openAddCharModal } from "../../redux/AddCharModalSlice"
import AddCharModal from "../modals/add-character-modal";

export default function CharsFrame() {
  const dispatch = useDispatch()

  return (
    <>
      <div id="chars-frame">
        <button id="home" className="center">
          <img src={HomeSVG} alt="home">
          </img>
        </button>
        <hr id="contour"/>
        <button id="add-btn" className="center" onClick={() => dispatch(openAddCharModal())}>
          +
        </button>
        <AddCharModal/>
      </div>
    </>
  )
}