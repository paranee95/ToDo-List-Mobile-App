import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { addTask } from '../services/DatabaseService';

const AddTaskScreen = ({ navigation }) => {
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim() === '') {
      // Handle validation/error here
      return;
    }

    navigation.navigate('Home', { taskText });
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FFC0CB', padding: 20 }}>
      {/* Light pink background color */}
      <TextInput
        placeholder="Task"
        value={taskText}
        onChangeText={(text) => setTaskText(text)}
        style={{ backgroundColor: '#FFF', padding: 10, marginBottom: 10, borderRadius: 5 }}
      />
      {/* Border box for "Add" button with reduced size */}
      <View style={{ borderColor: '#1c1d70', borderWidth: 3, borderRadius: 3, overflow: 'hidden', padding: 1 }}>
        <Button
          title="Add"
          onPress={handleAddTask}
          color="#1c1d70" // Dark maroon color
        />
      </View>
    </View>
  );
};

export default AddTaskScreen;
