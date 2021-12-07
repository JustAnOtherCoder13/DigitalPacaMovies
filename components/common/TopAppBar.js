import React from "react";
import { Appbar } from 'react-native-paper';
import R from '../../assets/theme/R';
import {  StyleSheet } from 'react-native';


class TopAppBar extends React.Component {
    render() {
        return (
            <Appbar.Header style={styles.appBar}>
                <Appbar.Action
                    icon={R.images.menuIcon}
                    color={R.colors.undertitle}
                    onPress={() => console.log('open drawer')}
                />
            </Appbar.Header>
        )
    }
}


const styles = StyleSheet.create({
    appBar: {
      backgroundColor: R.colors.onSecondary
    },
  })

export default TopAppBar