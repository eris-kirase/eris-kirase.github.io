import { useEffect, useState } from 'react'
const FLAG_ACCESSED = 'accessed'

export const useUser = () => {
  const [isAccessed, setIsAccessed] = useState(false)
  useEffect(() => {
    const flag = sessionStorage.getItem(FLAG_ACCESSED)
    if (flag === 'true') {
      setIsAccessed(true)
      return
    }
    sessionStorage.setItem(FLAG_ACCESSED, 'true')
    setIsAccessed(false)
  }, [])

  return isAccessed
}
