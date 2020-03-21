import Tone from 'tone'

let square = new Tone.PolySynth(4, Tone.Synth, {
    oscillator : {
          type : "square"
    },
    envelope : {
      attack : 0.5 ,
      decay : 0.1 ,
      sustain : 0.3 ,
      release : 0.05
      },
    volume: -25
  }).toMaster();

  export default square