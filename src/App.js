import React, { Component } from 'react'
import Directions from './components/Directions'
import Keyboard from './components/Keyboard'
import sine from './patches/sine'
import triangle from './patches/triangle'
import square from './patches/square'
import './App.css'

export default class App extends Component {

  state = {
    patch: sine,
    octave: 4,
    lastNote: 5,
    notesMap: {
      'a': null,
      'w': null,
      's': null,
      'e': null,
      'd': null,
      'f': null,
      't': null,
      'g': null,
      'y': null,
      'h': null,
      'u': null,
      'j': null,
      'k': null
    }
  }
  
  componentDidMount(){
    this.resetOctave()

    let handleKeyDown = (e) => {
      (e.key === 'z' || e.key === 'x' || e.key === '1' || e.key === '2' || e.key === '3') ? this.patchOrOctave(e) : this.synthKey(e); 
    }

    let handleKeyUp = (e) => {
      this.releaseNotes(e)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)
    
  }
  handleKeyDown = (e) => {
    (e.key === 'z' || e.key === 'x' || e.key === '1' || e.key === '2' || e.key === '3') ? this.patchOrOctave(e) : this.synthKey(e); 
  }
  
  resetOctave = () => {
    this.setState({
      notesMap:{
        'a': `C${this.state.octave}`,
        'w': `C#${this.state.octave}`,
        's': `D${this.state.octave}`,
        'e': `D#${this.state.octave}`,
        'd': `E${this.state.octave}`,
        'f': `F${this.state.octave}`,
        't': `F#${this.state.octave}`,
        'g': `G${this.state.octave}`,
        'y': `G#${this.state.octave}`,
        'h': `A${this.state.octave}`,
        'u': `A#${this.state.octave}`,
        'j': `B${this.state.octave}`,
        'k': `C${this.state.lastNote}`
      }
    })
  }
  
  
  synthKey = (e) => {
    return (e.repeat) ? null : this.state.patch.triggerAttack(this.state.notesMap[e.key]) && this.logKey(e); 
  }

  logKey = (e) => {
    if (Object.keys(this.state.notesMap).includes(e.key)){
      let key = document.querySelector(`#key-${e.key}`)
      key.style['background-color'] = "grey";
    }
    
  }
  
  
  releaseNotes = (e) => {
    if (Object.keys(this.state.notesMap).includes(e.key)){
      this.state.patch.triggerRelease(this.state.notesMap[e.key]);
      let key = document.querySelector(`#key-${e.key}`)
      key.style['background-color'] = "";
    }
  }

  patchOrOctave = (e) => {
    (e.key === 'z' || e.key === 'x') ? this.changeOctave(e.key) : this.changePatch(e.key)
  }

  changePatch = (key) => {
    this.releaseNotes(key)
    let patchMap = {
      '1': sine,
      '2': triangle,
      '3': square 
    }
    this.setState({ patch: patchMap[key] })
  }
  
  changeOctave = (key) => {
    (key === 'z') ? this.octaveDown() : this.octaveUp();
  }
  
  octaveUp = () => {
    this.setState({
      octave: this.state.octave + 1,
      lastNote: this.state.lastNote + 1
    })

    this.resetOctave()
  }
  
  octaveDown = () => {
    this.setState({
      octave: this.state.octave - 1,
      lastNote: this.state.lastNote - 1
    })

    this.resetOctave()
  }

  render() {
    
    return (
      <div>
        <Directions />
        <Keyboard handleKeydown={this.handleKeyDown} notesMap={this.state.notesMap} />
      </div>
    )
  }
}
