import React from 'react'

//components import
import Form from './components/Form'
import Content from './components/Content'


const App = () =>{
  return(
    <div className="App">
      <div className="container">
      {/*form section*/}
        <div className="left">
          <Form/>
        </div>

      {/*heading section*/}
        <div className="right">
          <Content/>
        </div>
      </div>
    </div>
  );
}


export default App;