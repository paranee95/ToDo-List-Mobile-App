import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('ToDoDB');

const createTable = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      async (tx) => {
        await tx.executeSql(
          'CREATE TABLE IF NOT EXISTS tasks (id TEXT PRIMARY KEY, text TEXT, completed INTEGER);',
          []
        );
      },
      (error) => reject(error),
      () => resolve()
    );
  });
};

const addTask = async (task) => {
  return new Promise((resolve, reject) => {
    db.transaction(
      async (tx) => {
        await tx.executeSql(
          'INSERT INTO tasks (id, text, completed) VALUES (?, ?, ?);',
          [task.id, task.text, task.completed ? 1 : 0]
        );
      },
      (error) => reject(error),
      () => resolve()
    );
  });
};

const updateTask = async (task) => {
  return new Promise((resolve, reject) => {
    db.transaction(
      async (tx) => {
        await tx.executeSql(
          'UPDATE tasks SET text=?, completed=? WHERE id=?;',
          [task.text, task.completed ? 1 : 0, task.id]
        );
      },
      (error) => reject(error),
      () => resolve()
    );
  });
};

const deleteTask = async (taskId) => {
  return new Promise((resolve, reject) => {
    db.transaction(
      async (tx) => {
        await tx.executeSql('DELETE FROM tasks WHERE id=?;', [taskId]);
      },
      (error) => reject(error),
      () => resolve()
    );
  });
};

const getAllTasks = async (callback) => {
  return new Promise((resolve, reject) => {
    db.transaction(
      async (tx) => {
        await tx.executeSql('SELECT * FROM tasks;', [], (_, { rows }) => callback(rows._array));
      },
      (error) => reject(error),
      () => resolve()
    );
  });
};

export { createTable, addTask, updateTask, deleteTask, getAllTasks };
// // DatabaseService.js
// import SQLite from 'react-native-sqlite-storage';
 
// const db = SQLite.openDatabase(
//   { name: 'ToDoDB', location: 'default' },
//   () => {},
//   (error) => console.error('Error opening database', error)
// );
//  console.log(db)
// const createTable = () => {
//   db.transaction((tx) => {
//     tx.executeSql(
//       'CREATE TABLE IF NOT EXISTS tasks (id TEXT PRIMARY KEY, text TEXT, completed INTEGER);',
//       [],
//       () => console.log('Table created successfully'),
//       (_, error) => console.error('Error creating table', error)
//     );
//   });
// };
 
// const addTask = (task) => {
//   db.transaction((tx) => {
//     tx.executeSql(
//       'INSERT INTO tasks (id, text, completed) VALUES (?, ?, ?);',
//       [task.id, task.text, task.completed ? 1 : 0],
//       () => console.log('Task added successfully'),
//       (_, error) => console.error('Error adding task', error)
//     );
//   });
// };
 
// const updateTask = (task) => {
//   db.transaction((tx) => {
//     tx.executeSql(
//       'UPDATE tasks SET text=?, completed=? WHERE id=?;',
//       [task.text, task.completed ? 1 : 0, task.id],
//       () => console.log('Task updated successfully'),
//       (_, error) => console.error('Error updating task', error)
//     );
//   });
// };
 
// const deleteTask = (taskId) => {
//   db.transaction((tx) => {
//     tx.executeSql(
//       'DELETE FROM tasks WHERE id=?;',
//       [taskId],
//       () => console.log('Task deleted successfully'),
//       (_, error) => console.error('Error deleting task', error)
//     );
//   });
// };
 
// const getAllTasks = (callback) => {
//   db.transaction((tx) => {
//     tx.executeSql(
//       'SELECT * FROM tasks;',
//       [],
//       (_, { rows }) => callback(rows._array),
//       (_, error) => console.error('Error fetching tasks', error)
//     );
//   });
// };
 
// export { createTable, addTask, updateTask, deleteTask, getAllTasks };