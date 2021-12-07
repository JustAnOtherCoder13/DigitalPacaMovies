import React from "react";
import { View, StyleSheet, Text, Image, } from "react-native";
import R from "../../assets/theme/R";
import { IconButton } from "react-native-paper";
import TopAppBar from "../common/TopAppBar";


class MovieDetailScreen extends React.Component {

    render() {
        return (
            <View style={styles.mainContainer}>
                <TopAppBar/>
                <View style={styles.moviePosterBlock}>
                    <Image source={R.images.digitalPacaLogo} style={styles.moviePoster} />
                </View>
                <View style={styles.titleBlock}>
                    <Text style={styles.movieTitle}>
                        Movie Title : my movie
                    </Text>
                    <IconButton
                        icon={R.images.starOutlinedIcon}
                        color={R.colors.undertitle}
                        style={styles.favIcon}
                        onPress={() => { console.log('isFav') }} />
                </View>
                <View style={styles.informationsBlock}>
                    <View style={styles.audienceBlock}>
                        <View style={styles.audienceRating}>
                            <Text style={styles.audienceRatingText}>
                                85%
                            </Text>
                        </View>
                        <Text style={styles.audienceTitle}>
                            {R.strings.audienceRating}
                        </Text>
                    </View>
                    <View style={styles.detailBlock}>
                        <Text style={styles.detailText}>
                            2h30
                        </Text>
                        <Text style={styles.detailText}>
                            15 décembre 2021
                        </Text>
                        <Text style={styles.detailText}>
                            action/aventure
                        </Text>
                        <Text style={styles.detailText}>
                            tous
                        </Text>
                    </View>
                </View>
                    <Text style={styles.synopsisTitle}>
                        {R.strings.synopsis}
                    </Text>
                    <Text style={styles.synopsis}>
                        Lorem ipsus sin dolor,Lorem ipsus sin dolor,Lorem ipsus sin dolor,
                        Lorem ipsus sin dolor,Lorem ipsus sin dolor,Lorem ipsus sin dolor,
                        Lorem ipsus sin dolor,Lorem ipsus sin dolor,Lorem ipsus sin dolor,
                        Lorem ipsus sin dolor,Lorem ipsus sin dolor,Lorem ipsus sin dolor,
                    </Text>
            </View>
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
        resizeMode: 'contain',
        height: 300,
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
        alignItems : 'center',
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
            marginTop : 20,
            margin: 10
        }
    },
    synopsis: {
        ...R.typography.body1, ...{
            marginTop : 20,
            color : R.colors.undertitle,
            opacity : 0.5,
            margin: 10
        }
    }
})

export default MovieDetailScreen