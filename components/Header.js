import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return(
    <View style = {styles.header}>
      <Text style = {styles.text}> {title}</Text>
    </View>
  )
}

Header.defaultProps = {
    title: 'To do List'
}

const styles = StyleSheet.create({
  header: {
    height: 120,
    padding: 15,
    backgroundColor: '#fcf2d8'
  },
  text: {
    paddingTop: 30,
    color:'red', 
    fontSize: 25, 
    fontFamily: 'Zapfino',
    textAlign: "center"
  }
});

export default Header;