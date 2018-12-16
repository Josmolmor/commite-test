var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
require('react-bulma-components/full');

function handleClick(e) {
        e.preventDefault();
        console.log(this.props.id);
    }

var Book = createReactClass({
    render: function() {
        return (
            <div>
                <strong>{this.props.title}</strong>
                <p>{this.props.votes}</p>
            </div>
            );
    }
});

module.exports = Book;