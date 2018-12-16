var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
require('react-bulma-components/full');

var Book = createReactClass({
    render: function() {
        return (
            <section class="has-text-centered">
              <div class="hero-body">
                <div class="container">
                  <p class="title is-1">ACME S.A.</p>
                  <p class="subtitle is-5">Frontend Development Test for Commite.Inc</p>
                </div>
              </div>
            </section>
            );
    }
});

module.exports = Book;