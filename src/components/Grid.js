var React = require('react');
var createReactClass = require('create-react-class');
var Book = require('./Book'); // El nombre de los componentes debe comenzar con mayúscula!

var Grid = createReactClass({
    render: function() {
    	var books = this.props.books.map(function(book, idx){
            return (
                <Book key={book.id} id={book.id} title={book.title} votes={book.votes} />
            );
        });

        return (
            <div>
                {books}
            </div>
        );
    }

});

module.exports = Grid;