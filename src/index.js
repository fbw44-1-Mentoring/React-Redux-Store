
import React from "react"
import App from "./App.js"
import reactDOM from "react-dom"
import {createStore} from "redux"
import {Provider} from "react-redux"
const initialState={
    number: 43, 
    color:"yellow",
    tasks:[]
}

//create reducer function
const Reducer=(state=initialState, action /* actions means instructions */)=>{
    console.log(action)
    if(action.type==="increment"){
     state.number++;
     return state
    }
    if(action.type==="decrement"){
        state.number--;
        return state
    }
    return state
}


//creating redux store
const mystore = createStore(Reducer)

reactDOM.render(<Provider store= {mystore} > <App/>  </Provider>    ,document.getElementById("root"))


// install redux and react-redux
// create your initial state
// create Reducer function
// create your redux store
// connect/wrap your react application using Provider Tag

{/* <MyContext.Provider value= {{number, color}}> <App/> </MyContext.Provider> */}