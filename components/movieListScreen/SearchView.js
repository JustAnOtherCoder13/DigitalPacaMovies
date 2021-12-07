import React from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";
import { IconButton } from "react-native-paper";
import R from "../../assets/theme/R";

class SearchView extends React.Component {

    constructor(props) {
        super(props)
        this.searchViewText = ''
    }

    render() {
        this._filterMoviesByTitle()
        return (
            <View style={styles.mainContainer} >
                <IconButton icon={R.images.searchIcon} color={R.colors.undertitle} />
                <TextInput
                    placeholder={R.strings.search}
                    style={styles.searchTextInput}
                    onChangeText={(text) => {
                        this.searchViewText = text
                        this._filterMoviesByTitle()
                    }

                    }
                />
            </View>
        )
    }
    _filterMoviesByTitle() {
        if (this.searchViewText.length > 1) {
            //search matches
            console.log('search')
        }
    }
}


const styles = StyleSheet.create({
    mainContainer: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: R.colors.undertitle,
        borderWidth: 1,
        borderRadius: 25,
        marginStart: 20,
        marginEnd: 20,
    },

    searchTextInput: {
        flex: 1,
        paddingStart: 10
    },

    searchIcon: {
        color: R.colors.undertitle,
        paddingStart: 10
    }
})

export default SearchView