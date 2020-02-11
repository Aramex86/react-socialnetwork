import React from 'react';
import './css/App.min.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Content from './components/Profile';


const App = () => {
  return (
    <div className='app-wrapper'>
     <Header />
     <Navigation />
     <Content />
    </div>
  );
}



export default App;
