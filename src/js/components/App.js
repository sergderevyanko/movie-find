/**
 * Created by sergey.derevyanko on 15.02.19.
 */
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore')
var SearchForm = require('../components/SearchForm.js')

function getAppState() {
    return { movies: AppStore.getMovieResults() };
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = getAppState();
    }

    
    componentDidMount(){
        AppStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmound(){
        AppStore.removeChangeListener(this._onChange);
    }

    render(){
        console.log(this.state.movies);
        return (
            <div>
                <SearchForm/>
            </div>
        )
    }

    _onChange(){
        this.setState(getAppState());
    }
}

module.exports = App;