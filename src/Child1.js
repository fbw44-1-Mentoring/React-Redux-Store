import React, { useState } from 'react'
import GrandChild1 from './GrandChild1'

export default function Child1() {
    return (
        <div style={{border:"3px solid red", padding:"20px"}}>
            <h2>This is our Child 1 Component</h2>
            <GrandChild1/>
        </div>
    )
}
