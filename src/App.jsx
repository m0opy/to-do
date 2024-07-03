import './App.css'
import Header from './Header/Header'
import ToDoList from './ToDoList/ToDoList'
import AddItemButton from './AddItemButton/AddItemButton'
import { useContext, useState } from 'react'
import { useEffect } from 'react'
import { useLocalStorage } from './hooks/use-localstorage.hooks'
import AddWindow from './AddWindow/AddWindow'
import { ThemeContextProvider } from './context/theme.context'
import { ThemeContext } from './context/theme.context'

function App() {
  // Изначально пустой массив
  // const [items, setItems] = useState([])
  const [filter, setFilter] = useState('All')
  const [showAddNote, setShowAddNote] = useState(false)
  const [validInput, setValidInput] = useState(true)
  const [addInputValue, setAddInputValue] = useState('')
  const [searchText, setSearchText] = useState('')
  const [darkTheme, setDarkTheme] = useState(false)
  const [items, saveItems] = useLocalStorage('data')
  const { themeId } = useContext(ThemeContext)

  function mapItems(items) {
    if (!items) {
      return []
    }
    return items.map((i) => ({
      ...i,
    }))
  }

  useEffect(() => {
    // Установка класса для элемента html в зависимости от состояния darkTheme
    if (themeId === 2) {
      document.documentElement.classList.add('dark-theme')
    } else {
      document.documentElement.classList.remove('dark-theme')
    }
    console.log(themeId)
  }, [themeId])

  // В фунцию отправляется новый текст и id задачи. Обновляем исходный массив и отправляем его на LocalStorage
  // Далее опрокидываем данный функционал в TaskItem. Условно: вытаскиваем необходимые данные
  const editItem = (id, newText) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, text: newText } : item
    )
    // setItems(updatedItems)
    saveItems(updatedItems)
  }

  const editCheckpointItem = (id, newCheckpoint) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, checkpoint: newCheckpoint } : item
    )
    // setItems(updatedItems)
    saveItems(updatedItems)
  }

  const onChangeFilter = (newFilter) => {
    setFilter(newFilter)
  }

  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id)
    // setItems(updatedItems)
    saveItems(updatedItems)
  }

  const setShow = () => {
    setShowAddNote(!showAddNote)
    setAddInputValue('')
    setValidInput(true)
  }

  const addItem = (item) => {
    saveItems([
      ...mapItems(items),
      {
        text: item.text,
        id: items.length > 0 ? Math.max(...items.map((i) => i.id)) + 1 : 1,
      },
    ])
  }

  // const changeDarkTheme = () => {
  //   setDarkTheme(!darkTheme)
  // }

  return (
    <div className="container">
      <Header
        filter={filter}
        onChangeFilter={onChangeFilter}
        onSearchChange={setSearchText}
        searchText={searchText}
      />
      <ToDoList
        items={items}
        onEditItem={editItem}
        onEditCheckpointItem={editCheckpointItem}
        onDeleteItem={deleteItem}
        filter={filter}
        searchText={searchText}
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
      />
    </div>
  )
}

export default function WrappedApp() {
  return (
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  )
}
