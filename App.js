import React, { useEffect, useState } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { createTask, deleteTask } from './graphql/mutations'
import { listTasks } from './graphql/queries'
import { Button, Heading, Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from "./aws-exports";

import { AuthenticatorContainer } from './styles.js'

Amplify.configure(awsExports);

const initialState = { name: '', description: '' }

const App = () => {
  const [formState, setFormState] = useState(initialState)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetchTodos()
  }, [tasks])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchTodos() {
    try {
      const tasksData = await API.graphql(graphqlOperation(listTasks))
      const tasks = tasksData.data.listTasks.items
      setTasks(tasks)
    } catch (err) { console.log('error fetching todos') }
  }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return
      const task = { ...formState }
      setTasks([...tasks, task])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createTask, {input: task}))
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }

  async function borrarTodo() {
    try {
      setFormState(initialState)
      console.log(tasks)
      tasks.map(async (task, index) => (
        await API.graphql(graphqlOperation(deleteTask, {input: task}))
        ))
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }

  return (
    <AuthenticatorContainer hideSignUp={true}>
      {({ signOut, user}) => (
        <div style={styles.container}>
          <Heading level={1}>Hello {user.username}</Heading>
          <Button onClick={signOut}>Sign out</Button>
          <h2>Amplify Tasks</h2>
          <input
            onChange={event => setInput('name', event.target.value)}
            style={styles.input}
            value={formState.name}
            placeholder="Name"
          />
          <input
            onChange={event => setInput('description', event.target.value)}
            style={styles.input}
            value={formState.description}
            placeholder="Description"
          />
          <button style={styles.button} onClick={addTodo}>Create Task</button>
          <button style={styles.button} onClick={borrarTodo}>Borrar Todas las Tasks</button>
          {
            tasks.map((task, index) => (
              <div key={task.id ? task.id : index} style={styles.todo}>
                <p style={styles.todoName}>{task.name}</p>
                <p style={styles.todoDescription}>{task.description}</p>
              </div>
            ))
          }
        </div>
      )}
    </AuthenticatorContainer>
  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default App;
