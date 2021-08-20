
import React, { useState } from 'react';
import Child1 from "./Child1"
import Child2 from "./Child2"
function App() {

  return (
    <div className="App" style={{border:"4px solid black", padding:"20px"}}>
      <h1>This is our main Parent Component</h1>
      <Child1/>
      <Child2/>
    </div>
  );
}


export default App;