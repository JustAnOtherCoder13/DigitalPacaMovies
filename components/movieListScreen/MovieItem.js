import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { IconButton } from "react-native-paper";
import R from "../../assets/theme/R";


class MovieItem extends React.Component {

    _onFavIconClicked(isFav) {
        // update movie to favorite
        console.log('isFav')
    }

    render() {
        const { movie, onMovieItemClicked } = this.props
        console.log(movie)
        return (
            <TouchableOpacity 
            style={styles.item}
            onPress = {()=> onMovieItemClicked(movie)}
            >
                <Image source={R.images.digitalPacaLogo} style={styles.moviePoster} />
                <View style={styles.movieInformations} >
                    <View style={styles.movieTitleBlock}>
                        <Text style={styles.movieTitle} >
                            Movie Title : my movie
                            </Text>
                        <IconButton
                            icon={R.images.starOutlinedIcon}
                            color={R.colors.undertitle}
                            style={styles.movieFavIcon}
                            onPress={() => { this._onFavIconClicked(true) }} />
                    </View>
                    <Text style={styles.movieRelease}>
                        Movie date : 02/12/2021
                    </Text>

                    <Text style={styles.movieSynopsis} numberOfLines={3}>
                        Lorem ipsus sin dolor,Lorem ipsus sin dolor,Lorem ipsus sin dolor,
                        Lorem ipsus sin dolor,Lorem ipsus sin dolor,Lorem ipsus sin dolor,
                        Lorem ipsus sin dolor,Lorem ipsus sin dolor,Lorem ipsus sin dolor,
                        Lorem ipsus sin dolor,Lorem ipsus sin dolor,Lorem ipsus sin dolor,
                    </Text>

                </View>

            </TouchableOpacity>
        )
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
        height: 148,
        borderRadius: 10,
        margin: 1,
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
            color : R.colors.undertitle
        }
    },

    movieSynopsis: {
        ...R.typography.body1, ...{
            opacity : 0.5
        }
    }

})

export default MovieItem