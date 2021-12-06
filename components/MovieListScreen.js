import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import SearchView from "./SearchView";
import R from "../assets/theme/R";
import MovieItem from "./MovieItem";

class MovieListScreen extends React.Component {

    //state
    movieList
    searchViewText = ''

    //event
    _onSearchViewtextChange(movieTitle) {
        this.searchViewText = movieTitle
    }
    _onFavIconClicked(isFav) {
        // update movie to favorite
    }
    _onMovieItemClicked(movie) {
        //nav to detail
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <SearchView />
                <FlatList
                    data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }]}// pass with api
                    renderItem={({ item }) => <MovieItem/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: 10
    },
    movieList: {
        marginTop: 150
    },
    test: {
        height: 50,
        width: 50,
        backgroundColor: R.colors.averageNote

    }
})

export default MovieListScreen