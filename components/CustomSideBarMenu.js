import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase';

export default class CustomSideBarMenu extends Component{
    render(){
        return(
            <View style = {{flex: 1,}}>
                <DrawerItems {...this.props} />

                <View style = {{flex: 1, justifyContent: 'flex-end', paddingBottom: 50}}>
                    <TouchableOpacity style = {{justifyContent: 'center', padding: 10, height: 30, width: '100%'}}
                    onPress = {()=>{this.props.navigation.navigate('WelcomeScreen')
                    firebase.auth().signOut()}}>
                        <Text> Log Out </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}