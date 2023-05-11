import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Card
      title="Welcome"
      describe= 'to Webbrain'
      imgUrl="./img/images.jpg"
    />
   
    
  </React.StrictMode>
);




