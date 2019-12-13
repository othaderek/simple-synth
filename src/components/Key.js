import React, { Component } from 'react'
import '../App.css'

export default class Key extends Component {
    render() {
        return (
            <div className='key' id={`key-${this.props.note}`}>
                {this.props.note}
            </div>
        )
    }
}
