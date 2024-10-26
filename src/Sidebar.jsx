import React from 'react';

function Sidebar({ setSelectedTopic }) {
    return (
        <div className="sidebar">
            <h2>Topics</h2>
            <ul>
                <li onClick={() => setSelectedTopic('HTML')}>HTML</li>
                <li onClick={() => setSelectedTopic('CSS')}>CSS</li>
                <li onClick={() => setSelectedTopic('JavaScript')}>JavaScript</li>
            </ul>
        </div>
    );
}

export default Sidebar;
