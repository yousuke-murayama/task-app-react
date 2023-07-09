import { useState } from 'react'
import './App.css'
import { Task } from './components/Task'
import TaskToShow from './components/TaskToShow'
import TaskToCreate from './components/TaskToCreate'

function App() {

  const dammyTasks: Task[] = [
    {
      id: 1,
      content: "掃除機",
      memo: "もう少しで終わりそう",
      createdDate: 11,
      isFinished: false
    },
    {
      id: 2,
      content: "皿洗い",
      memo: "来週までに終わらせたい",
      createdDate: 12,
      isFinished: false
    },
    {
      id: 3,
      content: "買い物",
      memo: "明日までに終わらせます",
      createdDate: 13,
      isFinished: false
    },
  ]

  const [tasks, setTasks] = useState(dammyTasks);
  const [content, setContent] = useState("");
  const [memo, setMemo] = useState("");

  const handleMemoTaskChange = (id: number, memo: string) => {
    const newTasks: Task[] = tasks.map((task) => {
      return id === task.id? {...task, memo: memo} : task;
    });
    setTasks(newTasks);
  }

  const handleTaskFinish = (id: number) => {
    const newTasks: Task[] = tasks.map((task) => {
      return id === task.id? {...task, isFinished: true} : task;
    });
    setTasks(newTasks);
  }

  const handleTaskDelete = (id: number) => {
    const newTasks = tasks.filter((task) => {
      return task.id != id;
    });
    setTasks(newTasks);
  }

  const handleContentTaskChangeToCreate = (content: string) => {
    setContent(content);
  }

  const handleMemoTaskChangeToCreate = (memo: string) => {
    setMemo(memo);
  }

  const handleCreateTask = (content: string, memo: string) => {
    const newTask: Task = {
      id: tasks.length + 1,
      content: content,
      memo: memo,
      createdDate: Date.now(),
      isFinished: false
    }
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    setContent("");
    setMemo("");
  }

  const taskShows = tasks.map((task) => {
    return (
      <TaskToShow
        task={task}
        key={task.id}
        onTaskFinish={(id) => handleTaskFinish(id)}
        onMemoChange={(id, memo) => handleMemoTaskChange(id, memo)}
        onTaskDelete={(id) => handleTaskDelete(id)}
        statusMsg={task.isFinished? "完了" : "未実施"}
        isDisabled={task.isFinished? false : true}
      />
    )
  })

  return (
    <>
      <div>
        <TaskToCreate
          content={content}
          onContentChangeToCreate={(content) => handleContentTaskChangeToCreate(content)}
          memo={memo}
          onMemoChangeToCreate={(memo) => handleMemoTaskChangeToCreate(memo)}
          onAddTask={(content, memo) => handleCreateTask(content, memo)}
        />
      </div>
      <div>
        {taskShows}
      </div>  
    </>
  )
}

export default App
