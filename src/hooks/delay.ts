import { useEffect, useState } from 'react'

export const useDelay = (sec: number): boolean => {
  const [waiting, setWaiting] = useState(true)
  useEffect(() => {
    setTimeout(() => setWaiting(false), sec)
  })
  return waiting
}
