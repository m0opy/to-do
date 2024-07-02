import { useState, useEffect } from 'react'

export function useLocalStorage(key) {
  const [data, setData] = useState([])

  // С помощью useEffect (1 раз) считываем массив! из LocalStorage
  useEffect(() => {
    const res = JSON.parse(localStorage.getItem(key))
    if (res) {
      setData(res)
    }
  }, [])

  // Обновляем LocalStorage
  const saveData = (newData) => {
    localStorage.setItem(key, JSON.stringify(newData))
    setData(newData)
  }

  return [data, saveData]
}
