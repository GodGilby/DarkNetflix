import React, {Component} from 'react'; 
import {View, Text, StyleSheet, Platform} from 'react-native'; 


export default class FavoriteTab extends React.Component { 
        render() { 
            return ( 
            <View style={styles.container}> 
            <Text>MainScreen</Text> 
            </View> 
            ) 
        } 
    } 


    const styles = StyleSheet.create({ 
        container: { 
            flex: 1, 
            alignItems: 'center', 
            justifyContent: 'center', 
        } 
    })﻿