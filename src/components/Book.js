var React = require('react');
var createReactClass = require('create-react-class');

var Note = createReactClass({

    render: function() {
        return (
            <div>
                <strong>{this.props.title}</strong>
                <p>{this.props.votes}</p>
            </div>
        );
    }

});

module.exports = Note;