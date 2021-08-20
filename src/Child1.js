import React, { useState } from 'react'
import GrandChild1 from './GrandChild1'
import {useSelector} from "react-redux"

export default function Child1() {
    const color = useSelector(state=>state.color)
    return (
        <div style={{border:"3px solid red", padding:"20px"}}>
            <h2>This is our Child 1 Component , color : {color}</h2>
            <GrandChild1/>
        </div>
    )
}
