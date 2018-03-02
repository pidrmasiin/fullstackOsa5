import React from 'react'
import {createStore} from 'redux'

const Statistiikka = (data) => {
  
  const state = data.store.getState()

  const palautteita = state.good + state.bad + state.ok
  const sum = state.good - state.bad
  const ka = sum / palautteita
  const pos = 100 * state.good / palautteita

  

  if (palautteita === 0) {
    return (
      <div>
        <h2>stataistiikka</h2>
        <div>ei yhtään palautetta annettu</div>
      </div>
    )
  }

  return (
    <div>
      <h2>statistiikka</h2>
      <table>
        <tbody>
          <tr>
            <td>hyvä</td>
            <td>{state.good}</td>
          </tr>
          <tr>
            <td>neutraali</td>
            <td>{state.ok}</td>
          </tr>
          <tr>
            <td>huono</td>
            <td>{state.bad}</td>
          </tr>
          <tr>
            <td>keskiarvo</td>
            <td>{ka}</td>
          </tr>
          <tr>
            <td>positiivisia</td>
            <td>{pos}</td>
          </tr>
        </tbody>
      </table>
    </div >
  )
}

  export default Statistiikka