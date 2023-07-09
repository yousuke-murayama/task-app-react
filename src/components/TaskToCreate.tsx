type CreateTaskProps = {
  content: string;
  memo: string;
  onContentChangeToCreate: (content: string) => void;
  onMemoChangeToCreate: (memo: string) => void;
  onAddTask: (content:string, memo: string) => void;
}

const TaskToCreate = (props: CreateTaskProps) => {

  const handleContentChangeToCreate = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onContentChangeToCreate(e.target.value);
  }

  const handleMemoChangeToCreate = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onMemoChangeToCreate(e.target.value);
  }

  const handleAdd = () => {
    props.onAddTask(props.content, props.memo);
  }

  return (
    <>
      <div>
        <label htmlFor="content">タスク内容</label>
        <input
          id="content" 
          type="text"
          value={props.content}
          onChange={handleContentChangeToCreate}
        />
      </div>
      <div>
        <label htmlFor="memo">メモ</label>
        <input
          id="memo" 
          type="text" 
          value={props.memo}
          onChange={handleMemoChangeToCreate}
        />
      </div>
      <button onClick={handleAdd}>追加！！</button>
    </>
  )
  
}

export default TaskToCreate;