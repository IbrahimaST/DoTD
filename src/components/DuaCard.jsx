import { useState } from "react";
import { Card, Container, Button } from "react-bootstrap";
import getRandomDua from "./getRandomDua";
import duas from '../data/duas.json';
import { RiSpeakFill } from "react-icons/ri";

export default function DuaCard() {
    const [dua, setDua] = useState(() => getRandomDua(duas));
    const [key, setKey] = useState(0);

    const handleNewDua = () => {
        setDua(getRandomDua(duas))
        setKey(prevKey => prevKey + 1)
    }

    const duaTTS = (duaText) => {
        if ("speechSynthesis" in window) {
            const text = new SpeechSynthesisUtterance(duaText);
            text.lang = "ar-SA";
            text.rate = 0.95;
            window.speechSynthesis.speak(text);
        }
    }

    return (
        <Container fluid className="position-absolute top-50 start-50 translate-middle text-center">
            <div className="parent">
                <h1 className="mb-5">Dua Of The Day</h1>
                <Card key={key} className="card shadow-lg mx-auto mb-1 mt-5" style={{
                    maxWidth: 400
                }}>
                    <Card.Title id="cardTitle" className="fs-50">{dua.text}</Card.Title>
                    <Card.Body id="cardBody" className="fs-50 fw-bold fst-italic">{dua.translation}</Card.Body>
                    <Card.Footer id="cardFooter" className="fs-50">{dua.context}</Card.Footer>
                </Card>
                <div>
                    <Button onClick={() => duaTTS(dua.text)} className="dua-button mt-5 me-3"> <RiSpeakFill/> Play Dua </Button>
                    <Button onClick={handleNewDua} className="dua-button mt-5">New Dua</Button>
                </div>
            </div>
        </Container>
    )
}