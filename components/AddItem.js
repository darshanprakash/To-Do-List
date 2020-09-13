import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

const AddItem = ({addItem}) => {

  const [text, setText] = useState('');

  const onChange = textValue => setText(textValue);

  const clearText = () => setText('');

  return(
      <View>
          <TextInput 
          placeholder="Add Item" style={styles.input} 
          onChangeText = {onChange}
          value = {text}
          />
          <TouchableOpacity style={styles.btn} onPress={() => {addItem(text); clearText(); }} >
            <Text style={styles.btnText} > + Add Item</Text>
          </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 9,
        fontSize: 16
    },
    btn: {
        backgroundColor: '#eee',
        padding: 9,
        margin: 5
    },
    btnText: {
        textAlign: "center",
        fontSize: 20,
    }
});

export default AddItem;