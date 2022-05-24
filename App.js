import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, FlatList} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import TaskList from './src/components/TaskList';
import Login from './src/components/Login';

export default function App() {

  const [user, setUser] = useState(null);

  // if(!user) {
  //   return  <Login changeStatus={(user) => setUser(user)}/>
  // }
  let tasks =[
    { key: '1', name: 'Leg Day dos crias' },
    { key: '2', name: 'Naruto' },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTask}>
        <TextInput 
          style={styles.input}
          placeholder="To be done today"
        />  
        <TouchableOpacity style={styles.buttonAdd}>
          <AntDesign name="plus" size={15} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <TaskList task={item} />}
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 10,
    backgroundColor: '#f2f6fc',
  },
  containerTask: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e8ee',
  },
  buttonAdd: {
    width: 38,
    height: 38,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#62c2fc',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    borderColor: '#e1e8ee',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    fontSize: 16,
    color: '#4a6572',
  }


});
