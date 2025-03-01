import { useState, useEffect } from "react";

export default function TimeGreeter() {
    const [greeting, setGreeting] = useState("");
    
    const getGreetingByHour = (hour) => {
        if (hour < 12) {
            return "Good Morning!";
        } else if (hour < 18) {
            return "Good Afternoon!";
        } else {
            return "Good Evening!";
        }
    };
    
    useEffect(() => {
        const currentHour = new Date().getHours();
        setGreeting(getGreetingByHour(currentHour));
    }, []);
    
    const changeGreeting = () => {
        if (greeting === "Good Morning!") {
            setGreeting("Good Afternoon!");
        } else if (greeting === "Good Afternoon!") {
            setGreeting("Good Evening!");
        } else {
            setGreeting("Good Morning!");
        }
    };
    
    return (
        <div>
            <p>Greeting: {greeting}</p>
            <button onClick={changeGreeting}>Click To Change Day</button>
        </div>
    );
}