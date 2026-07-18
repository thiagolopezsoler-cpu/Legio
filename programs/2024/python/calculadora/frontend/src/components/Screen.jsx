// src/components/Screen.jsx

import React from 'react';

function Screen({ input }) {
    return (
        <div className="screen">
            <input type="text" value={input} readOnly />
        </div>
    );
}

export default Screen;