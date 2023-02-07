import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import styles from './App.module.css'
import { Header } from './components/Header'
import { v4 as uuidv4 } from 'uuid';

import './global.css'
import { Input } from './components/Input'
import { CreateButton } from './components/CreateButton'
import clipboard from './assets/Clipboard.svg'
import { Task } from './components/Task'


export default function App() {
  const [tasks, setTasks] = useState([

  ])

  const [tasksCounter, setTasksCounter] = useState(() => {
    return tasks.length
  })

  const [doneTasks, setDoneTasks] = useState(() => {
    let alreadyDone = tasks.filter(task => task.isDone == true)
    return alreadyDone.length
  })

  const [newTaskText, setNewTaskText] = useState('')

  function tasksAreEmpty() {
    if (tasksCounter == 0) {
      return true
    } else {
      return false
    }
  }

  const checkingTasksEmpty = tasksAreEmpty()

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    setTasks([...tasks,
    {
      id: uuidv4(),
      content: newTaskText,
      isDone: false
    }]
    )
    setNewTaskText('')
    setTasksCounter((actualState) => {
      return actualState + 1
    })
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewTaskText(event.target.value)
  }

  function handleInvalidTask(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório.')
  }

  function setTaskDone(id: string) {
    const settingTaskAsDone = tasks.map(task => {
      if (task.id == id) {
        task.isDone = !task.isDone
        if (task.isDone) {
          setDoneTasks((actualState) => {
            return actualState + 1
          })
        } else {
          setDoneTasks((actualState) => {
            return actualState - 1
          })
        }
      }
      return task
    })

    console.log(settingTaskAsDone)
    setTasks(settingTaskAsDone)

  }

  function deleteTask(id: string) {
    const tasksWithoutDeleteOne = tasks.filter(task => {
      if (task.id == id) {
        if (task.isDone) {
          setDoneTasks((actualState) => {
            return actualState - 1
          })
          setTasksCounter((actualState) => {
            return actualState - 1
          })
        } else {
          setTasksCounter((actualState) => {
            return actualState - 1
          })
        }
      }
      return task.id != id ? task : null
    })
    setTasks(tasksWithoutDeleteOne)
  }

  return (
    <div>
      <Header />

      <form onSubmit={handleCreateNewTask} className={styles.addTask}>
        <Input
          value={newTaskText}
          onChange={handleNewTaskChange}
          onInvalid={handleInvalidTask}
        />
        <CreateButton />
      </form>

      <div className={styles.tasksWrapper}>
        <div className={styles.createdAndDoneWrapper}>
          <div className={styles.created}>
            <p>Tarefas criadas</p>
            <div>
              <span className={styles.counterBackground}>
                <span className={styles.counterText}>
                  {tasksCounter}
                </span>
              </span>
            </div>
          </div>
          <div className={styles.done}>
            <p>Concluídas</p>
            <div>
              <span className={styles.doneCounterBackground}>
                <span className={styles.doneCounterText}>
                  {doneTasks} de {tasksCounter}
                </span>
              </span>
            </div>
          </div>
        </div>
        <div id="tasks" className={styles.tasksFilled}>
          {tasksCounter == 0 ?          
            <div className={styles.tasksEmpty}>
              <img className={styles.clipboard} src={clipboard} alt="Clipboard img" />
              <div className={styles.noTasks}>
                <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </div>
            :  
            tasks.map(task => {
              return (
                <Task
                  id={task.id}
                  key={task.id}
                  content={task.content}
                  isDone={task.isDone}
                  onMarkAsDone={setTaskDone}
                  onDeleteTask={deleteTask}
                />
              )
            })
          }
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}
