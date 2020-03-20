import React from 'react'



const Slider = props => {
    const handleChange = (e) => {
        props.changeSetting(e)
    }
    return (
        <input onChange={handleChange} type="range" name="detune" min="-2000" max="2000" value={props.value} step="1"></input>
    )
}


export default Slider
