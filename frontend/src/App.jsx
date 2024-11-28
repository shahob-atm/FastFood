// eslint-disable-next-line no-unused-vars
import React from 'react';
import About from './components/About';
import Menu from "./components/Menu.jsx";
import Takeaway from "./components/Takeaway.jsx";

const App = () => {
    return (
        <div>
            {/* Другие компоненты */}
            <About />
            <Menu/>
            <Takeaway/>
            {/* Другие компоненты */}
        </div>
    );
};

export default App;
