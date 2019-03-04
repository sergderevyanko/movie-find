/**
 * Created by sergey.derevyanko on 15.02.19.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
    searchMovies(movie){
        console.log("Searching for movie " + movie.title);
        AppDispatcher.handleViewAction({
           actionType: AppConstants.SEARCH_MOVIES,
            movie: movie
        });
    }
}

module.exports = AppActions;