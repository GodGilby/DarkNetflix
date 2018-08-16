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

    // Component prop types

    static propTypes = {

        // Movie object with title, genre, and poster

        // movie: PropTypes.object.isRequired,

        // Called when user taps on a poster

        // onOpen: PropTypes.func.isRequired,

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

        flex: 1,                          // take up all available space

    },

    image: {

        borderRadius: 10,                 // rounded corners

        ...StyleSheet.absoluteFillObject, // fill up all space in a container

    },

    title: {

        ...defaultStyles.text,

        fontSize: 14,

        marginTop: 4,

    }

});