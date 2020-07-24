import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';

import DATA from './Data';

const Item = ({ title, description, comment, note }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text>{description}</Text>
    <Text>{comment}</Text>
    <Text>{note} / 5</Text>
  </View>
);
  
const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} description={item.description} comment={item.comment} note={item.note} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Liste des films</Text>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainTitle: {
    textAlign: 'center',
    fontSize: 32
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
});
  
  export default App;