import React, {useState} from 'react';
import { Button, StyleSheet, TextInput, View, } from 'react-native';


export default function AddTodo({submitHandler}) {

    const [text,setText] = useState('')

    const changeHandler = (val) => {
        setText(val)
    }

    const pressHandler = () =>{
        submitHandler(text)
        setText("")
    }
    return (
      <View >
        <TextInput
         style={styles.text}
         placeholder='add todos'
         onChangeText={changeHandler}
        value={text}
         />

         <Button 
         color={'coral'}
         title='Add Button'
         onPress={ pressHandler }
         />
      </View>
            
   
    );
  }
  
  const styles = StyleSheet.create({
    addbtn: {
       
    },
    text:{
        marginBottom:10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }

  })