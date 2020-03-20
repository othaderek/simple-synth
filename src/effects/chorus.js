import Tone from 'tone'
let chorus = new Tone.Chorus({
    frequency : 1.9 ,
    delayTime : 2.5 ,
    depth : 1 ,
    spread : 180,
    wet: 5
    }).toMaster();

export default chorus