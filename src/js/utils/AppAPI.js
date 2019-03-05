/**
 * Created by sergey.derevyanko on 15.02.19.
 */
var AppActions = require('../actions/AppActions');

module.exports = {
    searchMovies: function (movie) {
        $.ajax({
            url: "http://www.omdbapi.com/?i=tt3896198&apikey=7b2cdae3&s=" + movie.title,
            dataType: 'json',
            cache: 'false',
            success: function (data) {
                AppActions.receiveMovieResults(data['Search']);
            }.bind(this),
            error: function (xhr, status, err) {
                alert(err);
            }.bind(this)

        });
    }
}