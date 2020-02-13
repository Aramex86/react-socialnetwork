import React from 'react';
import './css/App.min.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Content from './components/Content/Profile';


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
