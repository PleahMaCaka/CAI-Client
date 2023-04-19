import "../../styles/frames/chars-frame.css"
import HomeSVG from "../../assets/home.svg"
import ModalContainer from "../modals/modal-container"
import { useDispatch, useSelector } from "react-redux"
import { openAddCharModal } from "../../redux/AddCharModalSlice"
import { RootState } from "../../redux/Store";

export default function CharsFrame() {
  const isOpen = useSelector((state: RootState) => state.addCharModal.isOpen)
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
        {isOpen ? <ModalContainer/> : null}
      </div>
    </>
  )
}