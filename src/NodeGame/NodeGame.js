import React, { Component } from 'react';
import './NodeGame.css';
import { Box } from '../Box/Box';

/**
 * This Componenet renders a a game interpretation of time synchronization
 * with a time server. Users can click nodes to pause and continue their 
 * animation in an attempt to synchronize all nodes. 
 * 
 * This abstraction of time synchronization does not include RTT/2 which is
 * an integral component of synchronization on a distributed system.
 */
class NodeGame extends React.Component {
    constructor(props) {
        super(props);
        this.getLocation = this.getLocation.bind(this);
    }


    /**
     * This function is not yet working, but it will be responsible for getting
     * a div location in the viewer.
     */
    getLocation() {
        let nodeLocation = document.getElementsByClassName("box_1");
        console.log(nodeLocation);
    }


    /**
     * This ensures that the local functions mounted. 
     */
    componentDidMount() {
        this.getLocation();
    }


    render() {
        return (
            <div>
                <div>
                    <h1 className='flex-container wrap h1'>Time Synchronization</h1>
                    <h1 className='flex-container wrap p'>Click on the nodes to pause and play.</h1>
                </div>   
                <div>
                    <Box className="master_box" />
                    <hr className="coolLine"></hr>
                    <Box className="box_1" delay={.3} />
                    <Box className="box_2" delay={.5} />
                    <Box className="box_3" delay={.7} />
                    </div> 
            </div>
        )
    }
}

export default NodeGame;