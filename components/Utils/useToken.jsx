import { useState } from 'react'
import jwt from 'jsonwebtoken'

export default function useToken() {
  const initial = {
    email: 'test@test.com',
  }

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

  const verifyToken = (user) => {
    const decoded = jwt.verify(token, 'secret')
    if (decoded && decoded?.data.email === user?.email) {
      return true
    } else {
      return false
    }
  }

  return {
    setToken: saveToken,
    token,
    verifyToken,
  }
}
