/**
 * Created by sergey.derevyanko on 15.02.19.
 */
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore')

class SearchForm extends React.Component {
    
    constructor(props){
        super(props);

        this.setTextInputRef = element => {
            this.textInput = element;
        }
    }

    render(){
        return (
            <div className="search-form">
                <h1 className="text-center">Search For A Movie</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group">
                        <input type="text" className="form-control" ref={this.setTextInputRef} placeholder="Enter a Movie Title"/>
                    </div>
                    <button className="btn btn-primary btn-block">Search Movies</button>
                </form>
            </div>
        )
    }

    onSubmit(e){
        e.preventDefault();

        var movie = {
            title: this.textInput.value
        }

        AppActions.searchMovies(movie);
    }
}

module.exports = SearchForm;/**
 * Created by sergey.derevyanko on 04.03.19.
 */
