var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
require('react-bulma-components/full');

var Form = createReactClass({
    render: function() {
        return (
            <section class="section content">
                <form onSubmit={this.save}>
                    <h2 class="subtitle">Add a new book to the catalogue</h2>
                    <div class="field is-grouped">
                        <p class="control">
                            <input class="input" title="Type the book title to add it to the catalogue" ref="titles" type="text" placeholder="Book title" required/>
                        </p>
                        <p class="control">
                            <input class="input" title="By default, the book will be added with 0 votes" type="number" min="0" step="1" ref="votes" placeholder="Votes" />
                        </p>
                        <p class="control">
                            <button class="button is-dark" type="submit" title="Add the book to the catalogue">Add</button>
                        </p>
                    </div>
                </form>
            </section>
        );
    },

    save: function(e) {
        e.preventDefault();

        // Obtenemos los valores del formulario
        if(this.refs.votes.value.trim() === ""){
            var book = {
                id: new Date().getTime(), // Generamos una id rápida
                title: this.refs.titles.value,
                votes: 0,
                subBtn: 0,
                addBtn: 1
            };
        }else{
            var book = {
                id: new Date().getTime(), // Generamos una id rápida
                title: this.refs.titles.value,
                votes: this.refs.votes.value,
                subBtn: 0,
                addBtn: 1
            }
        }

       // Enviamos la nota al controller view
       this.props.onSave(book);

        // Vaciamos el formulario
        this.refs.titles.value = '';
        this.refs.votes.value = '';

        // Y finalmente lo cerramos
        //this.close();
    },

    componentDidMount: function() {
        ReactDOM.findDOMNode(this).addEventListener('click', function(e){
            e.stopPropagation();
        });
    }

});

module.exports = Form;