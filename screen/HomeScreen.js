// HomeScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import Task from '../components/Task';
import { createTable, addTask, deleteTask, getAllTasks, updateTask } from '../services/DatabaseService'; // Update the path

const HomeScreen = ({ route, navigation }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    createTables(); // Call createTable function to ensure the table exists
    fetchTasks(); // Fetch tasks from the database
  }, [route.params]);

  const createTables = () => {
    // Function to create the table if not exists
    // Call this function when the component mounts
    createTable();
  };

  const fetchTasks = () => {
    // Function to fetch tasks from the database
    // Call this function when the component mounts or when tasks are updated
    getAllTasks((result) => setTasks(result));
  };

  const addTaskToDatabase = (text) => {
    const newTask = { id: Math.random().toString(), text, completed: false };
    addTask(newTask);
    fetchTasks(); // Fetch tasks again after adding a new task
  };

  const deleteTaskFromDatabase = (taskId) => {
    deleteTask(taskId);
    fetchTasks(); // Fetch tasks again after deleting a task
  };

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    updateTask(updatedTasks.find((task) => task.id === taskId));
  };

  const editTask = (task) => {
    navigation.navigate('EditTask', { task });
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#5ee0c2', padding: 20 }}>
      {/* ... (unchanged code) */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Task
              task={item}
              onDelete={() => deleteTaskFromDatabase(item.id)}
              onToggle={() => toggleTask(item.id)}
              onEdit={() => editTask(item)}
            />
          </View>
        )}
        style={{ marginBottom: 20 }}
      />
    </View>
  );
};

export default HomeScreen;
