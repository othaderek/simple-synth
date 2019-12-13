import Tone from 'tone'

let sine = new Tone.PolySynth(4, Tone.Synth, {
    oscillator : {
          type : "sine"
    },
    envelope : {
    attack : 0.3 ,
    decay : 0.1 ,
    sustain : 0.3 ,
    release : 0.05
  },
  volume: -10
  }).toMaster();

  export default sine