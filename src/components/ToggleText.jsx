import { useState } from "react";

export default function Mubarak() {
    const [text, setText] = useState("")

    return (
        <div>
            <p>Text: {text}</p>
            <button onClick={() => (
                text === "" ? setText("Ramadan Mubarak") : setText("")
            )}>Click Me!</button>
        </div>
    )
}