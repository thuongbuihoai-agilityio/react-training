import React from 'react';

// Styles
import './loading.css';

const Loading: React.FC = () => (
  <div data-testid='loading-page' className='loading-container'>
    <div className='circle'></div>
    <div className='circle'></div>
    <div className='circle'></div>
  </div>
);

export default Loading;
