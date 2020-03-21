import React, { Component } from 'react'
import '../App.css'

export default class EffectsDropdown extends Component {

    handleChange = (e) => {
        console.log(e);
        this.props.changeEffect(e)
    }
    
    render() {
        return (
            <div>
            <label>Effects</label>
            <select className="effects"onChange={this.handleChange} id="effect-select" name="effect">
                <option value={null}>None</option>
                <option value="bitcrusher">Bitcrusher</option>
                <option value="chorus">Chorus</option>
                <option value="reverb">Reverb</option>
                <option value="pingpong">Ping Pong Delay</option>
            </select>  
            </div>

        )
    }
}
