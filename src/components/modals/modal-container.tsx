import "../../styles/modals/modal-container.css"
import { useDispatch } from "react-redux"
import { closeAddCharModal } from "../../redux/AddCharModalSlice"

export default function ModalContainer() {
  const dispatch = useDispatch()

  return (
    <div
      className="modal-container"
      onClick={() => dispatch(closeAddCharModal())}
    />
  )
}