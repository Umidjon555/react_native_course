import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 


export default function Item({item, pressHandler}) {


    return (
      <TouchableOpacity style={styles.item} onPress={() => pressHandler(item.key)}>
        <MaterialIcons name="delete" size={20} color="#333" />
        <Text style={styles.itemText} >{item.text}</Text>
      </TouchableOpacity>
            
   
    );
  }
  
  const styles = StyleSheet.create({
    itemText: {
       marginLeft: 15,
    },
    item:{
      flex:1,
      padding: 16,
      marginTop: 16,
      borderColor: '#bbb',
      borderWidth: 1,
      borderStyle: "dashed",
      borderRadius: 1,
      borderRadius: 10,
      flexDirection: 'row',
    }

  })