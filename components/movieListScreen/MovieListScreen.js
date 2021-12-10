import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import TopAppBar from "../common/TopAppBar";
import MovieItem from "./MovieItem";
import SearchView from "./SearchView";
import { screens } from "../../navigation/RouteItem";
import data from '../../utils/movieList'

const movieList = data

class MovieListScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = { movieList: movieList }
    }

    render() {
        const { navigation } = this.props
        return (
            <View style={styles.mainContainer}>
                <TopAppBar navigation={navigation} />
                <SearchView onSearchMovie={this._onSearchMovie} />
                <FlatList
                    data={this.state.movieList}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) =>
                        <MovieItem
                            movie={item}
                            onMovieItemClicked={this._onMovieItemClicked }
                            onFavIconClick={this._onFavIconClick}
                            navigation={navigation} />}
                />
            </View>
        )
    }


    //event --------------------------------------------------------------------------------------
    _onMovieItemClicked = (movie, navigation) => {
        //nav to detail and pass movie in params
        navigation.navigate(screens.Home, { screen: screens.MovieDetail, params: { movie: movie } })
    }

    _onFavIconClick = (movie) => {
        //have to connect reducer to pass fav list
        console.log(movie.key + ' isFav');
    }

    _onSearchMovie = (movieTitle) => {
        // if search text is not null filter movie list
        if (movieTitle.length > 0) {
            this.setState({ movieList: this.state.movieList.filter(movie => movie.title.includes(movieTitle)) })
        }
        else this.setState({ movieList: movieList })
    }
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: 10
    },
    movieList: {
        marginTop: 150
    }
})

export default MovieListScreen