import React from 'react'
import Statistiikka from './components/Statistiikka'
import {createStore} from 'redux'



class App extends React.Component {
  
  klik = (nappi) => () => {
    this.props.store.dispatch({type: nappi})
    console.log('store', this.props.store.getState())
  }


  
  render() {
    
    return (
      <div>
        <h2>anna palautetta</h2>
        <button onClick={this.klik('GOOD')}>hyvä</button>
        <button onClick={this.klik('OK')}>neutraali</button>
        <button onClick={this.klik('BAD')}>huono</button>
        <Statistiikka store={this.props.store}/>
        <button onClick={this.klik('ZERO')}>nollaa tilasto</button>
      </div>
    )
  }
}

export default App;