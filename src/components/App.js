var React = require('react');
var Form = require('./Form');
var Grid = require('./Grid');
var Header = require('./Header');
var Footer = require('./Footer');
require('react-bulma-components/full');
var createReactClass = require('create-react-class');
var votesLeftClass = 'column has-background-success is-full has-text-centered has-text-white';

var App = createReactClass({
    componentDidMount: function(){
        if(localStorage != null && window.localStorage.getItem('books') != null){
            var books = JSON.parse(localStorage.books);
            for (var i = 0; i < books.length; i++) {
                // Botones de restar
                if(books[i].subBtn == 0){
                    var auxSub = document.querySelectorAll("[data-key='" + books[i].id + "'][value='-']");
                    auxSub[0].disabled = true;
                }
                else if(books[i].subBtn == 1){
                    var auxSub = document.querySelectorAll("[data-key='" + books[i].id + "'][value='-']");
                    auxSub[0].disabled = false;
                }
                // Botones de sumar
                if(books[i].addBtn == 0){
                    var auxSub = document.querySelectorAll("[data-key='" + books[i].id + "'][value='+']");
                    auxSub[0].disabled = true;
                }
                else if(books[i].addBtn == 1){
                    var auxSub = document.querySelectorAll("[data-key='" + books[i].id + "'][value='+']");
                    auxSub[0].disabled = false;
                }
            }
        }
    },

    componentDidUpdate: function(){
        var books = JSON.parse(localStorage.books);
        for (var i = 0; i < books.length; i++) {
            // Botones de restar
            if(books[i].subBtn == 0){
                var auxSub = document.querySelectorAll("[data-key='" + books[i].id + "'][value='-']");
                auxSub[0].disabled = true;
            }
            else if(books[i].subBtn == 1){
                var auxSub = document.querySelectorAll("[data-key='" + books[i].id + "'][value='-']");
                auxSub[0].disabled = false;
            }
            // Botones de sumar
            if(books[i].addBtn == 0){
                var auxSub = document.querySelectorAll("[data-key='" + books[i].id + "'][value='+']");
                auxSub[0].disabled = true;
            }
            else if(books[i].addBtn == 1){
                var auxSub = document.querySelectorAll("[data-key='" + books[i].id + "'][value='+']");
                auxSub[0].disabled = false;
            }
        }
    },

	getInitialState: function() {
        // Leemos la lista de libros guardadas o creamos una vacía
        var books = window.localStorage.getItem('books');
        var votesLeft = window.localStorage.getItem('votesLeft');

        if (books === null) {
            books = []; // Creamos una nueva lista vacía
            localStorage.setItem('votesLeft', 5);
            votesLeftClass = 'column has-background-success is-full has-text-centered has-text-white';
        } else {
            books = JSON.parse(books); // Decodificamos la cadena
        }

        if (votesLeft === null) {
            votesLeft = []; // Creamos una nueva lista vacía
            localStorage.setItem('votesLeft', 5); // inicializamos el valor por defecto de 5 votos por usuario
        } else {
            votesLeft = JSON.parse(votesLeft); // Decodificamos la cadena
            if(votesLeft == 0){
                votesLeftClass = 'column has-background-danger is-full has-text-centered has-text-white';
            }
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
            if(books[i].title.toUpperCase()===book.title.toUpperCase()){
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
        var votesLeft = window.localStorage.getItem('votesLeft');

        if(votesLeft == 5){

        }else{
            if(votesLeft >= 0){
                localStorage.setItem('votesLeft', parseInt(votesLeft) + 1);

                this.setState({
                    votesLeft: (votesLeft + 1)
                })

                votesLeftClass = 'column has-background-success is-full has-text-centered has-text-white';
            }
            
            var index = e.target.getAttribute('data-key');
            var books = JSON.parse(localStorage.books);
            for (var i = 0; i < books.length; i++) {
                if(index == books[i].id){
                    if(books[i].votes <= 0){
                        break;
                    }
                    else{
                        books[i].votes = parseInt(books[i].votes) - 1;
                        books[i].subBtn = 0;
                        books[i].addBtn = 1;
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
        }
    },

    add(e){
        var votesLeft = window.localStorage.getItem('votesLeft');
        if(votesLeft >= 1){

            localStorage.setItem('votesLeft', votesLeft - 1);
            this.setState({
                votesLeft: (parseInt(votesLeft) - 1)
            })

            // UPDATE votesLeft
            if(votesLeft == 1){
                votesLeftClass = 'column has-background-danger is-full has-text-centered has-text-white';
            }

            // UPDATE books
            var index = e.target.getAttribute('data-key');
            var books = JSON.parse(localStorage.books);
            for (var i = 0; i < books.length; i++) {
                if(index == books[i].id){
                    books[i].votes = parseInt(books[i].votes) + 1;
                    books[i].subBtn = 1;
                    books[i].addBtn = 0;
                    break;
                }
            }
            localStorage.setItem('books', JSON.stringify(books));
            this.setState({
                books: books.sort(function(a,b){
                    // Ordenamos de forma descendiente
                    return b.votes - a.votes;
                })
            });
        }
        else{
            alert('You already used all your votes. Delete a vote before adding a new one.');
        }
    },

    delete(e){
        var index = e.target.getAttribute('data-key');
        var books = JSON.parse(localStorage.books);
        var votesLeft = window.localStorage.getItem('votesLeft');

        for (var i = 0; i < books.length; i++) {
            if(index == books[i].id){
                if(books[i].addBtn == "0" && votesLeft < 5){ // Añadimos un voto en caso de eliminar un libro siempre y cuando no tengamos más de 5 disponibles
                    localStorage.setItem('votesLeft', parseInt(votesLeft) + 1);
                    this.setState({
                        votesLeft: (votesLeft + 1)
                    })
                    votesLeftClass = 'column has-background-success is-full has-text-centered has-text-white';
                }

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
                <div class="columns">
                    <div class={votesLeftClass}>
                    {localStorage.getItem('votesLeft')} vote/s left
                    </div>
                </div>
                <section class="">
                    <div class="columns is-variable is-1 is-multiline">
                    {
                        this.state.books.map(function(book, index){
                        if(index >= 0 && index <= 4){
                            var top = 'notification is-warning'
                            var columnStyle = 'column is-one-fifth'
                        }
                        else if(index <= 4){
                            var top = 'notification has-background-grey-lighter'
                            var columnStyle = 'column is-one-fifth'
                        }else{
                            top = 'notification has-background-grey-lighter'
                            var columnStyle = 'column is-one-fifth'
                        }
                        return(
                                <div class={columnStyle}>
                                    <div class={top} key={book.id}>
                                        <h1 class="title is-5"><strong>#{index+1} {book.title}</strong></h1>
                                        <h2 class="subtitle is-5">{book.votes} votes </h2>
                                        <div class="field is-grouped">
                                            <p class="control">
                                                <input title="Press the button to substract a vote from the book" class="button is-small is-info" type="button" value="-" onClick={this.subtract.bind(this)} data-key={book.id} />
                                            </p>
                                            <p class="control">
                                                <input title="Press the button to add a vote from the book" class="button is-small is-info" type="button" value="+" onClick={this.add.bind(this)} data-key={book.id} />
                                            </p>
                                            <p class="control">
                                                <input title="Press the button to remove the book from the catalogue" class="button is-small is-danger" type="button" value="x" onClick={this.delete.bind(this)} data-key={book.id} />
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