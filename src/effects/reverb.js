import Tone from 'tone'

let reverb = new Tone.Reverb({
    decay : 1,
    preDelay : 0.5,
    wet: 1
    }).toMaster();

export default reverb