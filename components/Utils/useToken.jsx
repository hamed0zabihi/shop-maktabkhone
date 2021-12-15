import { useState } from 'react'

export default function useToken() {
  const getToken = () => {
    if (typeof window !== 'undefined') {
      const tokenString = localStorage.getItem('token')
      const userToken = JSON.parse(tokenString)
      return userToken
    }
  }

  const [token, setToken] = useState(getToken())

  const saveToken = (userToken) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', JSON.stringify())
      setToken(userToken)
    }
  }

  return {
    setToken: saveToken,
    token,
  }
}
