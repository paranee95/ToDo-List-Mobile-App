import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screen/HomeScreen';
import AddTaskScreen from './screen/AddTaskScreen';
import EditTaskScreen from './screen/EditTaskScreen'; // Import EditTaskScreen

 
const Tab = createBottomTabNavigator();
 
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="AddTask" component={AddTaskScreen} />
        <Tab.Screen
          name="EditTask"
          component={EditTaskScreen} // Use the component prop here
          options={{ tabBarVisible: false }} // Optional: hide tab bar for the edit screen
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App; 