var React = require('react');
var Form = require('./Form');
var Grid = require('./Grid');
var createReactClass = require('create-react-class');

var App = createReactClass({

	getInitialState: function() {
        // Leemos la lista de notas guardadas o creamos una vacía
        var books = window.localStorage.getItem('books');

        if (books === null) {
            books = []; // Creamos una nueva lista vacía
        } else {
            books = JSON.parse(books); // Decodificamos la cadena
        }

        return {
            books: books
        };
    },

    onSave: function(book) {
        // Copiamos la lista de notas almacenada en el state
        var books = this.state.books.slice();

        // Insertamos la nueva nota al principio de la lista
        books.unshift(book);

        // Actualizamos el state
        this.setState({
            books: books
        });

        // Codificamos la lista como cadena de texto
        books = JSON.stringify(books);

        // Guardamos en localStorage
        window.localStorage.setItem('books', books);
    },

    render: function() {
        return (
            <div id="wrapper">
                <Form onSave={this.onSave} />
                <Grid books={this.state.books} />
            </div>
        );
    }

});

module.exports = App;