import { title } from 'process';
import React from 'react';
//@ts-ignore
import styles from '../App.module.css';
const Button = () =>{

  const onClick = () => {}
  const tile = ''
  return <div onClick={onClick} className={styles.button}>{title}</div>
}

function App() {
  return (
    <div className={styles.app}>
     <Button/>
    </div>
  );
}

export default App;
