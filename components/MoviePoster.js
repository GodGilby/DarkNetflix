import React, { Component, PropTypes } from 'react';

import {

    Dimensions,

    Image,

    StyleSheet,

    Text,

    TouchableOpacity,

    View

} from 'react-native';


const defaultStyles = {
    text: {
    fontFamily: 'Avenir',

  }
}

// Get screen dimensions

const { width, height } = Dimensions.get('window');

// How many posters we want to have in each row and column

const cols = 3, rows = 3;



export default class MoviePoster extends Component {


    static propTypes = {

    }

    render() {

        const { movie, movie: { title, poster_path }, onOpen } = this.props;

        return (

            <TouchableOpacity style={styles.container} onPress={() => onOpen(movie)}>

                <View style={styles.imageContainer}>

                    <Image source={{ uri: poster_path }} style={styles.image} />

                </View>

                <Text style={styles.title} numberOfLines={1}>{title}</Text>

                

            </TouchableOpacity>

        );

    }

}



const styles = StyleSheet.create({

    container: {

        marginLeft: 10,

        marginBottom: 10,

        height: (height - 20 - 20) / rows - 10,

        width: (width - 10) / cols - 10,

    },

    imageContainer: {

        flex: 1,                         

    },

    image: {

        borderRadius: 10,                 

        ...StyleSheet.absoluteFillObject, 

    },

    title: {

        ...defaultStyles.text,

        fontSize: 14,

        marginTop: 4,

    }

});