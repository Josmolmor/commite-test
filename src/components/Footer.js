var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
require('react-bulma-components/full');

var Book = createReactClass({
  render: function() {
    return (
		<footer class="footer hero is-bold">
			<div class="content has-text-centered">
				<strong><p class="">Made By Jose M Molina Morales - <a href="mailto:molinamw@gmail.com"> contact </a></p></strong>
			</div>
		</footer>
    );
  }
});

module.exports = Book;