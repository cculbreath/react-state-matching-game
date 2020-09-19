import React, { Component } from 'react';
import OptionsPanel from '../OptionsPanel'
import Board from '../Board'
import createTiles from '../../misc/utils/'

import './App.css';

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      numTiles: 36,
      playing: false,
      previousTileIndex: null,
      tiles: [],
      toBeCleared: null

  }
  startGame = (numTiles) => {
    this.setState((state)=>({
      {
        playing: false,
        previousTileIndex: null,
        toBeCleared: null,
        tiles: createTiles(this.props.numTiles)
  
    }
    }))
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        Turbo-Matcher
      </header>
        <OptionsPanel startGame = {this.startGame} playing={this.state.playing} numTiles={this.state.numTiles} />
        <Board numTiles={this.state.numTiles} tiles={this.state.tiles} />
      
    </div>
  );

  }
}

export default App;
