import Tone from 'tone'

let reverb = new Tone.Freeverb({
    roomSize : 0.9 ,
    dampening : 3000
    }).toMaster();

export default reverb