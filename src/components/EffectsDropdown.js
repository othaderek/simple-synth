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
            <Dropdown
                placeholder='Select an effect'
                selection
                options={effectOptions}
                onChange={this.handleChange}
            />
            </div>

        )
    }
}
