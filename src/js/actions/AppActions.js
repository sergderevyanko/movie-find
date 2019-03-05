/**
 * Created by sergey.derevyanko on 15.02.19.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
    searchMovies(movie){
        AppDispatcher.handleViewAction({
           actionType: AppConstants.SEARCH_MOVIES,
            movie: movie
        });
    },

    receiveMovieResults(movies){
        AppDispatcher.handleViewAction({
            actionType: AppConstants.RECEIVE_MOVIE_RESULTS,
            movies: movies
        });
    }
}

module.exports = AppActions;