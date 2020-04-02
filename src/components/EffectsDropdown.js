import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import '../App.css'

export default class EffectsDropdown extends Component {

    handleChange = (e) => {
        this.props.changeEffect(e)
    }
    
    render() {
        return (
            <div className="effects-container">
            <label>Effects</label>
            <Dropdown>
                <Dropdown.Menu className="effects" onClick={this.handleChange} id="effect-select" name="effect">
                    <Dropdown.Item value={null} text="None"/>
                    <Dropdown.Item value="reverb" text="Reverb"/>
                    <Dropdown.Item value="pingpong" text="Ping Pong Delay"/>
                    <Dropdown.Item value="chorus" text="Chorus"/>
                    <Dropdown.Item value="bitcrusher" text="Bitcrusher"/>
                </Dropdown.Menu>
            </Dropdown>
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
