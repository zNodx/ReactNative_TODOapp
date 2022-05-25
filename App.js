import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, FlatList, Keyboard} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import TaskList from './src/components/TaskList';
import Login from './src/components/Login';
import firebase from './src/config/firebase';

export default function App() {

  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    function getUser(){

      if(!user) {
        return;
      }
  
      firebase.database().ref('tasks').child(user).once('value', (snapshot) => {
        setTasks([])
        snapshot?.forEach((child) => {
          const data = {
            key: child.key,
            name: child.val().name,
          }
          setTasks(oldTasks => [...oldTasks, data]);
        });
      });

    }

    getUser();

  }, [user]); 


  if(!user) {
    return  <Login changeStatus={(user) => setUser(user)}/>
  }


  function handleDelete(key) {
    console.log(key);
  }

  function handleEdit(task) {
    console.log(task);
  }

  function handleAdd() {
    if(newTask === '') {
      return;
    }
    let task = firebase.database().ref('tasks').child(user)
    let key = task.push().key;
    task.child(key).set({
      name: newTask,
      status: false
    })
    .then (() => {
      alert('Task added');
      const data ={
        key: key,
        name: newTask,
        status: false
      }
      setTasks(oldTasks => [...oldTasks, data]);
      setNewTask('');
      Keyboard.dismiss();
    })
    .catch((error) => {
      alert(error);
    })

  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTask}>
        <TextInput 
          style={styles.input}
          placeholder="To be done today"
          onChangeText={(text) => setNewTask(text)}
          value={newTask}
        />  
        <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
          <AntDesign name="plus" size={15} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <TaskList task={item} deleteItem={handleDelete} editItem={handleEdit} />}
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
