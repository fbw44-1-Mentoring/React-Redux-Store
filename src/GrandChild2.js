import React, { useState } from 'react'
import {useSelector, useDispatch} from "react-redux"

//retrieve data from globalstate(redux store)  use useSelector Hook
// dispatch actions to redux store use useDispatch Hook

/* export default function GrandChild2() {


    const [task, setTask]= useState("")
    const number = useSelector(state=>state.number)
     const color= useSelector(state=>state.color)
     const tasks= useSelector(state=>state.tasks)

     console.log(tasks)

     const dispatch = useDispatch()



    // const state = useSelector(state=>state)


    return (
        <div style={{border:"1px solid green", padding:"20px", backgroundColor:color}}>
            <h3>This is grandchild 2 component of APP</h3>
            <h4>Number is {number} </h4>
            <button onClick= {()=>dispatch({type:"increment",payload:5})}>Increment number</button>
            <button onClick= {()=>dispatch({type:"decrement",payload:2})}>Decrement number</button>

            <input type="text" onChange={(e)=>setTask(e.target.value)} />
            <button onClick={()=>dispatch({type:"additem", payload: task})}>Add Item</button>
        </div>
    )
}
 */

import { connect } from "react-redux"

 class GrandChild2 extends React.Component {

state={
    task:""
}  
    render(){
        console.log(this.props)
         return (
        <div style={{border:"1px solid green", padding:"20px", backgroundColor:this.props.color}}>
            <h3>This is grandchild 2 component of APP</h3>
            <h4>Number is {this.props.number} </h4>
            <button onClick= {()=>this.props.dispatch({type:"increment",payload:5})}>Increment number</button>
            <button onClick= {()=>this.props.dispatch({type:"decrement",payload:2})}>Decrement number</button>

            <input type="text" onChange={(e)=>this.setState({task:e.target.value})} />
            <button onClick={()=>this.props.dispatch({type:"additem", payload: this.state.task})}>Add Item</button>
        </div>
    )
    }
   
}

/* function getState(state){
    return state
} */

export default connect(state=>state)(GrandChild2)


