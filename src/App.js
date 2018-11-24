import React, { Component } from 'react';

class Contacts extends Component {
  render() {
  /*  const people = [{
      name: 'rajan'
    },
    {
      name: 'samit'
    },
    {
      name: 'vivek'
    }]*/
    //dynamic pass
    let people = this.props.contacts;

    return (<ol>
        {people.map(person => (<li key={person.name}>{person.name}</li>))}
      </ol>)
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Contacts contacts= {[{name: 'rajan'},{name: 'vivek'},{name: 'samit'}]}/>
        <Contacts contacts= {[{name: 'rohit'},{name: 'prakash'},{name: 'raghav'}]}/>
    </div>
    )
  }
}

export default App;
