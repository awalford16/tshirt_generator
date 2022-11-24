import { useState } from "react";
import "./caption.css"

export default function Caption(props) {
  const [caption, setCaption] = useState("")

  const handleKeyPress = (event) => {
    console.log("Registered key press")
    if (event.keyCode == 13) return props.submit(caption)
  }

  return (
    <input id="caption-input" placeholder="Caption..." onChange={e => setCaption(e.target.value)} onKeyUp={handleKeyPress} />
  )
}