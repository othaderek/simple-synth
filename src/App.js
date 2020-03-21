import React, { Component } from 'react'
import Directions from './components/Directions'
import Keyboard from './components/Keyboard'
import sine from './patches/sine'
import bitcrusher from './effects/bitcrusher'
import chorus from './effects/chorus'
import reverb from './effects/reverb'
import pingpong from './effects/pingpong'
import channel from './effects/channel'
import './App.css'
import notes from './utility/notes'
import patchMap from './utility/patchMap'
import Slider from './components/Slider'
import EffectsDropdown from './components/EffectsDropdown'

export default class App extends Component {

  state = {
    patch: sine,
    octave: 4,
    lastNote: 5,
    notesMap: notes,
    value: 0,
    currentEffect: null
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
    if (this.state.currentEffect != null){
      this.setState({
        patch: this.state.patch.disconnect(this.state.currentEffect)
      })
    }

    this.setState({ patch: patchesMap[key].connect(this.state.currentEffect) })
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
    this.setState({
      patch: this.state.patch.set(e.target.name, this.state.value),
      value: e.target.value
    })
  }

  addEffect = (effectObject) => {
    console.log(effectObject);
    
    if (this.state.currentEffect != null){
      this.setState({
        patch: this.state.patch.disconnect(this.state.currentEffect)
      })
      this.setState({
        currentEffect: effectObject
      })
      this.setState({
        patch: this.state.patch.connect(effectObject)
      })
    } else{
      this.setState({
        currentEffect: effectObject
      })
      this.setState({
        patch: this.state.patch.connect(effectObject)
      })
    }
    

    setTimeout( () => {
      console.log(this.state);
      
    },
    500)
  }
  

  changeEffect = (e) => {
    this.effectChoice(e.target.value)
  }

  addChorus = (effectObject) => {

    if (this.state.currentEffect != null){
      this.setState({
        patch: this.state.patch.disconnect(this.state.currentEffect)
      })
      this.setState({
        currentEffect: effectObject
      })
      this.setState({
        patch: this.state.patch.connect(effectObject, channel)
      })
    } else{
      this.setState({
        currentEffect: effectObject
      })
      this.setState({
        patch: this.state.patch.connect(effectObject, channel)
      })
    }
    
  }
  


  effectChoice(choice) {
    console.log(choice);
    
    switch(choice){
      case "bitcrusher":
        this.addEffect(bitcrusher);
        break;
      case "chorus":
        this.addChorus(chorus)
        break;
      case "reverb":
        this.addEffect(reverb)
        break;
      case "pingpong":
        this.addEffect(pingpong)
        break;
      default:
        break;
    }
  }

  render() {
    
    return (
      <div>
        <Directions />
        <Keyboard notesMap={this.state.notesMap} />
        <EffectsDropdown changeEffect={this.changeEffect} />
        <Slider value={this.state.value} changeSetting={this.changeSetting} />
      </div>
    )
  }
}
