import React, { Component } from 'react';
import './App.css';
import Book from './Book/Book'

const h1Style = {
  color: 'red',
  boxShadow: '2px 2px 10px red',
  fontSize: '40px'
}

class App extends Component {
  state = {
    book: [
      { name: 'Harry Potter', year: 2005 },
      { name: 'Avatar', year: 2008 },
      { name: 'Marvel', year: 1995 },
    ],
    title: 'Hello from state'
  }

  changeTitle = () => {
    // console.log('Clicked');

    this.setState({
      title: 'Changed Title'
    })
  }

  changeTitleFromComponent = (name) => {

    this.setState({
      title: name
    })

  }

  render() {
    const book = this.state.book[0]
    const book1 = this.state.book[1]
    const book2 = this.state.book[2]

    return (
      <div className="App" >
        <h1 style={h1Style}>{this.state.title}</h1>

        <button onClick={this.changeTitle}>Click</button>

        <Book name={book.name} year={book.year} onChange={this.changeTitleFromComponent.bind(this, book.name)} />
        <Book name={book1.name} year={book1.year} onChange={this.changeTitleFromComponent.bind(this, book1.name)} />
        <Book name={book2.name} year={book2.year} onChange={() => { this.changeTitleFromComponent(book2.name) }} />
      </div>
    );
  }
}

export default App;
