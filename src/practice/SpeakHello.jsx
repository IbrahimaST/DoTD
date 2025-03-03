import { Button } from "react-bootstrap";

const speak = () => {
    if ("speechSynthesis" in window) {
      const helloWrld = new SpeechSynthesisUtterance("Hello, World!");
      speechSynthesis.speak(helloWrld);
    } else {
      alert("Sorry, your browser doesn't support speech synthesis.");
    }
};

export default function SpeakHello() {
    return (
      <div>
        <h2>Click the Button to hear speech:</h2>
        <Button onClick={speak}>Speak</Button>
      </div>
    )
}