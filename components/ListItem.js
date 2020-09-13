import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View, Button, Alert} from 'react-native';

const ListItem = ({item, deleteItem}) => {
    return(
        <TouchableOpacity style = {styles.listItem}>
            <View style = {styles.listItemView}>
                <Text style = {styles.listItemText}>{item.text}</Text>
                <Button 
                    title = 'done' 
                    color = 'red'
                    onPress={() => {
                        Alert.alert(
                            "Mark "+ item.text + " as done?",
                            "This will remove the item from list",
                            [
                              {
                                text: "Cancel",
                                onPress: () => console.log("Cancel Pressed"),
                                style: "cancel"
                              },
                              { text: "OK", 
                                onPress: () => deleteItem(item.id) 
                              }
                            ],
                            { cancelable: false }
                          );                      
                    }}
                    />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
},
listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center"
},
listItemText: {

}
});

export default ListItem;