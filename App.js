import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

const getPopularMovies = async () => {
  const result = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=153bac550dbfc9bda1b2f5ef2f99a808");
  console.log(JSON.stringify(result.data.results[0], null, 2));
}

const App = () => {
  getPopularMovies()
  return( <View></View> )
};

export  default App;
