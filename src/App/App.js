import React, { Component, useState } from 'react';
import './App.css';
import Title from '../Title/Title';
import GraphDraw from '../GraphDraw/GraphDraw';
import NodeGame from '../NodeGame/NodeGame';
import NodeGameDelay from '../NodeGameDelay/NodeGameDelay';
import NetworkMap from '../NetworkMap/NetworkMap';
import RTT from '../RTT/RTT';
import TokenNetwork from '../TokenNetwork/TokenNetwork';
import Hourglass from '../Hourglass/Hourglass';
import PingSim from '../PingSim/PingSim';
import PingSame from '../PingSame/PingSame'
import Switch from '../Switch/Switch';

/**
 * This is the 'Driver' componenet for the rest of the app. 
 * This structure is exported to the index.js file and is then
 * rendered in the browser. 
 * 
 * This component contains all of the primary components in the 
 * application. 
 */


    function showStuff(value){
      if(value === true){
        return 'True';
      }else{
        return 'False';
      }
    }

  //class App extends React.Component{
    function App(){

    // constructor(props){
    //   super(props);

    //   const [value, setValue] = useState(false);
    // }
    //render() {
      //For Switch
      //const [value, setValue] = useState(false);

      const [value, setValue] = useState(true);

      return (
        <div>

          <div className='flex-container wrap hourglass'>
            <Hourglass />
          </div>

          <div className='flex-container wrap title'>
            <Title />
          </div>


          
          <div className="flex-container wrap title">
            <Switch 
                isOn={value} 
                handleToggle={() => setValue(!value)}
            />
          </div>

          <div className='flex-container wrap ping_same'>
            <PingSame />
          </div>

          <div className='flex-container wrap ping_sim'>
            <PingSim />
          </div>

          


          
          <div className='flex-container wrap simulation'>
            <NetworkMap />
          </div>

          <div className='flex-container wrap game_1'>
            <NodeGame />
          </div>

          
          <div className='flex-container wrap rtt'>
            <RTT />
          </div>


          <div className='flex-container wrap game_1'>
            <NodeGameDelay />  
          </div>


          <div className='flex-container wrap token'>
            <TokenNetwork />
          </div>


           {/*}
           <div className='flex-container wrap graph'>
            <GraphDraw />
          </div>
          */}
          
      
        </div>
      )
    //}
  }

export default App;
