import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import TopAppBar from "../common/TopAppBar";
import MovieItem from "./MovieItem";
import SearchView from "./SearchView";


class MovieListScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {movieList: [{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }]}
    }

    _onMovieItemClicked = (movie, navigation) => {
        navigation.navigate('Home', {screen:'MovieDetail', params : { movie : movie}})
    }

    render() {
        const {navigation} = this.props
        return (
            <View style={styles.mainContainer}>
                <TopAppBar navigation = {navigation}/>
                <SearchView/>
                <FlatList
                    data={this.state.movieList}
                    renderItem={({ item }) => <MovieItem movie={item} onMovieItemClicked={this._onMovieItemClicked} navigation ={navigation}/>}
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