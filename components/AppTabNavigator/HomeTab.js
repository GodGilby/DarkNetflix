import React from 'react';
import { View, Text, StyleSheet, Platform, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import {
    ActivityIndicator,
    RefreshControl,
    // ...others
} from 'react-native';
import MoviePoster from '../MoviePoster';
import MoviePopup from '../MoviePopup';

@connect(
    state => ({
        movies: state.movies,
        loading: state.loading,
    }),
    dispatch => ({
        refresh: () => dispatch({ type: 'CONSUMIR_API' }),
    }),
)




class HomeTab extends React.Component {

    state = {

        popupIsOpen: false,

        // Day chosen by user

        chosenDay: 0,       // choose first day by default

        // Time chosen by user

        chosenTime: null,

    }



    openMovie = (movie) => {

        this.setState({

            popupIsOpen: true,

            movie,

        });

    }



    closeMovie = () => {

        this.setState({

            popupIsOpen: false,

            // Reset values to default ones

            chosenDay: 0,

            chosenTime: null,

        });

    }



    chooseDay = (day) => {

        this.setState({

            chosenDay: day,

        });

    }



    chooseTime = (time) => {

        this.setState({

            chosenTime: time,

        });

    }
    render() {
        const { movies, loading, refresh } = this.props;
        console.log("hello");
        console.log(movies);
        return (
            <View style={styles.container}>
                {movies ? <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    // Hide all scroll indicators
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            refreshing={loading}
                            onRefresh={refresh}
                        />
                    }
                >
                    {movies.map((movie, index) => <MoviePoster
                        movie={movie}
                        onOpen={this.openMovie}
                        key={index}
                    />)}
                </ScrollView>
                    : <ActivityIndicator
                        animating={loading}
                        style={styles.loader}
                        size="large"
                    />
                }
                <MoviePopup

                    movie={this.state.movie}

                    isOpen={this.state.popupIsOpen}

                    onClose={this.closeMovie}

                    chosenDay={this.state.chosenDay}

                    chosenTime={this.state.chosenTime}

                    onChooseDay={this.chooseDay}

                    onChooseTime={this.chooseTime}

                    onBook={this.bookTicket}

                />
            </View>
        )
    }
}

export default HomeTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})﻿