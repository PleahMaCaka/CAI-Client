import "../../styles/modals/modal-container.css"
import { useDispatch, useSelector } from "react-redux"
import { closeAddCharModal } from "../../redux/AddCharModalSlice"
import { RootState } from "../../redux/Store"
import React from "react"


type ModalContainerProps = {
  children?: React.ReactNode
}

export default function ModalContainer(props: ModalContainerProps) {
  const dispatch = useDispatch()
  const isOpen = useSelector((state: RootState) => state.addCharModal.isOpen)

  return (
    <>
      <div
        className={isOpen ? "modal-container" : "modal-container modal-hidden"}
        onClick={() => dispatch(closeAddCharModal())}
      >
        {props.children}
      </div>
    </>
  )
}