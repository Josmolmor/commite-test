var React = require('react');
var App = require('./components/App');
var ReactDOM = require('react-dom');

ReactDOM.render(<App />, document.getElementById('app'));

/*import React, { Component } from 'react';
import { Button } from "react-bulma-components/full";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import logo from './logo.svg';
import './App.css';

// Ahora, montamos los componentes en sus respectivos contenedores:
var ReactDOM = require('react-dom');
var Form=require('./components/Form');
var Grid=require('./components/Grid');

ReactDOM.render(<Form/>, document.getElementById('wrapper'));
ReactDOM.render(<Grid/>, document.getElementById('wrapper'));

const list = [
  {
    id: 1,
    name: 'In Search of Lost Time',
    author: 'Marcel Proust',
    votes: 0,
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51A685AMYoL._SL160_.jpg"
  },
  {
    id: 2,
    name: 'Don Quixote',
    author: 'Miguel de Cervantes',
    votes: 0,
    imageUrl:"https://images-na.ssl-images-amazon.com/images/I/41u9Jedk-mL._SL160_.jpg"
  },
  {
    id: 3,
    name: 'Ulysses',
    author: 'James Joyce',
    votes: 0,
    imageUrl:"https://images-na.ssl-images-amazon.com/images/I/51wTLf4JVwL._SL160_.jpg"
  },
  {
    id: 4,
    name: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    votes: 0,
    imageUrl:"https://images-na.ssl-images-amazon.com/images/I/51vv75oglyL._SL160_.jpg"
  },
  {
    id: 5,
    name: 'Moby Dick',
    author: 'Herman Melville',
    votes: 0,
    imageUrl:"https://images-na.ssl-images-amazon.com/images/I/41h1CVFjjdL._SL160_.jpg"
  },
  {
    id: 6,
    name: 'Hamlet',
    author: 'William Shakespeare',
    votes: 0,
    imageUrl:"https://images-na.ssl-images-amazon.com/images/I/51dhOwUuI3L._SL160_.jpg"
  },
  {
    id: 7,
    name: 'War and Peace',
    author: 'Leo Tolstoy',
    votes: 0,
    imageUrl:"https://images-na.ssl-images-amazon.com/images/I/51J1nb00FLL._SL160_.jpg"
  }
]

class App extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.setState({ books: list });
  }

  // Evento para añadir votos al libro
  handleEventAdd = bookId => {
    const updatedList = this.state.books.map(book => {
      if (book.id === bookId) {
        return Object.assign({}, book, {
          votes: book.votes + 1
        });
      } else {
        return book;
      }
    });

    this.setState({
      books: updatedList
    });
  };

  // Evento para eliminar votos de un libro
  handleEventDelete = bookId => {
    const updatedList = this.state.books.map(book => {
      if (book.id === bookId) {
        if(book.votes >= 1) {
          return Object.assign({}, book, {
            votes: book.votes - 1
          });
        }
        else
        {
          return Object.assign({}, book, {
            votes: book.votes
          });
        }
      } 
      else 
      {
        return book;
      }
    });

    this.setState({
      books: updatedList
    });
  };

  render() {
    return this.state.books.map(bookx =>
      <Book key={bookx.id} imageUrl={bookx.imageUrl} id={bookx.id} name={bookx.name} author={bookx.author} votes={bookx.votes} onVoteAdd={this.handleEventAdd} onVoteDelete={this.handleEventDelete} />);
  }
}

class Book extends Component {  

  handleClickAdd = () => this.props.onVoteAdd(this.props.id);
  handleClickDelete = () => this.props.onVoteDelete(this.props.id);

  render() {
    return (
      <div className="App">
        <div>
          <img src={this.props.imageUrl} />
        </div>
        <div>{this.props.name} by {this.props.author}</div>
        
        <div>
          {this.props.votes} votos
        </div>  
        <Button onClick={this.handleClickDelete} color="danger" size="small" rounded outlined>-</Button>
        <Button onClick={this.handleClickAdd} color="success" size="small" rounded outlined>+</Button>
      </div>
    );
  }
}

export default App;*/