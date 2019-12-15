import React from 'react'
import '../App.css'

export default function Key(props) {
        return (
            <div className='key' id={`key-${props.note}`}>
                {props.note}
            </div>
        )
}
