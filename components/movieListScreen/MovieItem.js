import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { IconButton } from "react-native-paper";
import R from "../../assets/theme/R";


class MovieItem extends React.Component {

    render() {
        //get function and params from parent
        const { movie, onMovieItemClicked, onFavIconClick , navigation } = this.props
        return (
            <TouchableOpacity
                style={styles.item}
                onPress={() => onMovieItemClicked(movie, navigation)}
            >
                <Image source={movie.poster_path} style={styles.moviePoster} />
                {_displayMovieDetail()}
            </TouchableOpacity>
        )

//ui-----------------------------------------------------------------------------------
        function _displayMovieDetail() {
            return <View style={styles.movieInformations}>
                {_displayMovieTitle()}
                <Text style={styles.movieRelease}>{movie.release_date}</Text>
                <Text style={styles.movieSynopsis} numberOfLines={3}> {movie.overview}</Text>
            </View>;
        }

        function _displayMovieTitle() {
            return <View style={styles.movieTitleBlock}>
                <Text style={styles.movieTitle}>{movie.title}</Text>
                <IconButton
                    icon={R.images.starOutlinedIcon}
                    color={R.colors.undertitle}
                    style={styles.movieFavIcon}
                    onPress={() => onFavIconClick(movie)} />
            </View>;
        }
    }
}

const styles = StyleSheet.create({

    item: {
        height: 170,
        flexDirection: 'row',
        backgroundColor: R.colors.onSecondary,
        margin: 20,
        borderRadius: 10,
        shadowColor: R.colors.onPrimary,
        shadowRadius: 10,
        elevation: 15
    },

    moviePoster: {
        width: 130,
        height: 170,
        borderRadius: 10,
        marginEnd: 10,
    },
    movieInformations: {
        flex: 1,
        flexDirection: 'column',
    },

    movieTitleBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        height: 25,
        marginTop: 10,
        marginBottom: 15
    },

    movieTitle: {
        ...R.typography.h3, ...{
            color: R.colors.onPrimary,
        }
    },
    movieFavIcon: {
        height: 20,
        width: 20,
    },
    movieRelease: {
        ...R.typography.body1, ...{
            height: 20,
            marginBottom: 15,
            color: R.colors.undertitle
        }
    },

    movieSynopsis: {
        ...R.typography.body2, ...{
            opacity: 0.5
        },
        paddingEnd : 5
    }

})

export default MovieItem