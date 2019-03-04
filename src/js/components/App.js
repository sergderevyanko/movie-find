/**
 * Created by sergey.derevyanko on 15.02.19.
 */
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore')
var SearchForm = require('../components/SearchForm.js')

class App extends React.Component {
    render(){
        return (
            <div>
                <SearchForm/>
            </div>
        )
    }
}

module.exports = App;