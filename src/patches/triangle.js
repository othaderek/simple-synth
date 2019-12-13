import Tone from 'tone'

let triangle = new Tone.PolySynth(4, Tone.Synth, {
    oscillator : {
          type : "triangle"
    },
    envelope : {
      attack : 0.5 ,
      decay : 0.1 ,
      sustain : 0.3 ,
      release : 0.05
      },
      volume: -10
  }).toMaster();

  export default triangle