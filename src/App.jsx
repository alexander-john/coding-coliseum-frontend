import { useState } from 'react'
import Sidebar from './Sidebar';
import QuestionSection from './QuestionSection';
import './App.css'

function App() {
    // State to hold the currently selected topic (HTML, CSS, or JavaScript)
    const [selectedTopic, setSelectedTopic] = useState('HTML');

    return (
        <div className="App">
            <Sidebar setSelectedTopic={setSelectedTopic} />
            <QuestionSection selectedTopic={selectedTopic} />
        </div>
    );
}

export default App;