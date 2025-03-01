import { useState, useEffect } from "react";

export default function FavoriteColor() {
    const [favoriteColor, setFavoriteColor] = useState("");

    // Load saved color from localStorage on page load
    useEffect(() => {
        const savedColor = localStorage.getItem("favoriteColor");
        if (savedColor) {
            setFavoriteColor(savedColor);
        }
    }, []);

    // Save color to localStorage when it changes
    const handleSaveColor = () => {
        const newColor = prompt("Enter your favorite color:");
        if (newColor) {
            setFavoriteColor(newColor);
            localStorage.setItem("favoriteColor", newColor);
        }
    };

    return (
        <div>
            <h2>Your Favorite Color: {favoriteColor || "None"}</h2>
            <button onClick={handleSaveColor}>Choose Favorite Color</button>
        </div>
    );
}
