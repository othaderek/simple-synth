import Tone from 'tone'

let pingpong = new Tone.PingPongDelay (0.5 , 0.6).toMaster();

export default pingpong