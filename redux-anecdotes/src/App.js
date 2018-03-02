import React from 'react';


class App extends React.Component {

  klik = (nappi, anecdote) => () => {
    this.props.store.dispatch({type: nappi, data: {
      anecdote: anecdote.content, 
      id: anecdote.id,
      votes: anecdote.votes
    }
  })
  }

  add = (event) => {
    event.preventDefault()
    this.props.store.dispatch({type: 'ADD', data: {
      content: event.target.anecdote.value, 
      id: (100000*Math.random()).toFixed(0),
      votes: 0
      }
    })
   
    event.target.anecdote.value = ''
  }


  render() {
    const anecdotes = this.props.store.getState()
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote=>
          <div key={anecdote.id}>
            <div>
              {anecdote.content} 
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={this.klik('VOTE', anecdote)}>vote</button>
            </div>
          </div>
        )}
        <h2>create new</h2>
        <form onSubmit={this.add}>
          <div><input name="anecdote"/>
          </div>
          <button>create</button> 
        </form>
      </div>
    )
  }
}

export default App