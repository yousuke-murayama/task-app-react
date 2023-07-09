import { Task } from "./Task"
import '../App.css'

type ShowTaskProps = {
  task: Task;
  onMemoChange: (id: number, memo: string) => void;
  onTaskDone: (id: number) => void;
}

const TaskToShow = (props: ShowTaskProps) => {
  const { content, memo } = props.task;

  const handleMemoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onMemoChange(props.task.id, e.target.value);
  }

  const handleDone = () => {
    props.onTaskDone(props.task.id);
  }

  return (
    <>
      <div className="task-container">
        <div>{content}</div>
        <div>
          <input 
            type="text"
            value={memo}
            onChange={handleMemoChange} 
          />
        </div>
        <button onClick={handleDone}>完了！！</button>
      </div>
    </>
  )
}

export default TaskToShow;