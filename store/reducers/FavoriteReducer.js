const initialState = { favoritesMovies: [] }

function toggleFavorite(state = initialState, action) {
  let nextState
  switch (action.type) {
      //switch reducer action
    case 'TOGGLE_FAVORITE':
        //search movie in favList
      const favoriteMovieIndex = state.favoritesMovies.findIndex(item => item.id === action.value.id)
      if (favoriteMovieIndex !== -1) {
          //if movie is already in fav supress fromp fav list
        nextState = {
          ...state,
          favoritesFilm: state.favoritesMovies.filter( (item, index) => index !== favoriteMovieIndex)
        }
      }
      else {
          //else add to fav list
        nextState = {
          ...state,
          favoritesFilm: [...state.favoritesMovies, action.value]
        }
      }
      return nextState || state
  default:
    return state
  }
}

export default toggleFavorite

