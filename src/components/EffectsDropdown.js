import React, { Component } from 'react'

export default class EffectsDropdown extends Component {

    handleChange = (e) => {
        console.log(e);
        this.props.changeEffect(e)
    }
    
    render() {
        return (

            <select onChange={this.handleChange} id="effect-select" name="effect">
                <option value={null}>None</option>
                <option value="bitcrusher">Bitcrusher</option>
                <option value="chorus">Chorus</option>
                <option value="reverb">Reverb</option>
            </select>  
        )
    }
}
