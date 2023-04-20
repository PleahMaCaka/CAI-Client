import ModalContainer from "./modal-container"
import { useDispatch } from "react-redux"
import { closeAddCharModal } from "../../redux/AddCharModalSlice"
import styled from "styled-components"

export default function AddCharModal() {
  const dispatch = useDispatch()

  return (
    <ModalContainer>
      <AddCharModalBox onClick={(event) => event.stopPropagation()}>
        <CloseModal
          id="add-char-modal-close"
          onClick={event => {
            event.nativeEvent.stopPropagation()
            dispatch(closeAddCharModal())
          }}
        >X</CloseModal>
        <AddCharTitle>Add Character</AddCharTitle>
        <InputCharId
          id="input-char-id" type="url"
          placeholder={"Character URL"}
        />
        <ExampleText>
          Example:
          <br/>
          https://beta.character.ai/chat?char=YntB_ZeqRq2l_aVf2gWDCZl4oBttQzDvhj9cXafWcF8
        </ExampleText>
        <AddCharBtn>ADD</AddCharBtn>
      </AddCharModalBox>
    </ModalContainer>
  )
}

const AddCharBtn = styled.button`
  width: 100px;
  height: 30px;
  margin-top: 5%;
  margin-bottom: 5%;
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  border-radius: 5px;
  box-shadow: 0 0 10px #000;
  font-size: 18px;
  
  &:hover {
    background-color: #010101;
    color: #fff;
    cursor: pointer;
    transition: 0.2s;
  }
`

const AddCharModalBox = styled.div`
  z-index: 101;
  visibility: visible;

  width: 600px;
  height: 340px;
  margin: 0 auto;
  padding: 0;

  background-color: #fff;
  border: 1px solid #000;
  border-radius: 5px;
  box-shadow: 0 0 10px #000;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  align-self: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  animation: modal-appear 0.5s ease-in-out;

  @keyframes modal-appear {
    0% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.5);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`

const AddCharTitle = styled.h1`
  position: absolute;
  margin-bottom: 48%;
`
const ExampleText = styled.div`
  margin-top: 5px;
  font-size: 12px;
  color: #999;
  font-style: italic;
`

const InputCharId = styled.input`
  height: 30px;
  width: 90%;
  margin-top: 5%;
  margin-bottom: 5%;
`

const CloseModal = styled.button`
  width: 34px;
  height: 34px;
  position: absolute;
  margin-left: 93.5%;
  margin-bottom: 50.5%;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
  color: black;
  border-radius: 50%;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: 0.2s;
  }
`