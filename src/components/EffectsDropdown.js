import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import '../App.css'

export default class EffectsDropdown extends Component {

    handleChange = (e, data) => {
        this.props.changeEffect(e, data)
    }
    
    render() {
        const effectOptions = [
            {
                key: 'None',
                text: 'none',
                value: null,
            },
            {
                key: 'Reverb',
                text: 'Reverb',
                value: 'reverb',
            },
            {
                key: 'Ping Pong Delay',
                text: 'Ping Pong Delay',
                value: 'pingpong',
            },
            {
                key: 'Chorus',
                text: 'Chorus',
                value: 'chorus',
            },
            {
                key: 'Bit Crusher',
                text: 'Bit Crusher',
                value: 'bitcrusher',
            }
        ]
        return (
            <div className="effects-container">
            <label>Effects</label>
            <Dropdown
                placeholder='Select an effect'
                selection
                options={effectOptions}
                onChange={this.handleChange}
            />
            {/* <select className="effects"onChange={this.handleChange} id="effect-select" name="effect">
                <option value={null}>None</option>
                <option value="reverb">Reverb</option>
                <option value="pingpong">Ping Pong Delay</option>
                <option value="chorus">Chorus</option>
                <option value="bitcrusher">Bitcrusher</option>
            </select>   */}
            </div>

        )
    }
}
