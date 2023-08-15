import React from 'react';
import ReactDOM from 'react-dom/client';

const TitleComponent = () => (
    <>
        <h1>
            Title Component
        </h1>
    </>
)

const HeadingComponent = () => {
    return (
        <div>
            <h1>First functional component</h1>
            <TitleComponent />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);