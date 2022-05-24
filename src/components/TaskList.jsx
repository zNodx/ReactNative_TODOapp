import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import React from 'react'

const TaskList = ({task, deleteItem, editItem}) => {
  return (
    <View style={styles.taskItem}>
      <TouchableWithoutFeedback onPress={() => editItem(task)}>
        <Text>{task.name}</Text> 
      </TouchableWithoutFeedback>
      <TouchableOpacity onPress={() => deleteItem(task.key)}>
        <AntDesign name="delete" size={20} color="red" />
      </TouchableOpacity>
    </View>
  )
}

export default TaskList

const styles = StyleSheet.create({
  taskItem: {
    flex:1, 
    flexDirection:'row',
    marginHorizontal:10, 
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#e1e8ee',
    borderWidth: 1,
    borderRadius: 5,
    alignContent: 'center',
    justifyContent: 'space-between',
  }

})