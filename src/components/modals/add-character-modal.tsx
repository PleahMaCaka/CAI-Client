import ModalContainer from "./modal-container"
import { useDispatch } from "react-redux"
import { closeAddCharModal } from "../../redux/AddCharModalSlice"
import React, { useState } from "react"
import "../../styles/modals/add-char-modal.css"

export default function AddCharModal() {
  const [url, setURL] = useState("")
  const [valid, setValid] = useState(false)
  const [urlError, setUrlError] = useState("")
  const dispatch = useDispatch()

  const addChar = () => {

  }

  const checkValid = () => {

  }

  const closeModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.nativeEvent.stopPropagation()
    dispatch(closeAddCharModal())
  }

  return (
    <ModalContainer>
      <div id={"add-char-modal-box"} onClick={(event) => event.stopPropagation()}>
        <button
          id="close-modal-btn"
          onClick={event => closeModal(event)}
          children={"X"}
        />
        <h1 id={"add-char-title"}>Add Character</h1>
        <div id={"char-preview"}>
          <div id={"char-preview-image"}>

          </div>
          Description
        </div>
        <input
          id={"input-char-id"} type={"url"}
          placeholder={"Character URL"}
          onChange={(event) => setURL(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              if (url == "") return setUrlError("Noting typed!")
              event.currentTarget.blur()
            }
          }}
        />
        <div id={"error-message"}>{urlError}</div>
        <div id={"example-message"}>
          Example:
          <br/>
          https://beta.character.ai/chat?char=6HhWfeDjetnxESEcThlBQtEUo0O8YHcXyHqCgN7b2hY
        </div>
        <button
          id={"add-char-btn"}
          onClick={() => addChar()}
          onBlur={() => checkValid()}
        >ADD
        </button>
      </div>
    </ModalContainer>
  )
}