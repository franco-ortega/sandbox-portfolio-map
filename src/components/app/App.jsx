import React from 'react';
import './App.css';
import Ocean from '../oceans/Ocean';
// import Compass from '../compass/Compass';
import styles from './App.module.css'

const App = () => {
  return (
    <div className={styles.App}>
      {/* <Compass /> */}
      <Ocean />      
    </div>
  );
};

export default App;
