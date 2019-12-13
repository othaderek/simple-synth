import React, { Component } from 'react'
import Key from './Key'

export default class Keyboard extends Component {
    render() {
        const renderKeys = Object.keys(this.props.notesMap).map( key => {
            return <Key note={key} key={key} handleKeydown={this.props.handleKeydown} />
        })
        return (
            <div className='keyboard'>
                {renderKeys}
            </div>
        )
    }
}
