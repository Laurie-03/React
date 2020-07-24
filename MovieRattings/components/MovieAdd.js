import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import DATA from './Data';
import MovieDetail from './MovieDetail';

export default class MovieAdd extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      movieTitle: '',
      movieDescription: '',
      movieComment: '',
      movieNote: '',
    }
  }

  addMovie() {
      var movies = DATA.length+1;
      DATA.push({id: ''+movies+'', title: this.state.movieTitle, description: this.state.movieDescription, comment: this.state.movieComment, notes: this.state.movieNote});
      console.log(DATA);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainTitle}>Ajouter un film</Text>
  
        <TextInput
          style={styles.textInput}
          placeholder="Titre du film"
          onChangeText={(text) => this.setState({movieTitle:text})}/>
  
        <TextInput
          style={styles.textInput}
          placeholder="Description du film"
          onChangeText={(text) => this.setState({movieDescription:text})}/>
  
        <TextInput
          style={styles.textInput}
          placeholder="Votre commentaire sur le film"
          onChangeText={(text) => this.setState({movieComment:text})}/>
  
        <TextInput
          style={styles.textInput}
          placeholder="Note"
          onChangeText={(text) => this.setState({movieNote:text})}/>
  
          <Button 
            style={styles.button}
            title="Valider"
            onPress={() => this.addMovie()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  mainTitle: {
    textAlign: 'center',
    fontSize: 32
  },
  textInput: {
    backgroundColor: '#f4f4f4',
    color: '#202020',
    padding: 8,
    marginBottom: 8
  },
  button: {
    padding: 8,
    color: '#ffffff'
  }
});