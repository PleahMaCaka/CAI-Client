import CharsFrame from "./chars-frame"
import HistoryFrame from "./history-frame"
import "../../styles/frames/main-frame.css"
import ChatFrame from "./chat-frame"


export default function MainFrame() {
  return (
    <>
      <div id="main-frame">
        <CharsFrame/>
        <HistoryFrame/>
        <ChatFrame/>
      </div>
    </>
  )
}