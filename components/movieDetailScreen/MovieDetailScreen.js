import React from "react";
import { View, StyleSheet, Text, Image, } from "react-native";
import R from "../../assets/theme/R";
import { IconButton } from "react-native-paper";
import TopAppBar from "../common/TopAppBar";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";

class MovieDetailScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            movie: undefined
          }
    }
    componentDidUpdate() {
        console.log("componentDidUpdate : ")
        console.log(this.props.favoritesFilm)
    }

    render() {
        console.log(this.props.favoritesMovies)
        const { route, navigation } = this.props
        //get movie from route
        const { movie } = route.params
        return (
            <View style={styles.mainContainer}>
                <TopAppBar navigation={navigation} />
                {_displayMoviePoster()}
                {this._displayMovieTitle(movie)}
                <View style={styles.informationsBlock}>
                    {_displayAudienceRating()}
                    {_diplayMovieDetail()}
                </View>
                {_displayMovieSynopsis()}
            </View>
        )


        //UI -----------------------------------------------------------------------------------
        function _displayMovieSynopsis() {
            return <View>
                <Text style={styles.synopsisTitle}>{R.strings.synopsis}</Text>
                <Text style={styles.synopsis}>{movie.overview}</Text>
            </View>;
        }

        function _diplayMovieDetail() {
            return <View style={styles.detailBlock}>
                <Text style={styles.detailText}>2h30</Text>
                <Text style={styles.detailText}>{movie.release_date}</Text>
                <Text style={styles.detailText}> action/aventure</Text>
                <Text style={styles.detailText}>tous</Text>
            </View>;
        }

        function _displayAudienceRating() {
            return <View style={styles.audienceBlock}>
                <View style={styles.audienceRating}>
                    <Text style={styles.audienceRatingText}>{movie.vote_average + "%"}</Text>
                </View>
                <Text style={styles.audienceTitle}>{R.strings.audienceRating} </Text>
            </View>;
        }

        function _displayMoviePoster() {
            return <View style={styles.moviePosterBlock}>
                <Image source={movie.poster_path} style={styles.moviePoster} />
            </View>;
        }
    }

    //cannot pass movie to toggle favorite.
    _displayMovieTitle(movie) {
        return <View style={styles.titleBlock}>
            <Text style={styles.movieTitle}> {movie.title} </Text>
            <TouchableOpacity
            onPress={()=> this._toggleFavorite(movie)}> 
            {this._displayFavoriteImage(movie)}
            </TouchableOpacity>
        </View>;
    }
    //send action to reducer, here movie is undefined so don't work
    _toggleFavorite(movie) {
        const action = { type: "TOGGLE_FAVORITE", value: movie }
        this.props.dispatch(action)
    }

    _displayFavoriteImage(movie) {
        var sourceImage = R.images.starOutlinedIcon
        var iconColor = R.colors.onSecondary
        //if movie is favorite change image and color
        if (this.props.favoritesMovies.findIndex(item => item.id === movie.id) !== -1) {
            sourceImage = R.images.starIcon
            iconColor = R.colors.star
        }
        return (
            <IconButton
                style={styles.favIcon}
                icon={sourceImage}
                color={iconColor}
            />
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: R.colors.secondaryVariant,
    },
    moviePosterBlock: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    moviePoster: {
        height: 300,
        width: 400,
        backgroundColor: R.colors.undertitle
    },
    titleBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        margin: 10
    },
    movieTitle: {
        ...R.typography.h1, ...{
            color: R.colors.primary,
        }
    },
    favIcon: {
        height: 20,
        width: 20,
    },
    informationsBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 100,
    },
    audienceBlock: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: R.colors.undertitle
    },
    audienceRating: {
        // implement circle to show average
    },

    audienceRatingText: {
        ...R.typography.h1, ...{
            color: R.colors.undertitle,
            fontWeight: 'normal',
            opacity: 0.5
        }
    },
    audienceTitle: {
        ...R.typography.h3, ...{
            opacity: 0.5
        }
    },
    detailBlock: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginStart: 30
    },
    detailText: {
        ...R.typography.h3, ...{
            opacity: 0.5
        }
    },
    synopsisTitle: {
        ...R.typography.h2, ...{
            marginTop: 20,
            margin: 10
        }
    },
    synopsis: {
        ...R.typography.body1, ...{
            marginTop: 20,
            color: R.colors.undertitle,
            opacity: 0.5,
            margin: 10
        }
    }
})

const mapStateToProps = (state) => {
    return {favoritesMovies: state.favoritesMovies}
}

export default connect(mapStateToProps)(MovieDetailScreen)