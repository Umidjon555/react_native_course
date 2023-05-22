import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export default function Item({item, pressHandler}) {


    return (
      <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <Text style={styles.text}>{item.text}</Text>
      </TouchableOpacity>
            
   
    );
  }
  
  const styles = StyleSheet.create({
    list: {
       
    },
    text:{
      padding: 16,
      marginTop: 16,
      borderColor: '#bbb',
      borderWidth: 1,
      borderStyle: "dashed",
      borderRadius: 1,
      borderRadius: 10,
    }

  })