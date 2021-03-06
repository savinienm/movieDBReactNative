import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

const getPopularMovies = async () => {
  const result = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=153bac550dbfc9bda1b2f5ef2f99a808");
  return result.data.results;
}

const App = () => {
  const [movie, setMovie] = useState('')
  getPopularMovies().then((movies) => {
    setMovie(movies[0]);
  });
  return( 
  <View>
    <Text> Nom du film : {movie.original_title}</Text>
    <Text> Langue : {movie.original_language}</Text>
    <Text> Date de sortie : {movie.release_date}</Text>
  </View> 
  )
};

export  default App;
