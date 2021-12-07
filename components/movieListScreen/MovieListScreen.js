import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import TopAppBar from "../common/TopAppBar";
import MovieItem from "./MovieItem";
import SearchView from "./SearchView";


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
                <TopAppBar/>
                <SearchView/>
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
    }
})

export default MovieListScreen