import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, TouchableHighlight, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AddTodo from './components/to_do/AddTodo';
import Header from './components/to_do/Header'
import Item from './components/to_do/Item';


export default function App() {

  const [todos, setTodos] = useState(
    [
      {text: "reading", key: '1'},
      {text: "eating", key: '2'},
      {text: "sleeping", key: '3'},
    ]
  )

  const pressHandler = (id) =>{
    setTodos((previtems) => {
      return previtems.filter((item) => item.key != id)
    })
  }

  const submitHandler = (text) => {

    setTodos(previtems => {
      return [{text, key: Math.random().toString()}, ...previtems]
    });
  }

  return (
    <TouchableWithoutFeedback onPress={ () => {
      Keyboard.dismiss()
      
    }}>
    <View style={styles.container}>
     {/* {header} */}
     <Header />
     <View style={styles.content}>
      {/* {todo form} */}
      <View style={styles.list}>
        <AddTodo submitHandler={submitHandler}/>
      <FlatList 
        data={todos}
        renderItem={({item}) => (
         <Item item = {item} pressHandler = {pressHandler}/>
        )} />
      </View>
    
     </View>
    </View>
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
    
  },
});
