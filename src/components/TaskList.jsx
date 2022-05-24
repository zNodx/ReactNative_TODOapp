import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TaskList = ({task}) => {
  return (
    <View>
      <Text>{task.name}</Text>
    </View>
  )
}

export default TaskList

const styles = StyleSheet.create({})