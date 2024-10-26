import React, { useState, useEffect } from 'react';
import axios from 'axios';

function QuestionSection({ selectedTopic }) {
    const [question, setQuestion] = useState('');

    // Function to fetch a new question based on the selected topic
    const fetchQuestion = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/questions/${selectedTopic}`);
            setQuestion(response.data.question);
        } catch (error) {
            console.error("Error fetching question:", error);
            setQuestion("Could not load question.");
        }
    };

    // Fetch a question whenever the topic changes
    useEffect(() => {
        fetchQuestion();
    }, [selectedTopic]);

    return (
        <div className="question-section">
            <h2>{selectedTopic} Questions</h2>
            <p>{question}</p>
            <button onClick={fetchQuestion}>New Question</button>
        </div>
    );
}

export default QuestionSection;
