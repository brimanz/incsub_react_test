import React from 'react'

//components import
import Form from './components/Form'
import Content from './components/Content'


const App = () =>{
  return(
    <div className="App">
      <div className="container">
        <div className="left">
          <Form
            title={"Let's set up your account"}
          />

        </div>

        <div className="right">
          <Content/>
        </div>
      </div>
    </div>
  );
}


export default App;