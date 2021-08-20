import React from 'react'
import GrandChild2 from './GrandChild2'

export default function Child2() {
    return (
        <div style={{border:"3px solid red", padding:"20px"}}>
            <h2>This is our Child 2 Component</h2>
            <h3>This what i get from parent component </h3>
            <GrandChild2/>
        </div>
    )
}
