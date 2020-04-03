import React from 'react'

const Slider = props => {
    const handleChange = (e) => {
        props.changeSetting(e)
    }
    return (
        <div className="slider">
            <label>Detune</label>
            <input onChange={handleChange} type="range" name="detune" min="-2000" max="2000" value={props.value} step="1"></input>
        </div>
    )
}

export default Slider
