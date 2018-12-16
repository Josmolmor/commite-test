var React = require('react');
var Form = require('./Form');
var Grid = require('./Grid');
var Header = require('./Header');
var Footer = require('./Footer');
require('react-bulma-components/full');
var createReactClass = require('create-react-class');

var App = createReactClass({

	getInitialState: function() {
        // Leemos la lista de libros guardadas o creamos una vacía
        var books = window.localStorage.getItem('books');

        if (books === null) {
            books = []; // Creamos una nueva lista vacía
        } else {
            books = JSON.parse(books); // Decodificamos la cadena
        }

        return {
            books: books.sort(function(a,b){
                // Ordenamos de forma descendiente
                return b.votes - a.votes;
            })
        };
    },

    onSave: function(book) {
        // Copiamos la lista de libros almacenada en el state
        var books = this.state.books.slice();

        // Comprobamos que el libro no esté añadido ya en el cátalogo antes de continuar con la inserción
        var count=books.length;
        for(var i=0;i<count;i++)
        {
            if(books[i].title===book.title){
                alert('The book titled "' + book.title + '" is in the catalog already.')
                return false;
            }
        }

        // Insertamos el nuevo libro al principio de la lista
        books.unshift(book);

        // Actualizamos el state ordenado de forma descendiente
        this.setState({
            books: books.sort(function(a,b){
                // Ordenamos de forma descendiente
                return b.votes - a.votes;
            })
        });

        // Codificamos la lista como cadena de texto
        books = JSON.stringify(books);

        // Guardamos en localStorage
        window.localStorage.setItem('books', books);
        
        // Leemos la lista de libros guardadas o creamos una vacía
        var books = window.localStorage.getItem('books');
    },

    subtract(e){
        var index = e.target.getAttribute('data-key');
        var books = JSON.parse(localStorage.books);
        for (var i = 0; i < books.length; i++) {
            if(index == books[i].id){
                if(books[i].votes <= 0){
                    break;
                }
                else{
                    books[i].votes = parseInt(books[i].votes) - 1;
                    break;
                }
            }
        }

        localStorage.setItem('books', JSON.stringify(books));

        this.setState({
            books: books.sort(function(a,b){
                // Ordenamos de forma descendiente
                return b.votes - a.votes;
            })
        });
    },

    add(e){
        var index = e.target.getAttribute('data-key');
        var books = JSON.parse(localStorage.books);
        for (var i = 0; i < books.length; i++) {
            if(index == books[i].id){
                books[i].votes = parseInt(books[i].votes) + 1;  //add one
                break;  //exit loop since you found the person
            }
        }

        localStorage.setItem('books', JSON.stringify(books));

        this.setState({
            books: books.sort(function(a,b){
                // Ordenamos de forma descendiente
                return b.votes - a.votes;
            })
        });
    },

    delete(e){
        var index = e.target.getAttribute('data-key');
        var books = JSON.parse(localStorage.books);
        for (var i = 0; i < books.length; i++) {
            if(index == books[i].id){
                books.splice(i,1);
            }
        }

        localStorage.setItem('books', JSON.stringify(books));

        // Actualizamos el state ordenado de forma descendiente
        this.setState({
            books: books.sort(function(a,b){
                // Ordenamos de forma descendiente
                return b.votes - a.votes;
            })
        });
    },

    render: function() {
        return (
            <div id="wrapper">
                <Header />
                <section class="">
                    <div class="columns is-variable is-1 is-multiline">
                    {
                        this.state.books.map(function(book, index){
                        if(index >= 0 && index <= 4){
                            var top = 'notification is-warning'
                            var columnStyle = 'column is-one-fifth'
                        }
                        else if(index <= 4){
                            var top = 'notification has-background-grey-lighter centered'
                            var columnStyle = 'column is-one-fifth'
                        }else{
                            top = 'notification has-background-grey-lighter centered'
                            var columnStyle = 'column is-one-fifth'
                        }
                        return(
                                <div class={columnStyle}>
                                    <div class={top} key={book.id}>
                                        <h1 class="title is-5"><strong>#{index+1} {book.title}</strong></h1>
                                        <h2 class="subtitle is-5">{book.votes} votes </h2>
                                        <div class="field is-grouped">
                                            <p class="control">
                                                <input title="Press the button to substract a vote from the book" class="button is-small is-info" type="button" value="-" onClick={this.subtract.bind(this)} data-key={book.id}/>
                                            </p>
                                            <p class="control">
                                                <input title="Press the button to add a vote from the book" class="button is-small is-info" type="button" value="+" onClick={this.add.bind(this)} data-key={book.id}/>
                                            </p>
                                            <p class="control">
                                                <input title="Press the button to remove the book from the catalogue" class="button is-small is-danger" type="button" value="x" onClick={this.delete.bind(this)} data-key={book.id}/>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                    }, this)}
                    </div>
                </section>
                <Form onSave={this.onSave} />
                <Footer />
            </div>
        );
    }
});

module.exports = App;