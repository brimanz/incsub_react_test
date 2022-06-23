import React from 'react'

//components import
import Form from './components/Form'


const App = () =>{
  return(
    <div className="App">
      <div className="container">
        <div className="left">
          <Form
            title={"Let's set up your account"}
          />

        </div>
        <div className="right">mundo</div>
      </div>
    </div>
  );
}


export default App;