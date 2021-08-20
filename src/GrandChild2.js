import React from 'react'
import {useSelector, useDispatch} from "react-redux"

export default function GrandChild2() {

    const number = useSelector(state=>state.number)
     const color= useSelector(state=>state.color)

     const dispatch = useDispatch()


/*
    const state = useSelector(state=>state) */


    return (
        <div style={{border:"1px solid green", padding:"20px", backgroundColor:color}}>
            <h3>This is grandchild 2 component of APP</h3>
            <h4>Number is {number} </h4>
            <button onClick= {()=>dispatch({type:"decrement"})}>increment number</button>
        </div>
    )
}

