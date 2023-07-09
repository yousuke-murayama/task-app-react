import { Task } from "./Task"
import '../App.css'

type ShowTaskProps = {
  task: Task;
  statusMsg: string;
  isDisabled: boolean;
  onMemoChange: (id: number, memo: string) => void;
  onTaskFinish: (id: number) => void;
  onTaskDelete: (id: number) => void;
}

const TaskToShow = (props: ShowTaskProps) => {
  const { content, memo } = props.task;

  const statusMsg = props.statusMsg;

  const isDisabled = props.isDisabled;

  const handleMemoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onMemoChange(props.task.id, e.target.value);
  }

  const handleFinish = () => {
    props.onTaskFinish(props.task.id);
  }

  const handleDelete = () => {
    props.onTaskDelete(props.task.id);
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
        <button onClick={handleFinish}>{statusMsg}</button>
        <button onClick={handleDelete} disabled={isDisabled}>削除</button>
      </div>
    </>
  )
}

export default TaskToShow;