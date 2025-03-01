import { useState } from "react";
import { Card, Container, Button } from "react-bootstrap";
import getRandomDua from "./getRandomDua";
import duas from '../data/duas.json';

export default function DuaCard() {
    const [dua, setDua] = useState(() => getRandomDua(duas));
    const [key, setKey] = useState(0);
    const [favorites, setFavorites] = useState()

    const handleNewDua = () => {
        setDua(getRandomDua(duas))
        setKey(prevKey => prevKey + 1)
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
                <Button onClick={handleNewDua} className="dua-button mt-5">Get New Dua</Button>
            </div>
        </Container>
    )
}