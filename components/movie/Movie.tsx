import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
} from 'react-native';
import {movie} from '../../models/services/movie';

interface MovieProps {
  movie: movie;
  onPress: () => void;
}

const Movie: React.FC<MovieProps> = ({movie, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={{uri: movie.Poster}} style={styles.poster} />
      <Text style={styles.title}>{movie.Title}</Text>
    </Pressable>
  );
};

const {width} = Dimensions.get('window');
const posterWidth = width / 2.5;
const posterHeight = posterWidth * 1.5;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
    // height: posterHeight + 30,
    width: posterWidth,
  },
  poster: {
    width: posterWidth,
    height: posterHeight,
    borderRadius: 10,
    overflow: 'hidden',
  },
  title: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF',
  },
});

export default Movie;
