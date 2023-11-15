// Task.js
import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
 
const Task = ({ task, onDelete, onToggle, onEdit }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => onToggle(task.id)}>
        <Text style={{ textDecorationLine: task.completed ? 'line-through' : 'none' }}>
          {task.text}
        </Text>
      </TouchableOpacity>
      <Button title="Edit" onPress={() => onEdit(task)} />
      <Button title="Delete" onPress={() => onDelete(task.id)} />
    </View>
  );
};
 
export default Task;