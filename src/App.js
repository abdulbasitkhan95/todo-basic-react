import './App.css';
import { useState } from 'react';

function App() {

  const [inputValue, setInputValue] = useState('')
  const [toDoList, setToDoList] = useState([])
  const [updateList, setUpdateList] = useState(false)
  const [listIndex, setListIndex] = useState('')
  const onFormSubmit = e => {
    const tempList = [...toDoList]
    tempList.push(inputValue)
    setToDoList(tempList)
    setInputValue('')
  }

  const onDel = e => {
    const tempList = [...toDoList]
    tempList.splice(e, 1)
    setToDoList(tempList)
  }

   const onEdit = e => {
    setInputValue(toDoList[e])
    setUpdateList(true)
    setListIndex(e)
   }

   const onUpdate = e => {
      const tempList = [...toDoList]
       tempList.splice(listIndex, 1, inputValue)
       setToDoList(tempList)
      setUpdateList(false)
       setInputValue('')
   }

  return (
    <div className="App">
      <div className="App-header">
        <div className='Form'>
          <input placeholder="Enter Value" onChange={e => setInputValue(e.target.value)} value={inputValue} />
          {
              updateList ? <button onClick={onUpdate}>Update</button> : <button onClick={onFormSubmit}>Click to Submit</button>
          }

        </div>
        <div className='list'>
          <ul>
            {
              toDoList.map((singleToDo, index) => {
                return <li id={index} key={index}>{singleToDo} <button onClick={() => onEdit(index)}>Edit</button><button onClick={() => (onDel(index))}>Delete</button></li>
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
