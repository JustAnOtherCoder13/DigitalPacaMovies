import React from "react";
import { Appbar } from 'react-native-paper';
import R from '../../assets/theme/R';
import {  StyleSheet } from 'react-native';

class TopAppBar extends React.Component {
    render() {
        const { navigation } = this.props

        return (
            <Appbar.Header style={styles.appBar}>
                <Appbar.Action
                    icon={R.images.menuIcon}
                    color={R.colors.undertitle}
                    onPress={() => navigation.openDrawer()}
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