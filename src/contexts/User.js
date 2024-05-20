import React, { useState, useEffect, createContext } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({})

  useEffect(() => {
    const localUserData = localStorage.getItem('marisboutiks:userData')
    if (userData) {
      setUserData(JSON.parse(localUserData))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'marisboutiks:userData',
      JSON.stringify(userData)
    )
  }, [userData])

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  )
}
