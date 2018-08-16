import React, {Component} from 'react'; 
import {View, Text, StyleSheet, Platform} from 'react-native'; 


export default class HomeTab extends React.Component { 
        render() { 
            return ( 
            <View style={styles.container}> 
            <Text>Inicio</Text> 
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