import React, {Component} from 'react'; 
import {View, Text, StyleSheet, Platform} from 'react-native'; 
import {Icon, Header, Body, Title} from 'native-base'; 
import {TabNavigator} from 'react-navigation';
import {HomeTab} from './AppTabNavigator/HomeTab';
import {FavoriteTab} from './AppTabNavigator/FavoriteTab';

export default class MainScreen extends Component { 
    static navigationOptions = { 
        headerTitle: 'DarkNetflix', headerTitleStyle: { flex: 1,paddingRight: 40 }, 
        headerRight: <Icon android="back-in-time"  style={{paddingRight: 10}} /> } 
        render() { 
            return ( 
            <AppTabNavigator/> 
            ) 
        } 
    } 

    const AppTabNavigator = TabNavigator({
        HomeTab: {
            screen: HomeTab
        },
        FavoriteTab: {
            screen: FavoriteTab
        }
    })
    
    const styles = StyleSheet.create({ 
        container: { 
            flex: 1, 
            alignItems: 'center', 
            justifyContent: 'center', 
        } 
    })﻿