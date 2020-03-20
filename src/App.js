import React, { Component } from 'react'
import Directions from './components/Directions'
import Keyboard from './components/Keyboard'
import sine from './patches/sine'
import './App.css'
import notes from './utility/notes'
import patchMap from './utility/patchMap'
import Slider from './components/Slider'

export default class App extends Component {

  state = {
    patch: sine,
    octave: 4,
    lastNote: 5,
    notesMap: notes,
    value: 0
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
    return (e.repeat) ? null : this.state.patch.triggerAttack(this.state.notesMap[e.key]) && this.keyGrey(e); 
  }
  
  keyGrey = (e) => {
    if (Object.keys(this.state.notesMap).includes(e.key)){
      let key = document.querySelector(`#key-${e.key}`)
      key.style['background-color'] = "khaki";
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
    let patchesMap = patchMap
    this.setState({ patch: patchesMap[key] })
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

  changeSetting = (e) => {
    console.log(e.target.name, this.state.value);
    this.setState({
      patch: this.state.patch.set(e.target.name, this.state.value),
      value: e.target.value
    })
  }


  render() {
    
    return (
      <div>
        <Directions />
        <Keyboard notesMap={this.state.notesMap} />
        <Slider value={this.state.value} changeSetting={this.changeSetting} />
      </div>
    )
  }
}
