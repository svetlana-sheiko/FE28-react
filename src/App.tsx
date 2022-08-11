// import { title } from 'process';
import React from 'react';

//@ts-ignore
import styles from './App.module.css';


 const Button = ({title,onClick,type,className}:any) =>{
  
//   // const {title,onClick} = props;
//   // const onClick = () => {}
//   // const title = ''
   return <div onClick={onClick}  className={`${styles.button} ${className} `}>{title}</div>
 }


export const  App = () => {
  return (
    <div className={styles.app}>
     <Button title ={'Primary'} type = "primary" onClick = {()=> alert('Done')}/>
     <Button title ={'Secondary'} type = "secondary" onClick = {()=> alert('Done') }className ={styles.greybtn}  />
     <Button title ={'Secondary 2'}  type = "thirdly "onClick = {()=> alert('Done')} className ={styles.whitebtn} />
    </div>
  );
}

export default App;
