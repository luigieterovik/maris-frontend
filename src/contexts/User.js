import React, { useState, useEffect, createContext } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    if (userData && Object.keys(userData).length > 0) {
      localStorage.setItem('marisboutiks:userData', JSON.stringify(userData))
    }
  }, [userData])

  useEffect(() => {
    const localUserData = localStorage.getItem('marisboutiks:userData')
    if (localUserData) {
      setUserData(JSON.parse(localUserData))
    }
  }, [])

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  )
}
