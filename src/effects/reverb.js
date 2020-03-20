import Tone from 'tone'

let reverb = new Tone.Reverb({
    decay : 10,
    preDelay : 0.5,
    wet: 10
    });

export default reverb