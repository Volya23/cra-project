import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import Greeting from './components/Greeting/Greeting';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Greeting name= 'Sam'/>
  <Greeting name= 'Lim'/>
  <Greeting name= 'Cat'/>
  <Greeting name= 'Lina'/>
  <Greeting name= 'Dina'/>
  </>
);
