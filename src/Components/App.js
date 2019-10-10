import React from 'react';
import Child from './Child'
import '../lib/css/App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state ={
      persons: {
        listNames: [
          {name: 'Connor Nicholson', phoneNumber: '704-491-0035', birthDate: '10/20/1994'},
          {name: 'John Doe', phoneNumber: '999-999-9999', birthDate: '1/1/75'},
          {name: 'Jane Doe', phoneNumber: '111-111-1111', birthDate: '2/2/8'}
        ]
      }
    }
  }
  render() {
    return (
      <Child basicInfo={this.state.persons}/>
    );
  }
}

export default App;
