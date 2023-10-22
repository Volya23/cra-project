import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import Meeting from './components/Meeting/MeetingDashboard';
import MeetingDashboard from './components/Meeting/MeetingDashboard';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MeetingDashboard/>
);
