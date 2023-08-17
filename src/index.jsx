import React from 'react';
import { createRoot } from 'react-dom/client';
import ContactApp from './components/ContactApp';
import './styles/style.css';

// Default
// const root = createRoot(document.getElementById('root'));
// root.render(<ContactApp />);


// Latihan Membuat Class Component :
import MyComponent from './components/ClassComponent';

const root = createRoot(document.getElementById('root'));
root.render(
    <div>
        <MyComponent name="Dicoding" />
        <MyComponent name="John" />
        <MyComponent name="Doe" />
    </div>
);

