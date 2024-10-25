import { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
    const [question, setQuestion] = useState("Click the button to get a programming question!");

    const fetchQuestion = async () => {
        try {
            // Make sure this URL matches the backend route exactly
            const response = await axios.get('https://coding-coliseum-ea22a24d29a8.herokuapp.com/api/random-question');
            setQuestion(response.data.question); // assumes the response has a `question` field
        } catch (error) {
            console.error("Error fetching question:", error);
            setQuestion("Could not load question.");
        }
    };

    return (
        <div className="App">
            <h1>Programming Question Generator</h1>
            <p>{question}</p>
            <button onClick={fetchQuestion}>New Question</button>
        </div>
    );
}

export default App;