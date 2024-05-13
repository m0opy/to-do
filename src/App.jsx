import './App.css'
import Header from './Header/Header'
import ToDoList from './ToDoList/ToDoList'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  // Изначально пустой массив
  const [items, setItems] = useState([])
  const [filter, setFilter] = useState('All')

  // С помощью useEffect (1 раз) считываем массив! из LocalStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'))
    if (data) {
      setItems(data)
    }
  }, [])

  // Обновляем LocalStorage
  const saveItemsToLocalStorage = (items) => {
    localStorage.setItem('data', JSON.stringify(items))
  }

  // В фунцию отправляется новый текст и id задачи. Обновляем исходный массив и отправляем его на LocalStorage
  // Далее опрокидываем данный функционал в TaskItem. Условно: вытаскиваем необходимые данные
  const editItem = (id, newText) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, text: newText } : item
    )
    setItems(updatedItems)
    saveItemsToLocalStorage(updatedItems)
  }

  const editCheckpointItem = (id, newCheckpoint) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, checkpoint: newCheckpoint } : item
    )
    setItems(updatedItems)
    saveItemsToLocalStorage(updatedItems)
  }

  const onChangeFilter = (newFilter) => {
    setFilter(newFilter)
  }

  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id)
    setItems(updatedItems)
    saveItemsToLocalStorage(updatedItems)
  }

  return (
    <div className="container">
      <Header filter={filter} onChangeFilter={onChangeFilter} />
      <ToDoList
        items={items}
        onEditItem={editItem}
        onEditCheckpointItem={editCheckpointItem}
        onDeleteItem={deleteItem}
        filter={filter}
      />
    </div>
  )
}

export default App
