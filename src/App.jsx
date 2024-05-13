import './App.css'
import Header from './Header/Header'
import ToDoList from './ToDoList/ToDoList'
import AddItemButton from './AddItemButton/AddItemButton'
import { useState } from 'react'
import { useEffect } from 'react'
import AddWindow from './AddWindow/AddWindow'

function App() {
  // Изначально пустой массив
  const [items, setItems] = useState([])
  const [filter, setFilter] = useState('All')
  const [showAddNote, setShowAddNote] = useState(false)
  const [validInput, setValidInput] = useState(true)
  const [addInputValue, setAddInputValue] = useState('')
  const [searchText, setSearchText] = useState('')
  const [darkTheme, setDarkTheme] = useState(false)

  useEffect(() => {
    // Установка класса для элемента html в зависимости от состояния darkTheme
    if (darkTheme) {
      document.documentElement.classList.add('dark-theme')
    } else {
      document.documentElement.classList.remove('dark-theme')
    }
  }, [darkTheme])

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

  const setShow = () => {
    setShowAddNote(!showAddNote)
    setAddInputValue('')
    setValidInput(true)
  }

  const addItem = (item) => {
    setItems((oldItems) => {
      const newItem = {
        text: item.text,
        id:
          oldItems.length > 0 ? Math.max(...oldItems.map((i) => i.id)) + 1 : 1,
      }
      const newItems = [...oldItems, newItem]
      saveItemsToLocalStorage(newItems)
      return newItems
    })
  }

  const changeDarkTheme = () => {
    setDarkTheme(!darkTheme)
  }

  return (
    <div className="container">
      <Header
        filter={filter}
        onChangeFilter={onChangeFilter}
        onSearchChange={setSearchText}
        searchText={searchText}
        onChangeDarkTheme={changeDarkTheme}
        darkTheme={darkTheme}
      />
      <ToDoList
        items={items}
        onEditItem={editItem}
        onEditCheckpointItem={editCheckpointItem}
        onDeleteItem={deleteItem}
        filter={filter}
        searchText={searchText}
        darkTheme={darkTheme}
      />
      <AddItemButton onChangeShow={setShow} />
      <AddWindow
        onSubmit={addItem}
        show={showAddNote}
        onChangeShow={setShow}
        valid={validInput}
        onChangeValid={setValidInput}
        inputValue={addInputValue}
        onChangeValue={setAddInputValue}
        darkTheme={darkTheme}
      />
    </div>
  )
}

export default App
