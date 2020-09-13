import React, {useState} from 'react';
import { View, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {

  const [items, setItems] = useState([

  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter((item) => item.id != id);
    });
  } 

  const addItem = (itemText) => {
    if(!itemText){
      Alert.alert('Enter item');
    } else {
    setItems(prevItems => {
      return[{id: Math.random(), text: itemText},...prevItems];
    });
    }
  }

  return(
    <View style = {styles.container}>
      <Header/>
      <AddItem
      addItem = {addItem}
      />
      <FlatList data={items} renderItem={({item}) => (
        <ListItem 
          item={item}
          deleteItem = {deleteItem} 
         />
      )} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});

export default App;