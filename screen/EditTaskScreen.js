import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import { updateTask } from '../services/DatabaseService';

const EditTaskScreen = ({ route, navigation }) => {
  const [taskText, setTaskText] = useState(route.params?.task?.text || '');

  useEffect(() => {
    navigation.setOptions({ title: `Edit Task` });
  }, [navigation]);

  const handleEditTask = () => {
    if (!route.params?.task) {
      // Handle the case where task is undefined
      return;
    }

    if (taskText.trim() === '') {
      // Handle validation/error here
      return;
    }

    navigation.navigate('Home', { editedTask: { ...route.params.task, text: taskText } });
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#edb2c1', padding: 20 }}>
      {/* Light green background color */}
      <TextInput
        placeholder="Task"
        value={taskText}
        onChangeText={(text) => setTaskText(text)}
        style={{ backgroundColor: '#FFF', padding: 10, marginBottom: 10, borderRadius: 5 }}
      />
      {/* Border box for "Save" button */}
      <View style={{ borderColor: '#00008B', borderWidth: 3, borderRadius: 5, overflow: 'hidden' }}>
        <Button
          title="Save"
          onPress={handleEditTask}
          color="#00008B" // Dark blue color
        />
      </View>
    </View>
  );
};

export default EditTaskScreen;
