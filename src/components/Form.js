var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');


var Form = createReactClass({
    render: function() {
        return (
            <form onSubmit={this.save}>
                <h2>Añadir nuevo libro al catálogo</h2>
                <input type="text" placeholder="Título del libro" />
                <input placeholder="Votos iniciales" />
                <div>
                    <button>Añadir</button>
                </div>
            </form>
        );
    },

    save: function(e) {
        e.preventDefault();

        // Obtenemos los valores del formulario
        var book = {
            id: new Date().getTime(), // Generamos una id rápida
            title: 'Prueba',
            votes: '0'
        };

       
       // Enviamos la nota al controller view
       this.props.onSave(book);

        // Vaciamos el formulario
        //this.refs.title.value = '';
        //this.refs.text.value = '';

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