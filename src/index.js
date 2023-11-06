import './index.css';
import React from "react";
import SocialApp from "./App";
import {createRoot} from "react-dom/client";

const root = createRoot(document.getElementById('root'));

function App() {
    return <SocialApp />;
}

root.render(<App />);