import { useState } from "react";
import { Button } from "react-bootstrap";

export default function SpeakInput() {
    const [text, setText] = useState("Input some text here...")

    const speak = () => {
        if ("speechSynthesis" in window) {
            const inputText = new SpeechSynthesisUtterance(text);
            inputText.lang = "en-US" // Arabic Saudi Arabia
            speechSynthesis.speak(inputText);
        }
    }

    return (
        <div>
            <h2>Input Text Here:</h2>
            <input
            type="text"
            placeholder={text}
            onChange={(e) => setText(e.target.value)}
            />
            <Button onClick={speak}>
                <RiSpeakFill style={{
                    width: 20,
                    height: 20,
                }}/>
            </Button>
        </div>
    )
}